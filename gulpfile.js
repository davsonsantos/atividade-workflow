var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

// Sass Origem
var scssBase = './source/scss/base.scss';
var scssLayout = './source/scss/layout.scss';
var scssStyle = './source/scss/style.scss';

// CSS destino
var cssDest = './dist/css';

// Opção para criar css em desenvolvimento
var sassDevOptions = {
  outputStyle: 'expanded'
}

// // Opção para criar css em producao
var sassProdOptions = {
  outputStyle: 'compressed'
}
// Tarefas Base - commando 'gulp sassdev'
gulp.task('sassdev', function() {
  gulp.src(scssBase)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));

  gulp.src(scssLayout)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));

  gulp.src(scssStyle)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});


// Tarefas - commando 'gulp sassprod'
gulp.task('sassprod', function() {
  gulp.src(scssBase)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('base.min.css'))
    .pipe(gulp.dest(cssDest));

    gulp.src(scssLayout)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('layout.min.css'))
    .pipe(gulp.dest(cssDest));

    gulp.src(scssStyle)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(cssDest));
});

// Atualizações - Comando 'gulp watch'
gulp.task('watch', function() {
  gulp.watch(scssStyle, ['sassdev', 'sassprod']);
});


//


// Tafera Padrao - Comando 'gulp'
gulp.task('default', ['sassdev', 'sassprod', 'watch']);