# ECMA-Framer: Framer in the browser

This boilerplate uses Webpack and Babel to allow you to write your Framer apps in whatever editor you want, preview the results in a browser, and make use of all the ES6/7 goodness!

Maybe you think the recent updates to Framer Studio might be a little...much. Maybe you're getting sick of writing Coffeescript. Maybe you want to just use a fully-featured editor to write your prototypes. Sound like you? Give ECMA-Framer a try.

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

I've forked the phenomenal [Copy Framer Code](https://github.com/perrysmotors/copy-framer-code) Sketch plugin and modified it to generate JS instead of Coffeescript. Simply double-click on `CopyFramerJSCode.sketchplugin` included in this repo, and the plugin will be installed. For more about how it actually works with Sketch, visit the [original repo](https://github.com/perrysmotors/copy-framer-code).

## Deployment

This doesn't quite work yet. I've got some more work to do here...

~~Framer Studio's got that neato Framer Cloud thing, what about ECMA-Framer? Since Framer is just Javascript at the end of the day, you can deploy a build of your prototype to any service you'd like, even your own server. This is possible because ECMA-Framer frees your project from the Framer ecosystem lock in.~~

~~If you're looking for dead simple deployments, try **[Now](https://zeit.co/now)** from Zeit. **Now** allows you to deploy simple JS apps with a single command (try to guess what it is). On it's open source plan, your project will be publicly visible to anyone who has the URL (but there is no Now directory, so the changes of someone finding or guessing it are nil). You can even alias your project to a custom domain, or a custom now.sh subdomain.~~

~~First, deploy Now. From inside your prototype, run:~~

```
npm i -g now
```

~~Next, build your prototype:~~

```
npm run build
```

~~Finally, deploy to **Now**:~~

```
now
```

~~Boom. Done. Now will tell you via your terminal what your custom URL is.~~

## Questions?

Feel free to send me an [email](mailto:andrewliebchen@gmail.com) or open an issue here!
