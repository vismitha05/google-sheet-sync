const express = require("express");
const cors = require("cors");

const sheetRoutes = require("./routes/sheet.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "sheet-db-sync" });
});

app.use("/api/sheet", sheetRoutes);

module.exports = app;
