/* jshint node:true */
'use strict';
// generated on 2014-12-20 using generator-gulp-webapp 0.2.0
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
/***
 * Build .tmp folder
 ***/
//compile less file, add autoprefixes
gulp.task('styles', function () {
  return gulp.src('app/styles/main.less')
    .pipe($.plumber())
    .pipe($.less())
    .pipe($.autoprefixer())
    .pipe(gulp.dest('.tmp/styles'));
});
//compiles html file built with templates found in .tmp/templates and the /stories folder
gulp.task('compile-hbs', function () {
  //stories to add to the website
  var stories = require('./stories/stories');
  var options = {
    ignorePartials: true,
    batch: ['./app/templates/partials']
  };
  return gulp.src('app/templates/**/*.hbs')
    .pipe($.compileHandlebars(stories, options))
    .pipe(gulp.dest('.tmp/templates'));
});
//inject compiled handlebars templates in to index.html
gulp.task('inject-hbs', ['compile-hbs'], function () {
  return gulp.src('app/index.html')
    .pipe($.fileInclude({
      prefix: '@@',
      basepath: '@root'
    }))
    .pipe(gulp.dest('.tmp'));
});
/***
 * watch tmp files and app files for development env
 ***/
gulp.task('connect', ['styles', 'inject-hbs'], function () {
  var serveStatic = require('serve-static');
  var serveIndex = require('serve-index');
  var app = require('connect')()
    .use(require('connect-livereload')({port: 35729}))
    .use(serveStatic('.tmp'))
    .use(serveStatic('app'))
    .use('/bower_components', serveStatic('bower_components'))
    .use(serveIndex('.tmp'));

  require('http').createServer(app)
    .listen(9000)
    .on('listening', function () {
      console.log('Started connect web server on http://localhost:9000');
    });
});

gulp.task('serve', ['connect', 'watch'], function () {
  require('opn')('http://localhost:9000');
});

gulp.task('watch', ['connect'], function () {
  $.livereload.listen();

  // watch for changes
  gulp.watch([
    'app/*.html',
    '.tmp/styles/**/*.css',
    'app/scripts/**/*.js',
    '.tmp/index.html',
    'app/images/**/*'
  ]).on('change', $.livereload.changed);

  gulp.watch('app/styles/**/*.less', ['styles']);
  gulp.watch('stories/**/*.js', ['inject-hbs']);
  gulp.watch('app/templates/**/*.hbs', ['inject-hbs']);
});
/***
 * dist deployment tasks
 ***/
gulp.task('jshint', function () {
  return gulp.src('app/scripts/main.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'));
});

gulp.task('html', ['styles', 'inject-hbs'], function () {
  var assets = $.useref.assets({searchPath: '{.tmp,app}'});
  return gulp.src('.tmp/index.html')
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.csso()))
    .pipe(assets.restore())
    .pipe($.useref())
//    .pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
  return gulp.src([
    'app/images/**/*'
  ])
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'));
});

//move other files to dist folder
gulp.task('extras', function () {
  return gulp.src([
    'app/*.*',
    'app/CNAME',
    '!app/templates/*.*',
    '!app/images/*.*',
    '!app/*.html'
  ]).pipe(gulp.dest('dist'));
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));


gulp.task('build', ['html', 'images', 'extras'], function () {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
