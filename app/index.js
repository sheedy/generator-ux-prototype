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
        type    : "string",
        name    : "projectName",
        message : "What would you like to call your project?",
        default : this.appname // Default to current folder name
      },
      {
        type: 'string',
        name: 'description',
        message: 'Description',
        default: ""
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
        type: 'checkbox',
        name: 'features',
        message: 'Select which packages you want to install (up/down keys and spacebar)',
        choices: [
          {
            name: 'Modernizr',
            value: 'incModernizr',
            checked: true
          },
          {
            name: 'Modular Scale',
            value: 'incModularScale',
            checked: false
          },
          {
            name: 'animate.css',
            value: 'incAnimateCss',
            checked: false
          },
          {
            name: 'FitText.js',
            value: 'incFitText',
            checked: false
          },
          {
            name: 'Lettering.js',
            value: 'incLetteringJs',
            checked: false
          },
          {
            name: 'Neat Grid (Bourbon)',
            value: 'incNeat',
            checked: false
          },
          {
            name: 'Normalize.scss',
            value: 'incNormalizeScss',
            checked: false
          }
        ],
        default: false
      }
    ];

    this.prompt(prompts, function (props) {

      this.projectName              = props.projectName;
      this.projectSlug              = _s.slugify(this.projectName);
      this.description              = props.description;
      this.author                   = props.author;
      this.email                    = props.email;

      // Features (Bower Components)
      var features                  = props.features;

      function hasFeature (feat) {
        return features.indexOf(feat) !== -1;
      }

      this.incModernizr             = hasFeature('incModernizr');
      this.incModularScale          = hasFeature('incModularScale');
      this.incNormalizeScss         = hasFeature('incNormalizeScss');
      this.incAnimateCss            = hasFeature('incAnimateCss');
      this.incFitText               = hasFeature('incFitText');
      this.incLetteringJs           = hasFeature('incLetteringJs');
      this.incNeat                  = hasFeature('incNeat');


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

    this.directory('tasks', 'tasks');
    this.directory('src', 'src');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('gitignore', '.gitignore');
    this.copy('ruby-version', '.ruby-version');
  }
});

module.exports = UxPrototypeGenerator;