const express = require('express')
const router = express.Router()
const {protectedRoute} = require('../controllers/protectedRoute')
const {addRegisterUser, authenticateLoginUser} = require('../controllers/addRegister')
const { verifyToken } = require('../middleware/verifyToken')

router.get("/protectedUser", verifyToken, protectedRoute)
router.post("/registeruser",addRegisterUser)
router.post("/loginuser",authenticateLoginUser)


module.exports = router;