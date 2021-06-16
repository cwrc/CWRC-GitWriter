import { IConfig } from 'overmind';
import * as document from './document';
import * as editor from './editor';
import * as ui from './ui';
export declare const useApp: () => {
    state: import("overmind/lib/internalTypes").SubType<{
        document: {
            schemaId: string;
            schemaName: string;
        };
        editor: {
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
            schemas: import("cwrc-writer-base/src/@types/types").Schema[];
            settings?: any;
            showEntities: boolean;
            showTags: boolean;
        };
        ui: {
            title: string;
            darkMode: boolean;
            contextMenu: import("cwrc-writer-base/src/@types/types").ContextMenuState;
        };
    }, object>;
    actions: {
        document: {
            readonly setInitialStateSchema: (value: string) => void;
            readonly setSchema: (value: string) => import("cwrc-writer-base/src/@types/types").Schema | undefined;
        };
        editor: {
            readonly writerInitSettings: (value: string) => void;
            readonly applyInitialSettings: () => void;
            readonly setFontSize: (value: string) => void;
            readonly showTags: (value: boolean) => void;
            readonly showEntities: (value: boolean) => void;
            readonly toggleAdvancedSettings: (value: boolean) => void;
            readonly setReadonly: (value: boolean) => void;
            readonly setEditorMode: (value: string) => {
                key: number;
                value: string;
                label: string;
            } | undefined;
            readonly getEditorModeByKey: (value: number) => {
                key: number;
                value: string;
                label: string;
            } | undefined;
            readonly getEditorModeByValue: (value: string) => {
                key: number;
                value: string;
                label: string;
            } | undefined;
            readonly setAnnotationrMode: (value: number) => {
                value: number;
                label: string;
            } | undefined;
            readonly addShema: (value: import("cwrc-writer-base/src/@types/types").Schema) => import("cwrc-writer-base/src/@types/types").Schema;
            readonly resetDialogWarnings: () => void;
            readonly resetPreferences: () => void;
            readonly getSettings: (value: string | undefined) => {
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
            readonly setIsAnnotator: (value: boolean) => void;
        };
        ui: {
            readonly closeContextMenu: () => void;
            readonly showContextMenu: (value: import("cwrc-writer-base/src/@types/types").ContextMenuState) => void;
            readonly updateTitle: (value: string) => void;
        };
    };
    effects: import("overmind/lib/internalTypes").SubType<{
        document: unknown;
        editor: unknown;
        ui: unknown;
    }, object>;
    addMutationListener: (cb: import("proxy-state-tree").IMutationCallback) => () => void;
    reaction: import("overmind").IReaction<import("overmind").Config>;
};
export declare const config: {
    onInitialize?: any;
    state: import("overmind/lib/internalTypes").SubType<{
        document: {
            schemaId: string;
            schemaName: string;
        };
        editor: {
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
            schemas: import("cwrc-writer-base/src/@types/types").Schema[];
            settings?: any;
            showEntities: boolean;
            showTags: boolean;
        };
        ui: {
            title: string;
            darkMode: boolean;
            contextMenu: import("cwrc-writer-base/src/@types/types").ContextMenuState;
        };
    }, object>;
    effects: import("overmind/lib/internalTypes").SubType<{
        document: unknown;
        editor: unknown;
        ui: unknown;
    }, object>;
    actions: import("overmind/lib/internalTypes").SubType<{
        document: typeof document.actions;
        editor: typeof editor.actions;
        ui: typeof ui.actions;
    }, object>;
};
declare module 'overmind' {
    interface Config extends IConfig<typeof config> {
    }
}
