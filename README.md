# ECMA-Framer: Framer in the browser

Recent updates to Framer Studio sucks. This boilerplate uses Webpack and Babel to allow you to write your Framer apps in whatever editor you want, preview the results in a browser, and make use of all the ES6/7 goodness!

## Setup

To use this repo, you're going to need to be comfortable with writing Javascript, and running simple commands on the command line.

First grab a copy of this repo:

```
git clone git@github.com:andrewliebchen/ecma-framer.git
```

`cd` into the repo and install deps:

```
cd ecma-framer
npm i
```

Thats it!

## Using

To start the Webpack development server, simply run:

```
npm start
```

Then in your browser, visit http://localhost:9000.

All your working files will be in `src/`. `index.js` the only file you **must** have, and serves as the...uh...index for the entire app. Unlike Framer Studio, you can write your framer code in other files and just `import` them into `index.js`.

**src/layerA.js**
```js
let layerA = new Layer({...});

export default layerA;
```

**src/index.js**
```js
import layerA from './layerA';

let layerB = new Layer({...});
```

The development server you started with `npm start` should listen for changes to your working files and automatically update the browser.

### WARNING

Don't mess with `/public`. Stuff in there helps Framer run on the Webpack server. Stay in `/src`!

## What about Sketch import?

I don't know. Looking into it...
