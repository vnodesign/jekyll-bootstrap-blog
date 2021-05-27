// Gulpfile.js

const autoprefixer = require('autoprefixer');
const browserSync  = require('browser-sync').create();
const concat       = require('gulp-concat');
const cssnano      = require('cssnano');
const del          = require('del');
const gulp         = require('gulp');
const gutil        = require('gulp-util');
const newer        = require('gulp-newer');
const imagemin     = require('gulp-imagemin');
const pngquant     = require('imagemin-pngquant');
const postcss      = require('gulp-postcss');
const rename       = require('gulp-rename');
const run          = require('gulp-run');
const runSequence  = require('run-sequence');
const sass         = require('gulp-ruby-sass');
const uglify       = require('gulp-uglify-es').default;  // For es6 support

// Include paths from the created paths.js file
const paths = require('./_assets/gulp-config/config.js');