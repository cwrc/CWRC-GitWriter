if (!window.$) {
	window.jQuery = window.$ = require('jquery');
}

window.CWRCWriterConfig = require('./config.js');
window.CWRCWriter = require('cwrc-writer-base');
window.CWRCWriterLayout = require('./layout-config.js');
window.CWRCWriterDialogs = require('cwrc-public-entity-dialogs');
window.CWRCWriterStorageDialogs = require('./storage-dialogs.js');
