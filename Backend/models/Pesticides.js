const db = require("../db/db");

const PesticidesFun = async (req, res) => {
  let connection;
  try {
    const { Crop_name, Disease_name } = req.query;
    connection = await db.getConnection();
    const [rows] = await connection.query(
      `select * 
        from pesticide 
        where Crop_name LIKE ? and Disease_name LIKE ?;`,
      [Crop_name, Disease_name]
    );
    console.log(rows);
    res.status(200).json({ msg: "pesticides successful", pesticides: rows });
  } catch (error) {
    console.error("pesticides query error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    if (connection) connection.release();
  }
};

module.exports = {
  PesticidesFun,
};
