import { FC } from 'react';
import type { Item as ItemType } from './types';
interface NestedMenuProps {
    anchorEl: null | HTMLElement;
    handleClose: () => void;
    handleMouseEnter: () => void;
    childrenItems?: ItemType[];
    collectionType?: string;
    isLoading?: boolean;
}
declare const NestedMenu: FC<NestedMenuProps>;
export default NestedMenu;
