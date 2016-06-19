#Intro
This is a bare-bones boilerplate for a ReactJS project.  It uses Babel to transpile ESNext JavaScript into ES5, Browserify to bundle the modules up for the browser, Mocha + Chai for Unit test assertions, Enzyme to unit test React components, Sass for the CSS Preprocessor.  Gulp is the automated task runner and BrowserSync is used to fire up a dev-server that syncs up to file changes.

##Setup

first
```npm install``` 

```npm start``` 
Runs Gulp in develop mode, this will watch over files for changes and sync them with BrowserSync, this mode also generates sourcemaps.

```npm run build:production```
Runs Gulp in production mode, this will ensure all files output are minified without sourcemaps.  
`npm run lint` Runs the JS and SASS linters.  These are not automatically run in _develop_ or _production_ modes as they slow down the compilation process.  
`npm test` Runs linting and the unit test suite (Mocha + Chai + Enzyme).  Again this isn't run automatically on the _develop_ or _production_ modes to ensure things run quickly.  Ensure you run this task before committing to your repository.
