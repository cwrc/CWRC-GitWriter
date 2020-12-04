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

	// if (process.env.NODE_ENV === 'development') {
	// 	config.schema.schemaProxyUrl = 'http://localhost:3000';
	// }

	config.container = 'cwrcWriterContainer';
	config.modules = {
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
			{
				id: 'validation',
				title: 'Validation',
				config: { validationUrl: config.validationUrl },
			},
		],
		east: [{ id: 'imageViewer', title: 'Image Viewer' }],
	};
	config.entityLookupDialogs = EntityLookupDialogs;
	config.storageDialogs = GitStorageDialogs;

	//setup geonames
	if (config.lookups.geonames.username && config.lookups.geonames.username !== '') {
		geonames.credentials.username = config.lookups.geonames.username;
	}

	const writer = new CWRCWriter(config);

	window.writer = writer;

	writer.event('writerInitialized').subscribe(() => {
		writer.showLoadDialog();
	});
};

init();
