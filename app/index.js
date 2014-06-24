'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var _s = require('underscore.string');
var sh = require('execSync');


var UxPrototypeGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });

    //////////////////////////////
    // If the --git flag is passed, initialize git and add for initial commit
    //////////////////////////////
    if (this.options['git']) {
      sh.run('git init');
      sh.run('git add . && git commit -m "UX Prototype Generation"');
    }
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous UX Prototype generator!'));

    var prompts = [
      {
        type: 'confirm',
        name: 'includeNormalize',
        message: 'Would you like to include normalize.css?',
        default: true
      },
      {
        // OR
        type: 'checkbox',
        name: 'projectType',
        message: 'Would you like to include a base folder structure?',
        choices: ['North', 'Atomic Design', 'None'],
        default: 'North'
      },
      {
        type: 'confirm',
        name: 'includeJQuery',
        message: 'Would you like to include jQuery?',
        default: true
      },
      {
        type    : "string",
        name    : "projectName",
        message : "What would you like to call your project?",
        default : this.appname // Default to current folder name
      },
      {
        type: 'string',
        name: 'author',
        message: 'Your name',
        default: ""
      },
      {
        type: 'string',
        name: 'email',
        message: 'Email address',
        default: ""
      },
      {
        type: 'string',
        name: 'description',
        message: 'Description',
        default: ""
      }
    ];

    this.prompt(prompts, function (props) {
      this.includeNormalize   = props.includeNormalize;
      this.includeJQuery      = props.includeJQuery;
      this.projectName        = props.projectName;
      this.author             = props.author;
      this.email              = props.email;
      this.description        = props.description;

      this.projectSlug        = _s.slugify(this.projectName);

      done();

    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/templates');

    this.copy('_package.json', 'package.json');
    this.copy('_Gemfile', 'Gemfile');
    this.copy('_Gruntfile.js', 'Gruntfile.js');
    this.copy('bowerrc', '.bowerrc');
    this.copy('_bower.json', 'bower.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('gitignore', '.gitignore');
  }
});

module.exports = UxPrototypeGenerator;