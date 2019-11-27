module.exports = {
    cwrcRootUrl: '',
    nerveUrl: 'https://dh.sharcnet.ca/NerveService',
    validationUrl: 'https://validator.services.cwrc.ca/validator/validate.html',
    schema: {
        schemaProxyUrl: 'http://localhost:3000',
        schemas: [{
                id: 'tei',
                name: 'CWRC Basic TEI Schema',
                url: 'https://cwrc.ca/schemas/cwrc_tei_lite.rng',
                altUrl: 'https://raw.githubusercontent.com/cwrc/CWRC-Schema/master/schemas/cwrc_tei_lite.rng',
                cssUrl: 'https://cwrc.ca/templates/css/tei.css',
                altCssUrl: 'https://raw.githubusercontent.com/cwrc/CWRC-Schema/master/templates/css/tei.css',
                schemaMappingsId: 'tei'
            },
            {
                id: 'events',
                name: 'Events Schema',
                url: 'https://cwrc.ca/schemas/orlando_event_v2.rng',
                altUrl: 'https://raw.githubusercontent.com/cwrc/CWRC-Schema/master/schemas/orlando_event_v2.rng',
                cssUrl: 'https://cwrc.ca/templates/css/orlando_v2_cwrc-writer.css',
                altCssUrl: 'https://raw.githubusercontent.com/cwrc/CWRC-Schema/master/templates/css/orlando_v2_cwrc-writer.css',
                schemaMappingsId: 'orlando'
            },
            {
                id: 'biography',
                name: 'Biography Schema',
                url: 'https://cwrc.ca/schemas/orlando_biography_v2.rng',
                altUrl: 'https://raw.githubusercontent.com/cwrc/CWRC-Schema/master/schemas/orlando_biography_v2.rng',
                cssUrl: 'https://cwrc.ca/templates/css/orlando_v2_cwrc-writer.css',
                altCssUrl: 'https://raw.githubusercontent.com/cwrc/CWRC-Schema/master/templates/css/orlando_v2_cwrc-writer.css',
                schemaMappingsId: 'orlando'
            },
            {
                id: 'writing',
                name: 'Writing Schema',
                url: 'https://cwrc.ca/schemas/orlando_writing_v2.rng',
                altUrl: 'https://raw.githubusercontent.com/cwrc/CWRC-Schema/master/schemas/orlando_writing_v2.rng',
                cssUrl: 'https://cwrc.ca/templates/css/orlando_v2_cwrc-writer.css',
                altCssUrl: 'https://raw.githubusercontent.com/cwrc/CWRC-Schema/master/templates/css/orlando_v2_cwrc-writer.css',
                schemaMappingsId: 'orlando'
            },
            {
                id: 'cwrcEntry',
                name: 'CWRC Entry Schema',
                url: 'https://cwrc.ca/schemas/cwrc_entry.rng',
                altUrl: 'https://raw.githubusercontent.com/cwrc/CWRC-Schema/master/schemas/cwrc_entry.rng',
                cssUrl: 'https://cwrc.ca/templates/css/cwrc.css',
                altCssUrl: 'https://raw.githubusercontent.com/cwrc/CWRC-Schema/master/templates/css/cwrc.css',
                schemaMappingsId: 'cwrcEntry'
            },
            {
                id: 'epidoc',
                name: 'EpiDoc Schema',
                url: 'http://www.stoa.org/epidoc/schema/latest/tei-epidoc.rng',
                altUrl: 'https://cwrc.ca/epidoc/schema/latest/tei-epidoc.rng',
                cssUrl: 'https://cwrc.ca/templates/css/tei.css',
                schemaMappingsId: 'tei'
            },
            {
                id: 'teiAll',
                name: 'TEI All Schema',
                url: 'https://www.tei-c.org/release/xml/tei/custom/schema/relaxng/tei_all.rng',
                altUrl: 'https://jenkins.tei-c.org/job/TEIP5/lastSuccessfulBuild/artifact/P5/release/xml/tei/custom/schema/relaxng/tei_all.rng',
                cssUrl: 'https://cwrc.ca/templates/css/tei.css',
                schemaMappingsId: 'tei'
            },
            {
                id: 'teiCorpus',
                name: 'TEI Corpus Schema',
                url: 'https://www.tei-c.org/release/xml/tei/custom/schema/relaxng/tei_corpus.rng',
                altUrl: 'https://jenkins.tei-c.org/job/TEIP5/lastSuccessfulBuild/artifact/P5/release/xml/tei/custom/schema/relaxng/tei_corpus.rng',
                cssUrl: 'https://cwrc.ca/templates/css/tei.css',
                schemaMappingsId: 'tei'
            },
            {
                id: 'teiMs',
                name: 'TEI Manuscript Schema',
                url: 'https://www.tei-c.org/release/xml/tei/custom/schema/relaxng/tei_ms.rng',
                altUrl: 'https://jenkins.tei-c.org/job/TEIP5/lastSuccessfulBuild/artifact/P5/release/xml/tei/custom/schema/relaxng/tei_ms.rng',
                cssUrl: 'https://cwrc.ca/templates/css/tei.css',
                schemaMappingsId: 'tei'
            },
            {
                id: 'teiSpeech',
                name: 'TEI Speech Schema',
                url: 'https://www.tei-c.org/release/xml/tei/custom/schema/relaxng/tei_speech.rng',
                altUrl: 'https://jenkins.tei-c.org/job/TEIP5/lastSuccessfulBuild/artifact/P5/release/xml/tei/custom/schema/relaxng/tei_speech.rng',
                cssUrl: 'https://cwrc.ca/templates/css/tei.css',
                schemaMappingsId: 'tei'
            },
            {
                id: 'teiLite',
                name: 'TEI Lite Schema',
                url: 'https://www.tei-c.org/release/xml/tei/custom/schema/relaxng/tei_lite.rng',
                altUrl: 'https://jenkins.tei-c.org/job/TEIP5/lastSuccessfulBuild/artifact/P5/release/xml/tei/custom/schema/relaxng/tei_lite.rng',
                cssUrl: 'https://cwrc.ca/templates/css/tei.css',
                schemaMappingsId: 'teiLite'
            },
            {
                id: 'moravian',
                name: 'Moravian Lives (TEI)',
                url: 'https://raw.githubusercontent.com/moravianlives/ML/master/Projects/TEI_Memoirs/out/MoravianMemoirs.rng',
                cssUrl: 'https://cwrc.ca/templates/css/tei.css',
                schemaMappingsId: 'teiLite'
            }
        ]
    }
};