import { TinyMCE } from 'tinymce/tinymce';
declare global {
    interface Window {
        tinymce: TinyMCE;
    }
}
import 'tinymce/icons/default';
import 'tinymce/themes/silver';
import 'tinymce/plugins/paste';
import './tinymce_plugins/treepaste.js';
import './tinymce_plugins/prevent_delete.js';
interface TinymceWrapperConfig {
    writer: any;
    editorId: string;
    layoutContainerId: string;
    buttons1: string[];
    buttons2?: string[];
    buttons3?: string[];
}
declare function TinymceWrapper(): void;
declare namespace TinymceWrapper {
    var init: ({ writer, editorId, layoutContainerId, buttons1, buttons2, buttons3, }: TinymceWrapperConfig) => void;
}
export default TinymceWrapper;
