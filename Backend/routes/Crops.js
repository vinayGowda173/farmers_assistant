const express = require("express");
const router = express.Router();
const connect = require("../models/Fertilizers");
const cnt = require("../models/Crops");
const cntdis = require("../models/Diseases");
const cntpes = require("../models/Pesticides");

router.route("/fertilizers").get(connect.FertilizersFun);
router.route("/crops").get(cnt.CropsFun);
router.route("/diseases").get(cntdis.DiseasesFun);
router.route("/pesticides").get(cntpes.PesticidesFun);

module.exports = router;
