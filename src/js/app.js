document.addEventListener('DOMContentLoaded', function() {

    let viaf = require('viaf-entity-lookup')
    let dbpedia = require('dbpedia-entity-lookup');
    let wikidata = require('wikidata-entity-lookup');
    let getty = require('getty-entity-lookup');
    let geonames = require('geonames-entity-lookup');
    let CWRCWriterDialogs = require('cwrc-public-entity-dialogs');

    CWRCWriterDialogs.showNoLinkButton(true);
    CWRCWriterDialogs.showCreateNewButton(false);
    CWRCWriterDialogs.showEditButton(false);
    CWRCWriterDialogs.registerEntitySources({
        person: (new Map()).set('viaf', viaf).set('wikidata', wikidata).set('getty', getty).set('dbpedia', dbpedia),
        place: (new Map()).set('geonames', geonames).set('viaf', viaf).set('dbpedia', dbpedia).set('wikidata', wikidata),
        organization: (new Map()).set('viaf', viaf).set('wikidata', wikidata).set('dbpedia', dbpedia),
        title: (new Map()).set('viaf', viaf).set('wikidata', wikidata).set('dbpedia', dbpedia)
    })

    let CWRCWriterStorageDialogs = require('cwrc-git-dialogs');
    CWRCWriterStorageDialogs.setServerURL('http://localhost:3000/github');

    let config = require('./config.js');
    config.container = 'cwrcWriterContainer';
    config.modules = {
        west: [
            {id: 'structure', title: 'Markup'},
            {id: 'entities', title: 'Entities'},
            {id: 'nerve', title: 'NERVE', config: {
                'nerveUrl': 'https://nerve.services.cwrc.ca'
            }}
        ],
        south: [
            {id: 'selection', title: 'Selection'},
            {id: 'validation', title: 'Validation', config: {
                'validationUrl': 'https://validator.services.cwrc.ca/validator/validate.html'
            }}
        ],
        east: [
            {id: 'imageViewer', title: 'Image Viewer'}
        ]
    };
    config.entityLookupDialogs = CWRCWriterDialogs;
    config.storageDialogs = CWRCWriterStorageDialogs;
    
    let CWRCWriter = require('cwrc-writer-base');
    var writer = new CWRCWriter(config);

    writer.exit = function() {
        writer.storageDialogs.logOut();
    }

    window.writer = writer;

    writer.event('writerInitialized').subscribe(function() {
        writer.showLoadDialog();
    });
});