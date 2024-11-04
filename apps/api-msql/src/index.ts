import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';

import router from './router/router';

const app = express();
const port = 5001;

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(router);

app.listen(port, () => console.log(`
################################################
🛡️ Server listening on port: ${port} 🛡️
################################################
`));