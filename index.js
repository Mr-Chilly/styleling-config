"use strict"

module.exports = {
  "plugins": [
    "stylelint-declaration-use-variable",
    "stylelint-scss",
  ],
  "rules": {
    "declaration-bang-space-before": "always",
    "declaration-bang-space-after": "never",
    "declaration-property-value-blacklist": {
      "/^border/": ["none"]
    },
    "color-named": "never",
    "color-no-hex": [true, {
      "message": "Please use a color variable"
    }],
    "declaration-block-no-duplicate-properties": true,
    "rule-empty-line-before": ["always-multi-line", {
      "except": [
        "after-single-line-comment",
        "inside-block-and-after-rule",
        "first-nested"
      ],
      "ignore": [
        "after-comment",
        "inside-block"
      ]
    }],
    "color-hex-length": "short",
    "color-hex-case": "lower",
    "no-missing-end-of-source-newline": true,
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "selector-max-id": 0,
    "declaration-no-important": true,
    "indentation": 2,
    "number-leading-zero": "never",
    "no-duplicate-selectors": true,
    "max-nesting-depth": 5,
    "unit-whitelist": [["%", "vh", "vw", "s", "ms", "deg"], {
      "message": "Please use size() or rem-size() functions for size units"
    }],
    "selector-pseudo-element-colon-notation": "double",
    "selector-no-qualifying-type": true,
    "selector-class-pattern": "^([a-z]+\\-?[a-z]+?)*",
    "shorthand-property-no-redundant-values": true,
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "selector-list-comma-newline-after": "always",
    "function-comma-space-after": "always-single-line",
    "declaration-colon-space-after": "always",
    "block-opening-brace-newline-before": "always-single-line",
    "block-opening-brace-space-before": "always",
    "function-parentheses-space-inside": "never",
    "selector-attribute-quotes": "always",
    "declaration-block-trailing-semicolon": "always",
    "no-eol-whitespace": true,
    "number-no-trailing-zeros": true,
    "function-url-quotes":"always",
    "property-no-vendor-prefix": true,
    "selector-no-vendor-prefix": true,
    "media-feature-name-no-vendor-prefix": true,
    "at-rule-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "length-zero-no-unit": true,
    "sh-waqar/declaration-use-variable": [["*", "font-family"]],
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/selector-no-redundant-nesting-selector": true,
    "scss/dollar-variable-pattern": ["^([a-z]+[A-Z]?)*$", {
      "message": "Please use camelCase for var names"
    }],
    "scss/at-mixin-pattern": ["^([a-z]+\\-?[a-z]+?)*$", {
      "message": "Please use hyhenated_lowercase for mixin name"
    }],
    "scss/at-function-pattern": ["^([a-z]+\\-?[a-z]+?)*", {
      "message": "Please use hyhenated_lowercase for function name"
    }],
    "scss/percent-placeholder-pattern": ["^([a-z]+\\-?[a-z]+?)*", {
      "message": "Please use hyhenated_lowercase for placeholder name"
    }],
    "comment-no-empty": true,
    "number-max-precision": 3,
    "function-comma-newline-after": "never-multi-line",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-calc-no-unspaced-operator": true,
    "value-list-comma-newline-after": "always-multi-line",
    "function-comma-newline-before": "never-multi-line",
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never-single-line",
    "property-blacklist": "",
    "declaration-colon-newline-after": null,
    "declaration-colon-space-before": "never",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always-multi-line",
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-space-after": "always-single-line",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-after": "always-single-line",
    "selector-list-comma-space-before": "never",
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "never",
    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-newline-before": "never-multi-line",
    "media-query-list-comma-space-after": "always-single-line",
    "media-query-list-comma-space-before": "never",
    "comment-empty-line-before": ["always", { "ignore": ["stylelint-commands"] }],
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "font-family-no-duplicate-names": true,
    "keyframe-declaration-no-important": true,
    "media-feature-name-no-unknown": true,
    "no-empty-source": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "property-no-unknown": true,
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "selector-type-no-unknown": true,
    "string-no-newline": true,
    "unit-no-unknown": true
  }
}
