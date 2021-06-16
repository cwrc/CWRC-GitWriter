import { Schema } from '@src/@types/types';
import { Context } from 'overmind';
export declare const writerInitSettings: ({ state }: Context, config: string) => void;
export declare const applyInitialSettings: ({ state, actions }: Context) => void;
export declare const setFontSize: ({ state }: Context, value: string) => void;
export declare const showTags: ({ state }: Context, value: boolean) => void;
export declare const showEntities: ({ state }: Context, value: boolean) => void;
export declare const toggleAdvancedSettings: ({ state }: Context, value: boolean) => void;
export declare const setReadonly: ({ state }: Context, value: boolean) => void;
export declare const setEditorMode: ({ state }: Context, editorMode: string) => {
    key: number;
    value: string;
    label: string;
} | undefined;
export declare const getEditorModeByKey: ({ state }: Context, key: number) => {
    key: number;
    value: string;
    label: string;
} | undefined;
export declare const getEditorModeByValue: ({ state }: Context, value: string) => {
    key: number;
    value: string;
    label: string;
} | undefined;
export declare const setAnnotationrMode: ({ state }: Context, value: number) => {
    value: number;
    label: string;
} | undefined;
export declare const addShema: ({ state }: Context, newSchema: Schema) => Schema;
export declare const resetDialogWarnings: ({ state }: Context) => void;
export declare const resetPreferences: ({ state, actions }: Context) => void;
export declare const getSettings: ({ state }: Context, config?: string | undefined) => {
    isAdvanced: boolean;
    fontSize: string;
    showEntities: boolean;
    showTags: boolean;
    mode: number;
    editorMode: string;
    annotationMode: number;
    allowOverlap: boolean;
    schemaId: string;
};
export declare const setIsAnnotator: ({ state }: Context, value: boolean) => void;
