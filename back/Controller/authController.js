const User = require ('../Model/authModel') 
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken')

       //Add user: Register
       
        
exports.register = async (req, res)=>{
        
    const {name, lastname, phone, adresse, email, password} = req.body;
    try{
        const newUser = new User ({name, lastname, phone, adresse, email, password});
       
        // Hash password
       const salt = 10;
       const genSalt = await bcrypt.genSalt(salt);
       const hashedPassword = await bcrypt.hash(password, genSalt);

        // console.log(hashedPassword)
       newUser.password = hashedPassword;
 
            

       //Generate a token + Save user:Auth
     

       const newUserToken= await newUser.save();

        const payload = {
            _id: newUserToken._id,
            name:newUserToken.name
               
          };
        const token = await jwt.sign(payload, process.env.SecretOrKey, {expiresIn: 3600});
             console.log(token);
        res.status(200).send({user: newUserToken,
            msg: 'user is saved' , token: `Bearer ${token}`});
    } catch (error) {
        res.status(500).send({ msg: 'can not save the user' });
    }
};

//Login

exports.login =  async (req, res)=>{
    const {email, password} = req.body;
    try{
        // find if the user exist
        const searchedUser = await User.findOne({ email });
        // if thhe email not exist
        if (!searchedUser) {
            return res.status(400).send({ msg: 'bad Credential' });
        }
        // passwords are equals
        const match = await bcrypt.compare(password, searchedUser.password);

        if (!match) {
            return res.status(400).send({ msg: 'bad Credential' });
        }
    //     créer un token
       const payload = {
         _id: searchedUser._id,
         name:searchedUser.name,
         role : searchedUser.role
            
       };
     const token = await jwt.sign(payload, process.env.SecretOrKey, {expiresIn: 3600});
          console.log(token);
        
        // send the user
       res.status(200).send({user:searchedUser, msg:"success", token: `Bearer ${token}`});
    }catch (error){
      res.status(500).send({msg:"can not get the user2"});  

    }

};
//Current user

exports.current = (req, res) => {
	res.status(200).send({ user: req.user });
};
      
        












    