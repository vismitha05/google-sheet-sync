const pool = require("../db/connection");

async function handleSheetUpdate(data) {
  const { id, name, email, active } = data;

  if (!id) {
    throw new Error("ID is required");
  }

  const [rows] = await pool.query(
    "SELECT last_updated_by FROM users WHERE id = ?",
    [id]
  );

  if (rows.length && rows[0].last_updated_by === "db") {
    return;
  }

  await pool.query(
    `
    INSERT INTO users (id, name, email, active, last_updated_by)
    VALUES (?, ?, ?, ?, 'sheet')
    ON DUPLICATE KEY UPDATE
      name = VALUES(name),
      email = VALUES(email),
      active = VALUES(active),
      last_updated_by = 'sheet'
    `,
    [id, name, email, active]
  );
}

module.exports = { handleSheetUpdate };
