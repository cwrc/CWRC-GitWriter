import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, '..', 'build');

export const app = express();

// export const isDev = async () => {
//     if (process.env.NODE_ENV === 'development') {
//         const { devTools } = await import('./dev/dev.mjs');
//         devTools(app);
//     }
// };

//make content available
app.use(express.static(publicPath));
app.use('mockup-ui/', express.static(`${publicPath}/mockup-ui/`));
