const express = require ('express')
const router = express.Router()
const user = require ('../Controller/authController')

const { loginRules, registerRules, validation } = require('../Middleware/validator');
const jwt = require('jsonwebtoken');
//const controllers = require('../Controller/authController');
const isAuth = require('../Middleware/passport');




//Register :
 router.post('/register', registerRules(), validation, user.register)


//Login:

router.post('/login', loginRules(), validation, user.login)

 //Get current user: vérifier si l'utilisateur est encore logué

 router.get('/current', isAuth(), user.current)

module.exports = router