let mix = require('laravel-mix');

mix.js('src/js/app.js', 'www/js')
    .sass('src/sass/app.scss','www/css')
    .setPublicPath('www')
    .extract()
    .version();