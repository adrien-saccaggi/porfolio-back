import db from "../config/db.js";

const findByEmail = async (email) => {
  const sql = "SELECT * FROM users WHERE email = ?";
  const [rows] = await db.query(sql, [email]);
  
  return rows[0];
};

export { findByEmail };
