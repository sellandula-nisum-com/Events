//Gruntfile
module.exports = function(grunt) {

  // requirejs compile options
  var compileOptions = {
      mainConfigFile: 'app/main.js',
      baseUrl: 'app',
      include: ['main'],
      out: 'dist/main.min.js',
      removeCombined: false,
      findNestedDependencies: true,

      //Removes console.logs for production
      onBuildWrite: function (moduleName, path, contents) {
          if(/(.*)js\/modules\/(.*)/.test(path)) return contents.replace(/console.log(.*);/g, ';');
          return contents;
      }
  };

  //Initializing the configuration object
  grunt.initConfig({
    // Task server
    //pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
            port: 3000, // custom port
            base: 'app/', // current directory for 'index.html' is root
            keepalive: true, // keep the server alive indefinitely
            open: {
              target: 'http://localhost:3000',
            }
          }
        }
     },
     requirejs: {
         compile: {
             options : compileOptions
         },
         paths: {
           handlebars: "../vendor/handlebars/handlebars.runtime"
         }
     },
     watch: {
    	 requirejs: {
             // Watch only main.js so that we do not constantly recompile the .js files
             files: [ 'app/main.js', 'app/scripts/dist/templates.js'],
             tasks: [ 'requirejs' ,'handlebars'],
             // Reloads the browser
             options: {
               livereload: true  
             }
         }
     },
     handlebars: {
		 "scripts/dist/templates.js": ["app/templates/*.html"]
     }
    });
  //Plugin loading
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
//  //Task definition
  grunt.registerTask('default', ['handlebars']);
  grunt.task.run('default');
};
