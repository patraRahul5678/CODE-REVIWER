const express=require('express');
const router=express.Router();
// const aiservice = require('../services/ai.service');
const aicontroller = require('../controllers/ai.controller');

router.post("/get-review",aicontroller.getReview);

module.exports=router;