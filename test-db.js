const pool = require("./db/connection");

(async () => {
  try {
    const [rows] = await pool.query("SELECT NOW()");
    console.log("DB connected:", rows);
    process.exit(0);
  } catch (err) {
    console.error("DB connection error:", err.message);
    process.exit(1);
  }
})();
