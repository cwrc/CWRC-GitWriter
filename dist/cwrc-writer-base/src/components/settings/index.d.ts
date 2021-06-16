import { FC } from 'react';
interface SettingsDialogProps {
    open: boolean;
    handleClose: () => void;
}
declare const SettingsDialog: FC<SettingsDialogProps>;
export default SettingsDialog;
