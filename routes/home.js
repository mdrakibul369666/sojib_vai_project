const express = require('express')
const router = express.Router()
const homeController =  require("../controllers/homeControllers.js") ;



router.get('/', homeController)



module.exports = router;