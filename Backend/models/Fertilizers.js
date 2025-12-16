const db = require("../db/db");

const FertilizersFun = async (req, res) => {
  let connection;
  try {
    const { Crop_name, Soil_type } = req.query;
    connection = await db.getConnection();
    const [rows] = await connection.query(
      `select * 
      from fertilizer
      where Crop_name LIKE ? and Soil_Type LIKE ?;`,
      [Crop_name, Soil_type]
    );
    console.log(rows);
    res.status(200).json({ msg: "fertilizers successful", fertilizers: rows });
  } catch (error) {
    console.error("fertilizers query error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    if (connection) connection.release();
  }
};

module.exports = {
  FertilizersFun,
};
