const db = require("../db/db");

const DiseasesFun = async (req, res) => {
  let connection;
  try {
    const { Crop_name } = req.query;
    connection = await db.getConnection();
    const [rows] = await connection.query(
      `select * 
      from disease  
      where Crop_name LIKE ?;`,
      [Crop_name]
    );
    console.log(rows);
    res.status(200).json({ msg: "diseases successful", diseases: rows });
  } catch (error) {
    console.error("diseases query error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    if (connection) connection.release();
  }
};

module.exports = {
  DiseasesFun,
};
