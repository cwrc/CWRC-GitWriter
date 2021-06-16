import Observable from 'observable-fns/observable';
import { WorkingState } from 'salve-dom/build/dist';
import { Tag } from './sharedTypes';
export interface ValidationNodeTarget {
    index?: number;
    isAttr: boolean;
    name?: string;
    ns?: string;
    documentation?: string;
    fullName?: string;
    xpath?: string;
}
export interface ValidationNodeElement {
    name?: string;
    documentation?: string;
    fullName?: string;
    xpath?: string;
    parentElementName?: string;
    parentElementXpath?: string;
    parentElementIndex?: number;
}
export interface ValidationNode {
    type?: string;
    msg: string;
    target: ValidationNodeTarget;
    element?: ValidationNodeElement;
}
export interface ValidationResponse {
    state?: WorkingState;
    partDone?: number;
    valid?: boolean;
    errors?: ValidationNode[];
}
export interface PossibleNodes {
    name: string;
}
export interface ValidatePossibleAtResponse {
    xpath: string;
    index: number;
    possibleTags?: Tag[];
    possibleNodes?: PossibleNodes[];
}
export declare const validate: (documentString: string) => Observable<any>;
export declare const validatePossibleAt: (xpath: string, index: number, type: string) => Promise<ValidatePossibleAtResponse>;
