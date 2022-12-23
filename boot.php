<?php
$addon = rex_addon::get('vanilla');

if (rex::isBackend() && rex::getUser()) {
    rex_view::addJsFile($addon->getAssetsUrl('js/jquery-events-to-dom-events.js'));
}
