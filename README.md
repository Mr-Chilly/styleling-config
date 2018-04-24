# Stylelint.Config

SCSS linting rules, this extends the basic stylelint rules for use with our global projects. 

---
## Installation

```
yarn add https://github.com/Mr-Chilly/styleling-config
```
 

---

## .stylelintrc
```
{
  "extends": "stylelint-config-chilly"
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
