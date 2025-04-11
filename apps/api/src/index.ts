import cors from "cors";
import express from "express";
import router from "./router";
import { db } from "./models";

const app = express();
const port = 8080;

app.use(cors({ origin: "http://localhost:3000" }));

app.use(router);
app.use(express.json());

app.listen(port, () =>
  console.log(`
################################################
🛡️ Server listening on port: ${port} 🛡️
################################################
`),
);

(async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Database connection established successfully.");
    await db.sequelize.sync({ alter: true }); // Use { force: true } to drop and recreate tables
    console.log("Database synchronized.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

router.get("/", function (_req, res) {
  res.render("index", {
    title: "cristinamoreno.dev REST API",
    test: "Welcome to cristinamoreno.dev REST API - Endpoints list",
    routes: router,
  });
});
