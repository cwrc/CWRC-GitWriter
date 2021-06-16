declare const useSettings: () => {
    editorModeShouldChange: (editorMode: string) => [boolean, null | {
        type: string;
        text: string;
    }];
    changeEditorMode: (mode: string, isUndo?: boolean | undefined) => string;
    changeAnnotationMode: (value: number, isUndo?: boolean | undefined) => string;
    schemaShouldChange: (schemaId: string) => Promise<[boolean, null | {
        type: string;
        text: string;
    }]>;
    changeSchema: (schemaId: string, isUndo?: boolean | undefined) => string;
};
export default useSettings;
