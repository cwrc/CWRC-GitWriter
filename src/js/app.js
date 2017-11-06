if (!window.$) {
	window.jQuery = window.$ = require('jquery');
}

window.CWRCWriterLayout = require('./layout-config.js');
window.CWRCWriterDialogs = require('cwrc-public-entity-dialogs');
window.CWRCWriterStorageDialogs = require('./storage-dialogs.js');
window.CWRCWriterConfig = require('./config.js');
window.CWRCWriter = require('cwrc-writer-base');
