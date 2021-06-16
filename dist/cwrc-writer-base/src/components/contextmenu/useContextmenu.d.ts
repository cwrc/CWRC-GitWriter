import type { ContextMenuState } from '@src/@types/types';
import type { Item as ItemType } from './types';
export declare const useContextmenu: (writer?: any, contextMenuState?: ContextMenuState | undefined) => {
    collectionType: string | undefined;
    MIN_WIDTH: number;
    xpath: string | undefined;
    tagName: string | undefined;
    query: (list: ItemType[], searchQuery: string) => ItemType[] | undefined;
    initialize: () => boolean | null;
    getItems: () => Promise<false | ItemType[]>;
};
export default useContextmenu;
