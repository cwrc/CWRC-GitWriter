if (!window.$) {
	window.jQuery = window.$ = require('jquery')
}

var storageDialogs = require('cwrc-git-dialogs');
    // only continue loading the cwrcWriter if the user has authenticated with github

if (storageDialogs.authenticate()) {
	require('./jquery/jquery-ui-core.js')
	require("./jquery/plugins/jquery.layout-latest.js")
	require("./jquery/plugins/jquery.contextmenu.min.js")
	require("./jquery/plugins/jquery.watermark.min.js")
	require("./jquery/plugins/jquery.xpath.js")
	require('./jquery/plugins/jquery.popup.js')

	require('jquery-ui/ui/widgets/tabs')
	require('jquery-ui/ui/widgets/checkboxradio')
	require('jquery-ui/ui/widgets/button')
	require('jquery-ui/ui/widgets/controlgroup')
	require('jquery-ui/ui/widgets/dialog')
	require('jquery-ui/ui/widgets/tooltip')

	var CWRCWriter = require('cwrc-writer-base')

	var config = require('./config')
	config.storageDialogs = storageDialogs
	config.layout = require('./layout-config')
	config.entityLookupDialogs = require('cwrc-public-entity-dialogs')
	window.writer = new CWRCWriter(config)
	writer.init('cwrcWriterContainer')
	
	writer.showLoadDialog()
}