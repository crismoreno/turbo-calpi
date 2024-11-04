import cors from "cors";
import express from "express";
import { router } from "./router/router";

const app = express();
const port = 5002;

app.use(cors({ origin: "http://localhost:3000" }));

app.use(router(app) as any);

app.listen(port, () =>
  console.log(`
################################################
🛡️  Server listening on port: ${port} 🛡️
################################################
`),
);
