import dbpedia from 'dbpedia-entity-lookup';
import geonames from 'geonames-entity-lookup';
import getty from 'getty-entity-lookup';
import lgpn from 'lgpn-entity-lookup';
import viaf from 'viaf-entity-lookup';
import wikidata from 'wikidata-entity-lookup';

import GitStorageDialogs from 'cwrc-git-dialogs';
import EntityLookupDialogs from 'cwrc-public-entity-dialogs';

import CWRCWriter from 'cwrc-writer-base';

EntityLookupDialogs.showNoLinkButton(true);
EntityLookupDialogs.showCreateNewButton(false);
EntityLookupDialogs.showEditButton(false);
EntityLookupDialogs.registerEntitySources({
  rs: new Map().set('viaf', viaf).set('wikidata', wikidata).set('dbpedia', dbpedia),
  person: new Map()
    .set('viaf', viaf)
    .set('wikidata', wikidata)
    .set('getty', getty)
    .set('dbpedia', dbpedia)
    .set('lgpn', lgpn),
  place: new Map()
    .set('geonames', geonames)
    .set('viaf', viaf)
    .set('dbpedia', dbpedia)
    .set('wikidata', wikidata),
  organization: new Map().set('viaf', viaf).set('wikidata', wikidata).set('dbpedia', dbpedia),
  title: new Map().set('viaf', viaf).set('wikidata', wikidata).set('dbpedia', dbpedia),
});

// if (process.env.NODE_ENV === 'development') {
// 	GitStorageDialogs.setServerURL('http://localhost:3000/github');
// } else {
GitStorageDialogs.setServerURL('./github');
// }

const init = async () => {
  const configRequest = await fetch('./config/config.json').catch((err) => {
    console.log(err);
  });
  const config = await configRequest.json();

  const writer_settings = {
    container: 'cwrc-writer-app',
    // legacy: will be setup on writer-core without external config.
    modules: {
      west: [
        { id: 'structure', title: 'Markup' },
        { id: 'entities', title: 'Entities' },
        {
          id: 'nerve',
          title: 'NERVE',
          config: { nerveUrl: config.nerveUrl },
        },
      ],
      south: [
        { id: 'selection', title: 'Selection' },
        { id: 'validation', title: 'Validation' },
      ],
      east: [{ id: 'imageViewer', title: 'Image Viewer' }],
    },
    entityLookupDialogs: EntityLookupDialogs,
    // entityLookupDialogs: {
    // 	module: EntityLookupDialogs, //will be integrated to writer-core
    // 	lookups: {
    // 		geonames: {
    // 			username: ''
    // 		},
    // 	},
    // },
    storageDialogs: {
      //will be decouple from writer-base
      module: GitStorageDialogs,
      setServerURL: './github',
    },
  };

  writer_settings.services = {
    validator: { url: config.validationUrl },
    nerve: { url: config.nerveUrl },
  };
  writer_settings.schema = config.schema;
  writer_settings.helpUrl = config.helpUrl;
  writer_settings.cwrcRootUrl = config.cwrcRootUrl;

  // const writer = new CWRCWriter(config);

  // window.writer = writer;
  CWRCWriter.init(writer_settings);
};

init();
