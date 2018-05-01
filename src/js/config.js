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
                "note": "https://cwrc-writer.cwrc.ca/schema/tei/xml/note.xml",
                "citation": "https://cwrc-writer.cwrc.ca/schema/tei/xml/citation.xml"
            }
        },
        "events": {
            "name": "Events Schema",
            "url": "https://cwrc.ca/schemas/orlando_event_v2.rng",
            "cssUrl": "https://cwrc.ca/templates/css/orlando_v2_cwrc-writer.css",
            "schemaMappingsId": "orlando",
            "entityTemplates": {
                "note": "https://cwrc-writer.cwrc.ca/schema/orlando/xml/note_events.xml",
                "citation": "https://cwrc-writer.cwrc.ca/schema/orlando/xml/citation_events.xml"
            }
        },
        "biography": {
            "name": "Biography Schema",
            "url": "https://cwrc.ca/schemas/orlando_biography_v2.rng",
            "cssUrl": "https://cwrc.ca/templates/css/orlando_v2_cwrc-writer.css",
            "schemaMappingsId": "orlando",
            "entityTemplates": {
                "note": "https://cwrc-writer.cwrc.ca/schema/orlando/xml/note_biography.xml",
                "citation": "https://cwrc-writer.cwrc.ca/schema/orlando/xml/citation_biography.xml"
            }
        },
        "writing": {
            "name": "Writing Schema",
            "url": "https://cwrc.ca/schemas/orlando_writing_v2.rng",
            "cssUrl": "https://cwrc.ca/templates/css/orlando_v2_cwrc-writer.css",
            "schemaMappingsId": "orlando",
            "entityTemplates": {
                "note": "https://cwrc-writer.cwrc.ca/schema/orlando/xml/note_writing.xml",
                "citation": "https://cwrc-writer.cwrc.ca/schema/orlando/xml/citation_writing.xml"
            }
        },
        "cwrcEntry": {
            "name": "CWRC Entry Schema",
            "url": "https://cwrc.ca/schemas/cwrc_entry.rng",
            "cssUrl": "https://cwrc.ca/templates/css/cwrc.css",
            "schemaMappingsId": "cwrcEntry",
            "entityTemplates": {
                "note": "https://cwrc-writer.cwrc.ca/schema/cwrcEntry/xml/note.xml",
                "citation": "https://cwrc-writer.cwrc.ca/schema/cwrcEntry/xml/citation.xml"
            }
        }
    }
};
