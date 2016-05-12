// Karma configuration
// Generated on Tue Feb 09 2016 12:27:18 GMT+0100 (CET)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',

    proxies: {
      '/build/': '/base/build/',
      '/jspm_packages/': '/base/jspm_packages/',
      '/src/': '/base/src/'
    },

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jspm', 'jasmine'],

    // The loadFiles configuration tells karma-jspm which files should be dynamically loaded via systemjs before the tests run.
    // Globs or regular file paths are acceptable.
    jspm: {
      config: 'config.js',
      loadFiles: ['build/js/**/*.spec.js'],
      serveFiles: ['build/js/**/!(*spec).js']
    },


    // list of files / patterns to load in the browser
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js'
      //empty - handled by jspm plugin
    ],


    // list of files to exclude
    exclude: [
      //empty - handled by jspm plugin
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'junit'],

    junitReporter: {
      outputDir: 'build/reports/tests'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher (PhantomJS, Chrome, Firefox)
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
