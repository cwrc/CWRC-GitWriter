import { EntityType } from '@src/@types/types';
export declare type Item = {
    childrenItems?: Item[] | (() => Promise<Item[]>);
    collectionType?: string;
    disabled?: boolean;
    displayName?: string;
    description?: string;
    icon?: string;
    id: string;
    name?: EntityType | string;
    onClick?: () => void;
    type?: Type;
};
export declare type Type = 'tag' | 'entity' | 'divider' | 'search';
