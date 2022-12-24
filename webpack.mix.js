const mix = require('laravel-mix');

mix.js('assets/js/jquery-events-to-dom-events.js', 'assets/js/jquery-events-to-dom-events.min.js');
mix.disableNotifications();
mix.sourceMaps(false, 'source-map');
