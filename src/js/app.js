window.CWRCWriterStorageDialogs = require('cwrc-git-dialogs');

// only continue loading the cwrcWriter if the user has authenticated with github
if (window.CWRCWriterStorageDialogs.authenticate()) {

    let viaf = require('viaf-entity-lookup')
    let dbpedia = require('dbpedia-entity-lookup');
    let wikidata = require('wikidata-entity-lookup');
    let getty = require('getty-entity-lookup');
    window.CWRCWriterDialogs = require('cwrc-public-entity-dialogs');

    window.CWRCWriterDialogs.registerEntitySources({
        people: (new Map()).set('viaf', viaf).set('wikidata', wikidata).set('getty', getty).set('dbpedia', dbpedia),
        places: (new Map()).set('viaf', viaf).set('dbpedia', dbpedia).set('wikidata', wikidata),
        organizations: (new Map()).set('viaf', viaf).set('wikidata', wikidata).set('dbpedia', dbpedia),
        titles: (new Map()).set('viaf', viaf).set('wikidata', wikidata).set('dbpedia', dbpedia),
    })
    //window.CWRCWriterStorageDialogs = require('./storage-dialogs.js');
    window.CWRCWriterConfig = require('./config.js');
    window.CWRCWriter = require('cwrc-writer-base');
}