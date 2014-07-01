'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var PageGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('Generating a new page named ' + this.name + '.');
  },

  files: function () {
    this.copy('page.hbs', 'src/content/pages/' + this.name + '.hbs');
  }
});

module.exports = PageGenerator;