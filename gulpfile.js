var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var compass = require('gulp-compass');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var wiredep = require('gulp-wiredep');
var useref = require('gulp-useref');
var browserSync = require('browser-sync').create();
var wait = require('gulp-wait');
var babel = require('gulp-babel');
var svgSprite = require("gulp-svg-sprites");
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
var pug = require('gulp-pug');


const path = {
	scripts:{
		src: './js/es6/**/*.js',
		dest: './js'
	}
}

gulp.task('watch', function(){
	gulp.watch('./css/**/*.scss', gulp.series('styles'));
	// gulp.watch(path.scripts.src, gulp.series(scripts, 'script'));
	gulp.watch(path.scripts.src, gulp.series(scripts));
	gulp.watch('./**/*.pug', gulp.series('pug'));
});

gulp.task('styles', function(){
	return gulp.src('./css/main.scss')
			.pipe(wait(500))
			.pipe(plumber({ // plumber - плагин для отловли ошибок.
					errorHandler: notify.onError(function(err) { // nofity - представление ошибок в удобном для вас виде.
						return {
							title: 'Styles',
							message: err.message
						}
					})
				}))
			.pipe(sourcemaps.init())
			.pipe(sass()) //Компиляция sass.
			.pipe(autoprefixer({ //Добавление autoprefixer.
				browsers: ['last 10 versions']
			}))
			.pipe(concat('./main.css'))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('./css/'));	
});

// Минификация стилей

gulp.task('minicss', function(){  
	return gulp.src('./css/main.css')
		.pipe(concat('./mainbuild.css'))
		.pipe(cssnano())
		.pipe(gulp.dest('./css'));
});


//Транспиляция ES6 в es5 с помощью babel (на случай, если сломается webpack)


gulp.task('script', function(){
    return gulp.src('./js/es5/bundle.js')
    	.pipe(plumber({ // plumber - плагин для отловли ошибок.
					errorHandler: notify.onError(function(err) { // nofity - представление ошибок в удобном для вас виде.
						return {
							title: 'Scripts',
							message: err.message
						}
					})
				}))
        .pipe(babel({presets: ['es2015']}))
        .pipe(gulp.dest('./js'))
});

//Минификация скриптов. ((на случай, если сломается webpack)

gulp.task('minijs', function() {   
	return gulp.src('./js/*.js')
		.pipe(uglify()) 
		.pipe(gulp.dest('./js/mini/'));
});

//создание svg српрайтов

gulp.task('svgsprite', function () {  
    return gulp.src('./svg/about/contacts/*.svg')
        .pipe(svgSprite())
        .pipe(gulp.dest("./svg/about/done"));
});

//сервер и livereloader

function server(){	
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	browserSync.watch('./css/main.css', browserSync.reload);
	browserSync.watch('./js/bundle.js', browserSync.reload);
	browserSync.watch('./*.html', browserSync.reload);
}

//webpack js bundler

function scripts(){
	return gulp.src('./js/es6/*.js')
	.pipe(gulpWebpack(webpackConfig, webpack))
	.pipe(gulp.dest(path.scripts.dest));
}

//шаблонизатор pug

gulp.task('pug', function buildHTML() {
  return gulp.src('./*.pug')
  .pipe(plumber({ // plumber - плагин для отловли ошибок.
					errorHandler: notify.onError(function(err) { // nofity - представление ошибок в удобном для вас виде.
						return {
							title: 'PUG',
							message: err.message
						}
					})
				}))
  .pipe(pug({pretty: '\t'}))
  .pipe(gulp.dest('./'))
});

gulp.task('default', gulp.parallel('watch',server));