const fetch = require('node-fetch');
const fs = require('fs');

let fileContents = '';
if (fs.existsSync(process.env.GIT_PARAMS)) {
  fileContents = fs.readFileSync(process.env.GIT_PARAMS, 'utf-8');
} else {
  fileContents = process.argv[2];
}

const regexToSkip = [
  /^[Mm]erge branch '.+' into .+/,
  /^[Mm]erge branch/,
  /^[Mm]erged in/,
  /^Merge remote-tracking branch/,
  /^Merge tag /,
];
regexToSkip.forEach(function(regex) {
  if (fileContents.match(regex)) {
    process.exit(0);
  }
}, this);

const keyRegex = /([A-Z]+-[0-9]+)/;
const match = fileContents.match(keyRegex);
if (!match) {
  console.error('JIRA issue key was not found in the commit message. The key must be placed at the start of the message.');
  process.exit(1);
} else {
  const issueKey = match[1];
  const url = `https://slimmingworlddigital.atlassian.net/rest/api/2/issue/${issueKey}?fields=status,issuetype`;
  const auth = 'cHJvY2Vzcy51c2VyOkoxckBQMGwxYzNS';

  fetch(url, {
    method: 'get',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.status === 404) {
      console.error(`Issue key ${issueKey} was not found in JIRA.`);
      process.exit(1);
    } else if (!response.ok) {
      // 401 errors are to be ignored (authentication should always work so this
      // probably indicates an issue with JIRA cloud)
      if (response.status === 401) {
        process.exit(0);
      } else {
        console.error(`Invalid status code received from JIRA api: ${response.status} ${response.statusText}. Please use --no-verify to commit and raise this as an issue.`);
        process.exit(1);
      }
    } else {
      response.json().then(json => {
        if (json.fields.issuetype.name === 'Epic') {
          console.error('An epic cannot be used as a target of a commit message. Please replace the issue id with a child issue of the epic.');
          process.exit(1);
        }
        const validStatuses = [];
        switch (json.fields.issuetype.name) {
          case 'Process Failure':
            validStatuses.push('In Development');
            break;
          case 'Bug':
          case 'Story':
          case 'Spike':
          case 'Task':
            validStatuses.push('In Development');
            validStatuses.push('In Review');
            break;
          case 'Task (DP)':
            validStatuses.push('In Progress');
            validStatuses.push('In Development');
            break;
          case 'Sub-task':
            validStatuses.push('In Progress');
            validStatuses.push('In Development');
            break;
          case 'Code Defect':
            validStatuses.push('In Development');
            break;
          case 'Task (UX)':
            validStatuses.push('In Progress');
            break;
          default:
            validStatuses.push('In Progress');
            validStatuses.push('In Development');
            break;
        }
        if (!validStatuses.includes(json.fields.status.name)) {
          console.error(`Issue ${issueKey} is not in the correct status to commit for an issue with type '${json.fields.issuetype.name}'. Expected ${expectedStatusFormatter(validStatuses)} found '${json.fields.status.name}'.`);
          process.exit(1);
        }
      });
    }
  }).catch(err => {
    console.error(`Unable to contact the JIRA api: ${err.code}. If you have no internet access please use --no-verify to commit.`);
    process.exit(1);
  });
}

const expectedStatusFormatter = (validStatuses) => {
  return (!validStatuses || !validStatuses.length) ? '' : validStatuses.reduce(
    (accumulator, currentValue) =>
      accumulator + (accumulator === '' ? '' : ', ') + '\'' + currentValue + '\'', '');
};
