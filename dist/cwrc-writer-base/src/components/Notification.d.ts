import { FC } from 'react';
interface NotificationProps {
    message: string;
    onClose: () => void;
    open: boolean;
    actionName?: string;
    callback?: () => void;
}
declare const Notification: FC<NotificationProps>;
export default Notification;
