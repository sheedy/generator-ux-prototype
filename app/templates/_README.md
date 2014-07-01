[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

# UX Prototype
[![GitHub version](https://badge.fury.io/gh/sheedy%2Fux-prototype.png)](http://badge.fury.io/gh/sheedy%2Fux-prototype)

Go from sketch to wireframe to prototype with this front-end development and design kit by generating static HTML pages from dynamic templates and partials, and modular CSS structure using SASS, allowing you to keep everything organised the way you need it to be.


> We’re not designing pages, we’re designing systems of components 
>
> — <cite>[Stephen Hay](http://www.the-haystack.com/)</cite>


## Features

All features are optional, if you don't want to use one just comment it out in the appropriate ``tasks/task-name.js`` file. Everything is highly configurable and automated with [Grunt](http://gruntjs.com/).

- Modular templating and partial/includes system ([Handlebars](http://handlebarsjs.com/)) – [Assemble](http://assemble.io)
- CSS pre-processing – [SASS](http://sass-lang.com/)
- [Livereload](https://github.com/intesso/connect-livereload) your designs instantly after saving **on multiple devices** (without a browser plugin)
- SVG conversion to PNG and Base64 encoded CSS for fallback - [Grunticon](http://www.grumpicon.com/)
- Package/asset management (jQuery, modernizr, etc.) - [Bower](http://bower.io/)
- Minification of JS and CSS
- Image optimisation
- Rule based linting of [JS](https://github.com/gruntjs/grunt-contrib-jshint), [CSS](https://github.com/stubbornella/csslint), [HTML](https://github.com/yaniswang/HTMLHint) and [Accessibility](https://github.com/globant-ui/arialinter)
- Reordering/formatting of CSS according to rules you set – [CSSComb](https://github.com/csscomb/csscomb.js)
- HTML beautification according to rules you set – [Prettify](https://github.com/jonschlinkert/grunt-prettify)
- Growl notifications

The Sass/CSS adheres somewhat closely to the following guidelines (needs cleanup):

- [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
- [CSS Wizardry CSS guidleines](https://github.com/csswizardry/CSS-Guidelines)
- [Sass Style Guide](http://css-tricks.com/sass-style-guide/)



#### Growl Notifications

If you would like growl notifications to function, you will need to install [growlnotify](http://growl.info/downloads#generaldownloads)


## How to use

*NOTE: Need to elaborate on this*

A lot of the variables are defined in `Gruntfile.js` and also in `package.json`.

Source files are in the ``src`` directory and the static/flat output is output to the ``build`` directory.

#### Working on source files

Start a server with livereload and edit your HTML (.hbs), SASS or js files from the `src` and have the changes update in the browser without refreshing.

```
grunt serve
```

#### Building static output

After you have changed any of the source files, generate new files in the build directory by running the following command:

```
grunt build
```

### HTML (.hbs) pages

[Assemble docs](http://assemble.io/docs/)

Most page and directory relatred settings are in `tasks/options/assemble.js`.
