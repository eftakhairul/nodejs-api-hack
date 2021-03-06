const gulp    = require("gulp");
const nodemon = require('gulp-nodemon');
const shell   = require('gulp-shell');
const clean   = require('gulp-clean');
const series  = gulp.series;

const srcdirs = ['./src/', './config/'];
const watches = ['./src/index.ts'].concat(srcdirs);

gulp.task('typescript', function () {
  return gulp.src('./src/index.ts').pipe(shell('./node_modules/.bin/tsc -p tsconfig.json'));
});

gulp.task('typescriptSpec', () => {
  return gulp.src('./spec/tsconfig.json').pipe(shell("./node_modules/.bin/tsc -p ./spec/tsconfig.json"))
})

gulp.task('clean', function() {
  return gulp.src('./build', {read: false, allowEmpty: true})
             .pipe(clean());
});

gulp.task('copy', function () {
	return gulp.src([ './src/lib/**/*.json', './config/**/*.json', './config/*.js'])
             .pipe(gulp.dest('./build'));
});

gulp.task('copySpec', function () {
	return gulp.src([ "./src/lib/**/*.json", "./config/**/*.json", "./config/conf/*.js"])
             .pipe(gulp.dest("distSpec"));
});

gulp.task('start', function () {
  nodemon({
    script: 'build/',
    exec: 'node --inspect',
	  watch: watches,
    tasks: series(['build']),
    ext: 'js,ts,json',
    env: {
      NODE_ENV: process.env.NODE_ENV || 'dev',
    },
  }).on('restart', function () {
  });
});

gulp.task('build', series(['clean', 'copy', 'typescript']));
gulp.task('buildSpec', series(['copySpec', 'typescriptSpec']));
gulp.task('serve', series(['copy', 'typescript', 'start']));