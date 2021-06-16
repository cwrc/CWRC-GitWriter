import { Tag } from './sharedTypes';
export interface Selection {
    type?: string;
    startContainerIndex?: number;
    startOffset?: number;
    endContainerIndex?: number;
    endOffset?: number;
    skip?: string;
    xpath?: string;
    containerIndex?: number;
}
export interface PossibleRequest {
    xpath: string;
    index: number;
    selection?: Selection;
}
export interface PossibleResponse {
    xpath: string;
    index: number;
    tags: {
        possible: Tag[];
        speculative: Tag[];
    };
}
export declare const possibleAt: ({ xpath, index, selection, }: PossibleRequest) => Promise<PossibleResponse>;
