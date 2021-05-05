import { app } from './server.mjs';
const port = process.env.PORT || 3000;

// isDev();

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
