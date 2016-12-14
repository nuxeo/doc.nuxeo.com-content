---
title: Quality Assurance
review:
    comment: ''
    date: '2015-12-01'
    status: ok
toc: true
labels:
tree_item_index: 200

---
## Quality Assurance

- Intro to topic

## Formatting and Linting

- ESLint
-- ES5 : default / recommended setting
-- ES2016: Airbnb default https://www.npmjs.com/package/eslint-config-airbnb
- Plugin for IDEs
-- Atom: https://atom.io/packages/linter-eslint
-- Intellij Idea: https://plugins.jetbrains.com/plugin/7494
-- Sublime Text 3: https://github.com/roadhump/SublimeLinter-eslint
-- More: http://eslint.org/docs/user-guide/integrations


## Test Strategies

Web Component tests
Polymer’s web-component-tester
Used by Polymer’s dev team
https://github.com/Polymer/web-component-tester
For mock responses: http://sinonjs.org/
Nuxeo code examples: https://github.com/nuxeo/nuxeo-ui-elements/tree/master/test

Integration & BDD Tests
Webdriver
http://webdriver.io/
Use Chimp.js https://chimp.readme.io/

Cucumber for BDD (behavior-driven development)
https://cucumber.io/
Still poor coverage due to UX evolution

NighwatchJS
Nuxeo generator
Marketplace sample ftest package
Examples

Nuxeo code examples:
https://github.com/nuxeo/plugin-nuxeo-web-ui/tree/master/nuxeo-web-ui-ftest/webdriver


## Performance Strategies

#### Schemas - enrinchers

### Browser Cache
