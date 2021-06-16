import { Schema } from '@src/@types/types';
import { FC } from 'react';
interface AddSchemaDialogProps {
    handleClose: (schema?: Schema) => void;
    open: boolean;
}
declare const AddSchemaDialog: FC<AddSchemaDialogProps>;
export default AddSchemaDialog;
