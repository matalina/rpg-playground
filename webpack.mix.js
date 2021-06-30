let mix = require('laravel-mix');

mix.disableNotifications()
    .setPublicPath('www')
    .version();

mix.js('src/js/app.js', 'js')
    .extract();

mix.sass('src/sass/app.scss', 'css').options({
    processCssUrls: false
});