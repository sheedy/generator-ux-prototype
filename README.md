# generator-ux-prototype [![Build Status](https://secure.travis-ci.org/sheedy/generator-ux-prototype.png?branch=master)](https://travis-ci.org/sheedy/generator-ux-prototype)

> [Yeoman](http://yeoman.io) generator


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
$ npm install -g yo
```

### Yeoman Generators

To install generator-ux-prototype from npm, run:

```bash
$ npm install -g generator-ux-prototype
```

Next, you'll need to install the [bundler gem](http://bundler.io/). Just run:

```bash
$ gem install bundler
```

Finally, initiate the generator (*from within your project directory*):

```bash
$ yo ux-prototype
```

### Sub generators

To create a new page for your prototype, just run:

```bash
$ yo ux-prototype:page NAME_OF_YOUR_PAGE
```


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
- Rule based linting of [JS](https://github.com/gruntjs/grunt-contrib-jshint), [CSS](https://github.com/stubbornella/csslint) and [HTML](https://github.com/yaniswang/HTMLHint)
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


### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT
