import express, { NextFunction, Request, Response } from "express";
import fs from "fs";
import Company from "./models/company.model";
import path from "path";
import yaml from "js-yaml";
import swaggerUi from "swagger-ui-express";

const app = express();

const swaggerPath = path.join(__dirname, "../swagger.yaml");

// app.use(
//   "/api-docs",
//   swaggerUi.serve,
//   (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const swaggerDocument = yaml.load(
//         fs.readFileSync(swaggerPath, "utf8")
//       ) as swaggerUi.JsonObject;
//       swaggerUi.setup(swaggerDocument)(req, res, next);
//     } catch (err) {
//       next(err);
//     }
//   }
// );
app.use(
  "/api-docs",
  swaggerUi.serve,
  (req: Request, res: Response, next: NextFunction) => {
    const swaggerDocument = yaml.load(
      fs.readFileSync(swaggerPath, "utf8")
    ) as swaggerUi.JsonObject;
    if (swaggerDocument) {
      swaggerUi.setup(swaggerDocument)(req, res, next);
    } else {
      res.status(500).send("Error loading Swagger document");
    }
  }
);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/", async (req, res) => {
  try {
    await Company.create({
      name: "test",
      active: true,
      shortname: "test23",
    });
    return res.json({ success: true, message: "Company Added" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error });
  }
});

export default app;
