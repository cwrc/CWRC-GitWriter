import { EntityType } from '@src/@types/types';
import React from 'react';
import type { Item as ItemType, Type } from './types';
interface itemProps {
    id: string;
    childrenItems?: ItemType[] | (() => Promise<ItemType[]>);
    collectionType?: string;
    description?: string;
    disabled?: boolean;
    displayName?: string;
    icon?: string;
    name?: string | EntityType;
    onClick?: () => void;
    type?: Type;
}
declare const Item: React.ForwardRefExoticComponent<itemProps & React.RefAttributes<any>>;
export default Item;
