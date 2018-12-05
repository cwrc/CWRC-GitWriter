module.exports = {
    "cwrcRootUrl": "",
    "validationUrl": "https://validator.services.cwrc.ca/validator/validate.html",
    "schemas": {
        "tei": {
            "name": "CWRC Basic TEI Schema",
            "url": "https://cwrc.ca/schemas/cwrc_tei_lite.rng",
            "cssUrl": "https://cwrc.ca/templates/css/tei.css",
            "schemaMappingsId": "tei",
            "entityTemplates": {
                "note": "https://dev-cwrc-writer.cwrc.ca/schema/tei/xml/note.xml",
                "citation": "https://dev-cwrc-writer.cwrc.ca/schema/tei/xml/citation.xml"
            }
        },
        "events": {
            "name": "Events Schema",
            "url": "https://cwrc.ca/schemas/orlando_event_v2.rng",
            "cssUrl": "https://cwrc.ca/templates/css/orlando_v2_cwrc-writer.css",
            "schemaMappingsId": "orlando",
            "entityTemplates": {
                "note": "https://dev-cwrc-writer.cwrc.ca/schema/orlando/xml/note_events.xml",
                "citation": "https://dev-cwrc-writer.cwrc.ca/schema/orlando/xml/citation_events.xml"
            }
        },
        "biography": {
            "name": "Biography Schema",
            "url": "https://cwrc.ca/schemas/orlando_biography_v2.rng",
            "cssUrl": "https://cwrc.ca/templates/css/orlando_v2_cwrc-writer.css",
            "schemaMappingsId": "orlando",
            "entityTemplates": {
                "note": "https://dev-cwrc-writer.cwrc.ca/schema/orlando/xml/note_biography.xml",
                "citation": "https://dev-cwrc-writer.cwrc.ca/schema/orlando/xml/citation_biography.xml"
            }
        },
        "writing": {
            "name": "Writing Schema",
            "url": "https://cwrc.ca/schemas/orlando_writing_v2.rng",
            "cssUrl": "https://cwrc.ca/templates/css/orlando_v2_cwrc-writer.css",
            "schemaMappingsId": "orlando",
            "entityTemplates": {
                "note": "https://dev-cwrc-writer.cwrc.ca/schema/orlando/xml/note_writing.xml",
                "citation": "https://dev-cwrc-writer.cwrc.ca/schema/orlando/xml/citation_writing.xml"
            }
        },
        "cwrcEntry": {
            "name": "CWRC Entry Schema",
            "url": "https://cwrc.ca/schemas/cwrc_entry.rng",
            "cssUrl": "https://cwrc.ca/templates/css/cwrc.css",
            "schemaMappingsId": "cwrcEntry",
            "entityTemplates": {
                "note": "https://dev-cwrc-writer.cwrc.ca/schema/cwrcEntry/xml/note.xml",
                "citation": "https://dev-cwrc-writer.cwrc.ca/schema/cwrcEntry/xml/citation.xml"
            }
        },
        "epidoc": {
            "name": "EpiDoc Schema",
            "url": "http://www.stoa.org/epidoc/schema/latest/tei-epidoc.rng",
            "altUrl": "https://cwrc.ca/epidoc/schema/latest/tei-epidoc.rng",
            "cssUrl": "https://cwrc.ca/templates/css/tei.css",
            "schemaMappingsId": "tei",
            "entityTemplates": {
                "note": "https://dev-cwrc-writer.cwrc.ca/schema/tei/xml/note.xml",
                "citation": "https://dev-cwrc-writer.cwrc.ca/schema/tei/xml/citation.xml"
            }
        },
        "teiAll": {
            "name": "TEI All Schema",
            "url": "https://www.tei-c.org/release/xml/tei/custom/schema/relaxng/tei_all.rng",
            "cssUrl": "https://cwrc.ca/templates/css/tei.css",
            "schemaMappingsId": "tei",
            "entityTemplates": {
                "note": "https://dev-cwrc-writer.cwrc.ca/schema/tei/xml/note.xml",
                "citation": "https://dev-cwrc-writer.cwrc.ca/schema/tei/xml/citation.xml"
            }
        },
        "teiCorpus": {
            "name": "TEI Corpus Schema",
            "url": "https://www.tei-c.org/release/xml/tei/custom/schema/relaxng/tei_corpus.rng",
            "cssUrl": "https://cwrc.ca/templates/css/tei.css",
            "schemaMappingsId": "tei",
            "entityTemplates": {
                "note": "https://dev-cwrc-writer.cwrc.ca/schema/tei/xml/note.xml",
                "citation": "https://dev-cwrc-writer.cwrc.ca/schema/tei/xml/citation.xml"
            }
        },
        "teiMs": {
            "name": "TEI Manuscript Schema",
            "url": "https://www.tei-c.org/release/xml/tei/custom/schema/relaxng/tei_ms.rng",
            "cssUrl": "https://cwrc.ca/templates/css/tei.css",
            "schemaMappingsId": "tei",
            "entityTemplates": {
                "note": "https://dev-cwrc-writer.cwrc.ca/schema/tei/xml/note.xml",
                "citation": "https://dev-cwrc-writer.cwrc.ca/schema/tei/xml/citation.xml"
            }
        },
        "teiSpeech": {
            "name": "TEI Speech Schema",
            "url": "https://www.tei-c.org/release/xml/tei/custom/schema/relaxng/tei_speech.rng",
            "cssUrl": "https://cwrc.ca/templates/css/tei.css",
            "schemaMappingsId": "tei",
            "entityTemplates": {
                "note": "https://dev-cwrc-writer.cwrc.ca/schema/tei/xml/note.xml",
                "citation": "https://dev-cwrc-writer.cwrc.ca/schema/tei/xml/citation.xml"
            }
        }
    }
};
