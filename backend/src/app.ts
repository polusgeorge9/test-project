import express from "express";
import Company from "./models/company.model";

const app = express();

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
