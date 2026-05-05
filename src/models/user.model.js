const db = require("../config/db");

const findByEmail = (email) =>{
    const sql = "SELECT * FROM users WHERE email = ?";
    return db.query(sql,[email], callback);


};
module.exports = {
    findByEmail
};