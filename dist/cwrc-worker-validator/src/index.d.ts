import { SchemaRequest } from './conversion';
import { PossibleRequest } from './possible';
export { SchemaRequest, SchemaResponse } from './conversion';
export { PossibleRequest, PossibleResponse, Selection } from './possible';
export { Tag } from './sharedTypes';
export { PossibleNodes, ValidatePossibleAtResponse, ValidationNode, ValidationNodeElement, ValidationNodeTarget, ValidationResponse, } from './validate';
declare const cwrcWorkerValidator: {
    loadSchema(schema: SchemaRequest): Promise<import("./conversion").SchemaResponse>;
    validate(documentString: string): import("observable-fns").Observable<any>;
    validatePossible(xpath: string, index: number, type: string): Promise<import("./validate").ValidatePossibleAtResponse>;
    hasValidator(): boolean;
    possibleAtContextMenu(parameters: PossibleRequest): Promise<import("./possible").PossibleResponse>;
};
export declare type CwrcWorkerValidator = typeof cwrcWorkerValidator;
