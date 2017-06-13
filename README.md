# grunt-dependency-concat

> Concat all js scripts which are referenced in a html file

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-dependency-concat --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-dependency-concat');
```

## The "dependency_concat" task

### Overview
In your project's Gruntfile, add a section named `dependency_concat` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dependency_concat: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.wrapItInIIFE
Type: `Boolean`
Default value: `true`

True if you want to wrap the scripts in an IIFE.

#### options.namespace
Type: `String`
Default value: `TEST`

Name of namespace which is used if the scripts are wrapped in an IIFE.

#### options.iifeArgs
Type: `String[]`
Default value: `[]`

All arguments which will be passed to the IIFE.


### Usage Examples

#### Default Options
In this example, we load an html page, get all script tags, extract the content, wrap it in an IIFE and create a new file merged.js`

```js
grunt.initConfig({
  dependency_concat: {
   options: {
    namespace: "TEST",
    wrapItInIIFE: true,
    iifeArgs: ["jQuery"]
  },
  files: {
    'test/expected/merged.js': ['test/fixtures/dependency_concat_test.html']
  }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
13.06.2017 First Commit
