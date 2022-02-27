const express= require("express");
const router = express.Router();

router.get("/", (req,res) => {
  res.json({msg:"new varsion 27.2.2022"});
})

module.exports = router;