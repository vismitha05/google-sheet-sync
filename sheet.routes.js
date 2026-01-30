const express = require("express");
const router = express.Router();
const syncService = require("../services/sync.services");

router.post("/update", async (req, res) => {
  try {
    await syncService.handleSheetUpdate(req.body);
    res.json({ status: "success" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
