/*
 * grunt-dependency-concat
 * https://github.com/je-an/grunt-dependency-concat
 *
 * Copyright (c) 2017 je-an
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  var cheerio = require("cheerio");
  var fs = require("fs");

  grunt.registerMultiTask('dependency_concat', 'Concat all js scripts which are referenced in a html file', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      namespace: "APPLICATION",
      wrapItInIIFE: true,
      iifeArgs: []
    }),
      args = (function () {
        var length = options.iifeArgs.length, params = "";
        if (length > 0) {
          for (var i = 0; i < length; i++) {
            var arg = options.iifeArgs[i];
            params = params + arg + ",";
          }
          params = params.replace(/.$/, "");
        }
        return params;
      })(),
      header = "var " + options.namespace + " = (function (" + args + ") {  \n var " + options.namespace + " = {}; \n",
      footer = "\n return " + options.namespace + "; \n })(" + args + ");",
      scripts = "";

    // Iterate over all specified file groups.
    this.files.forEach(function (f) {
      var filepath = f.src[0], content, $;
      if (fs.existsSync(filepath)) {
        content = grunt.file.read(filepath);
        $ = cheerio.load(content, { decodeEntities: false });

        // get content of all scripts and concat it
        $("script").each(function () {
          var text = $(this).attr("src");
          var file = fs.readFileSync(text, "utf8");
          scripts = scripts + file + "\n";
        });

        // create new file with the content of all script files
        fs.writeFileSync(f.dest, options.wrapItInIIFE ? (header + scripts + footer) : scripts, 'utf8');
        grunt.log.writeln('File "' + f.dest + '" created.');
      }
    });
  });
};
