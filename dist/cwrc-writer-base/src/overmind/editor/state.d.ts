import { Schema } from '@src/@types/types';
declare type State = {
    advancedSettings: boolean;
    allowOverlap: boolean;
    annotationMode: number;
    annotationModeLabel: string;
    annotationModes: {
        value: number;
        label: string;
    }[];
    currentFontSize: string;
    editorMode: string;
    editorModeLabel: string;
    editorModes: {
        key: number;
        value: string;
        label: string;
    }[];
    fontSizeOptions: string[];
    isAnnotator: boolean;
    isReadonly: boolean;
    mode: number;
    schemas: Schema[];
    settings?: any;
    showEntities: boolean;
    showTags: boolean;
};
export declare const state: State;
export {};
