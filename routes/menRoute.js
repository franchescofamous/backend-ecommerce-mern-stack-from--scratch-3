const express = require("express");
const router = express.Router();
let menCtrl = require("../controller/menCtrl");
//  /men/selectall
router.get("/selectall", menCtrl.selectAllMenOutfits);

router.post("/add", menCtrl.addNewOutfit);

/* 
app.post("/men/add", menCtrl.addNewOutfit);
app.post("/men/selectall", menCtrl.addNewOutfit);
app.post("/men/delete", menCtrl.addNewOutfit);
 */

module.exports = router;
