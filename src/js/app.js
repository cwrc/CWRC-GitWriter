window.Drupal = window.Drupal || {};
if (!window.$) {
	window.jQuery = window.$ = require('jquery');
}

window.Drupal.CWRCWriterConfig = require('./config.js');
window.Drupal.CWRCWriter = require('cwrc-writer-base');
window.Drupal.CWRCWriterLayout = require('./layout-config.js');
window.Drupal.CWRCWriterDialogs = require('cwrc-dialogs');
window.Drupal.CWRCWriterStorageDialogs = require('./storage-dialogs.js');
