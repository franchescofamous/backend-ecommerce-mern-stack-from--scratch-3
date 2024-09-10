const express = require("express");
const womenCtrl = require("../controller/womenCtrl");
const router = express.Router();
router.get("/selectall", womenCtrl.selectAllWomenOutfits);
router.post("/add", womenCtrl.addNewOutfit);

//women/selectall
//women/delete
//women/add

module.exports = router;
