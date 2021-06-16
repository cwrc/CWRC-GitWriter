export declare const parseXMLString: (content: string) => Document;
export declare const evaluateXPath: (xpath: string, docXML: Document) => Node;
export declare const getXPathForElement: (el: any, xml: Document) => string;
/**
 * Parses documentation string and returns the full name.
 * If the tag name is an abbreviation, we expect the full name
 * to be at the beginning of the documentation, in parentheses.
 *
 * @param {String} documentation The documentation string
 * @returns {String} The full name
 */
export declare const getFullNameFromDocumentation: (documentation: string) => string;
