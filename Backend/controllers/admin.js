// const db = require("../db/db");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const JWT_SECRET = "V0ldnVjQ0VZ5UyNbG6Tx0a9XaC2h7J1K";

// const adminLogin = async (req, res) => {
//   const { username, password } = req.body;

//   const query = "SELECT * FROM admins WHERE username = ?";
//   db.query(query, [username], (err, result) => {
//     if (err) {
//       console.error("Database query error:", err);
//       return res.status(500).json({ message: "Internal server error" });
//     }
//     if (result.length > 0) {
//       const user = result[0];

//       // Compare plaintext passwords (NOT SECURE FOR PRODUCTION)
//       if (password === user.password) {
//         const token = jwt.sign({ id: user.id }, JWT_SECRET, {
//           expiresIn: "1h",
//         });
//         res.json({ token });
//       } else {
//         res.status(401).json({ message: "Invalid credentials" });
//       }
//     } else {
//       res.status(401).json({ message: "User not found" });
//     }
//   });
// };

const adminLogin = (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM admins WHERE username = ?";
  db.query(query, [username], async (err, result) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).json({ message: "Internal server error" });
    }

    if (result.length === 0) {
      return res.status(401).json({ message: "User not found" });
    }

    const user = result[0];

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  });
};

module.exports = adminLogin;
