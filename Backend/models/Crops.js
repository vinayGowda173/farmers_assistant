const db = require("../db/db");

const CropsFun = async (req, res) => {
  let connection;
  try {
    const { Soil_type } = req.query;
    connection = await db.getConnection();
    const [rows] = await connection.query(
      `select c.Crop_name , c.Sowing_Season , c.Duration_of_crop , c.Harvesting_Season  
      from crop c , soil_type s 
      where c.Crop_name = s.Crop_Name and Soil_Type LIKE ?;`,
      [Soil_type]
    );
    console.log(rows);
    res.status(200).json({ msg: "crops successful", crops: rows });
  } catch (error) {
    console.error("crops query error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    if (connection) connection.release();
  }
};

module.exports = {
  CropsFun,
};
