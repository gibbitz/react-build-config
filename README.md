# react-build-config
React Build with Webpack et al. This is currently a WIP. As I work through this I will remove the beta flag and better document for future use.

## Usage

```bash
  $ npx @gibbitz/react-build-config create
```

## Features
  * sourcemaps work on prod -- make prod build and run local server while debugging prod
  * class properties
  * .babelrc is used by CLI ES6 Modules
  * ./config/babelrc.js is used by webpack
  * git and github commit support via husky
  * Expandable and modifyable -- childDevDependencies allows configurations for other frameworks (vue, angualar etc.)

## Issues
  * Originally built for work in older NPM/Node
