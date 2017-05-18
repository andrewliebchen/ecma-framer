# boilerplate-babel-webpack ([npm](https://www.npmjs.com/package/boilerplate-babel-webpack))

![](https://badge.fury.io/js/boilerplate-babel-webpack.svg)
![](https://img.shields.io/npm/dt/boilerplate-babel-webpack.svg)

> :fork_and_knife: Starter with Babel.js and Webpack

## Features

* [x] Webpack v2.3.2
* [x] Babel v6.24.0
* [x] Support syntax ES2015 & ES2016
* [x] Static directory: `public/`
* [x] Source Map of bundle file.
* [x] Analysis of bundle file weight.

## Getting started

You can start in two ways:

### Use Git

```
$ mkdir PROJECT_NAME
$ cd $_     # Note: "$_" is last argument of previous command
$ git init  # Note: branch "master" is created
$ git remote add boilerplate git@github.com:piecioshka/boilerplate-babel-webpack.git
$ git pull boilerplate master
$ git remote remove boilerplate
```

or ...

### Use Zip

1. Download package file:<br/>
https://github.com/piecioshka/boilerplate-babel-webpack/archive/master.zip
2. Extract it to your project directory.

## How to build the application?

```
$ npm install
$ npm run build
# Open public/ directory in browser
```

Your source will be minified.

## How to develop the application?

```
$ npm install
$ npm run watch
# Open public/ directory in browser
```

## Remove generated directory

If you would like to remove `public/dist` directory (created by Webpack):

```
$ npm run clear
```

If you would like to remove `node_modules/` and remove `public/dist/`

```
$ npm run clear:all
```

## Count LOC (Lines of Code)

If you would like to know how many lines of code you write:

```
$ npm run count
```

## Analysis of bundle file weight

If you would like to check how much a bundle file weight:

```
$ npm run audit
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2017
