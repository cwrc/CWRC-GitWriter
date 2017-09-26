window.Drupal = window.Drupal || {};
if (!window.$) {
	window.jQuery = window.$ = require('jquery');
}

window.Drupal.CWRCWriter = require('cwrc-writer-base');
window.Drupal.CWRCWriterLayout = require('./layout-config.js');
