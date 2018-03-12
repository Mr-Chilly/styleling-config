# Stylelint.Config.SlimmingWorld

SlimmingWorld Global SCSS linting rules, this extends the basic stylelint rules for use with our global projects. 

---
## Installation

```
yarn add https://bitbucket.org/milesbram/slimmingworld.platform.stylelintconfig#develop
```
 

---

## .stylelintrc
```
{
  "extends": "stylelint-config-slimmingworld"
}
```

Almost too easy...

---
## example package.json script
```
"scripts": {
  "lint:scss": "stylelint **/*.scss --cache",
}
```
which would allow you to lint your project via `yarn lint:scss`
