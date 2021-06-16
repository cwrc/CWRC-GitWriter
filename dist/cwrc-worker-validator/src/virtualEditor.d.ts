import { Validator } from 'salve-dom/build/dist';
import { Grammar } from 'salve-annos/build/dist';
declare class VirtualEditor {
    #private;
    constructor();
    reset(): this;
    get id(): string;
    get schemaId(): string | undefined;
    get schema(): Grammar | undefined;
    setSchema({ id, grammar }: {
        id: string;
        grammar: Grammar;
    }): Promise<Grammar>;
    get document(): Document | undefined;
    setDocument(documentString: string): Document;
    get validator(): Validator | undefined;
    setValidator(): Validator;
    hasValidator(): boolean;
    startValidator(): Validator;
    stopValidator(): Validator;
}
export declare const virtualEditor: VirtualEditor;
export default VirtualEditor;
