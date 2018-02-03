const gulp = require("gulp");
const nodemon = require('gulp-nodemon');
const shell = require('gulp-shell');

const srcdirs = ['src/', 'config/'];
const watches = ['./src/index.ts'].concat(srcdirs);
const sources = ['./src/index.ts'].concat(srcdirs.map(f => `${f}**/*.js`), srcdirs.map(f => `${f}**/*.ts`));


gulp.task('typescript', function () {
  return gulp.src('./src/index.ts').pipe(shell('tsc -p tsconfig.json'));
});

gulp.task('typescriptSpec', () => {
  return gulp.src('./spec/tsconfig.json').pipe(shell("tsc -p ./spec/tsconfig.json"))
})

gulp.task("copy", function () {
	return gulp.src([ "lib/**/*.json", "../config/**/*.json", "config/conf/*.js"], { base: './src' })
             .pipe(gulp.dest("build"));
});

gulp.task("copySpec", function () {
	return gulp.src([ "lib/**/*.json", "config/**/*.json", "config/conf/*.js"], { base: '.' })
               .pipe(gulp.dest("distSpec"));
});

gulp.task("build", ["copy", "typescript"]);
gulp.task("buildSpec", ["copySpec", "typescriptSpec"]);

gulp.task('serve', ['build'], function () {
  nodemon({
    script: 'build/',
    exec: 'node --inspect',
	watch: watches,
    tasks: ['build'],
    ext: 'js,ts,json',
    env: {
      NODE_ENV: process.env.NODE_ENV || 'dev',
    },
  }).on('restart', function () {
  });
});