import { ContextMenuState } from '@src/@types/types';
import { Context } from 'overmind';
export declare const closeContextMenu: ({ state }: Context) => void;
export declare const showContextMenu: ({ state }: Context, value: ContextMenuState) => void;
export declare const updateTitle: ({ state }: Context, title: string) => void;
