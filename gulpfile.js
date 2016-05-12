var browserSync = require('browser-sync').create();
var del = require('del');
var gulp = require('gulp-help')(require('gulp'));
var ts = require('gulp-typescript');
var jspm = require('gulp-jspm');
var filter = require('gulp-filter');
var rename = require('gulp-rename');
var httpProxy = require('http-proxy');
var merge = require('merge');
var ngConfig = require('gulp-ng-config');
var tslint = require('gulp-tslint');
var Server = require('karma').Server;
var debug = require('gulp-debug');
var argv = require('yargs').argv;

//options are imported from gradle, see ../defaults.gradle and/or ../env/*.gradle
var config = {
  typescript: "src",
  javascript: "build/js",
  dist: "build/distributions",
  karma: {
    server: {
      port: "9876"
    }
  }
}

var files = {
  dts: '/**/*.d.ts',
  ts: '/**/*.ts',
  js: '/**/*.js',
  html: '/**/*.html'
};

var tsProject = ts.createProject('tsconfig.json', {
  typescript: require('typescript'),
  outDir: undefined
});

gulp.task('compile.ts', 'compile the typescript source files', function () {
  return gulp.src([
    'typings/browser' + files.dts,
    config.typescript + files.ts
  ])
    .pipe(ts(tsProject))
    .pipe(gulp.dest(config.javascript));
});

gulp.task('lint.ts', ['compile.ts'], function () {
  return gulp.src(config.typescript + files.ts)
    .pipe(tslint())
    .pipe(tslint.report('verbose'))
});

gulp.task('build', 'build the full project including the distribution bundle', ['compile.ts', 'lint.ts'])

gulp.task('test', 'run all javascript tests', ['compile.ts'], function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true,
    port: config.karma.server.port
  }, function() {done();}).start();
});

gulp.task('clean', 'remove all gulp build artefacts', function (done) {
  del([
    config.javascript,
    config.dist,
  ]).then(function () {
    return done();
  });
})
