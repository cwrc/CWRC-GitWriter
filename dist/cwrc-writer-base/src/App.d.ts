import { FC } from 'react';
declare global {
    interface Window {
        writer: any;
    }
}
interface AppProps {
    config: any;
}
declare const App: FC<AppProps>;
export default App;
