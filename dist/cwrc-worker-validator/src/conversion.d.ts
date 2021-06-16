import { Grammar } from 'salve-annos/build/dist';
export interface SchemaRequest {
    id: string;
    url: string;
    localData?: string;
}
export interface SchemaResponse {
    status: string;
    remoteData?: {
        json: string;
    };
    grammar?: Grammar;
}
export declare const loadSchema: ({ id, url, localData, }: SchemaRequest) => Promise<SchemaResponse>;
