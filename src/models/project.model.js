import db from "../config/db.js";

const findAll = async () => {
  const sql = "SELECT * FROM projects ORDER BY created_at DESC";
  const [rows] = await db.query(sql);

  return rows;
};
const findById = async (id) => {
  const sql = "SELECT * FROM projects WHERE id = ?";
  const [rows] = await db.query(sql, [id]);
  return rows[0];
};
const create = async (data) => {
  const { title, description, tech_stack, github_url, demo_url, image_url } =
    data;
  const [result] = await db.execute(
    "INSERT INTO projects (title, description, tech_stack, github_url, demo_url, image_url) VALUES (?, ?, ?, ?, ?, ?)",
    [title, description, tech_stack, github_url, demo_url, image_url],
  );
  return findById(result.insertId);
};
const update = async (
  id,
  { title, description, tech_stack, github_url, demo_url, image_url },
) => {
  const [result] = await db.execute(
    "UPDATE projects SET title = ?, description = ?, tech_stack = ?, github_url = ?, demo_url = ?, image_url = ? WHERE id = ?",
    [title, description, tech_stack, github_url, demo_url, image_url, id],
  );

  return result.affectedRows === 1;
};
const remove = async (id) => {
  const [result] = await db.execute("DELETE FROM projects WHERE id = ?", [id]);
  return result.affectedRows > 0;
};
export { findAll, findById, create, update, remove };
