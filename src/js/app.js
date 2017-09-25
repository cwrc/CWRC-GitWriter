window.Drupal.CWRCWriter = window.Drupal.CWRCWriter || {};
if (!window.$) {
	window.jQuery = window.$ = require('jquery')
}

require('./jquery/jquery-ui-core.js')
require('./jquery/plugins/jquery.layout-latest.js')
require('./jquery/plugins/jquery.contextmenu.min.js')
require('./jquery/plugins/jquery.watermark.min.js')
require('./jquery/plugins/jquery.xpath.js')
require('./jquery/plugins/jquery.popup.js')

require('jquery-ui/ui/widgets/resizable')
require('jquery-ui/ui/widgets/tabs')
require('jquery-ui/ui/widgets/checkboxradio')
require('jquery-ui/ui/widgets/button')
require('jquery-ui/ui/widgets/controlgroup')
require('jquery-ui/ui/widgets/dialog')
require('jquery-ui/ui/widgets/tooltip')

window.Drupal.CWRCWriter = require('cwrc-writer-base')