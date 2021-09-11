import React from 'react'
import "./footer.css"
import {FaPhone} from 'react-icons/fa'
import {ImHome} from 'react-icons/im'
import {IoIosMail} from 'react-icons/io'
import { FaPagelines} from 'react-icons/fa';
import {Link} from 'react-router-dom'


import KeyboardCapslockIcon from '@material-ui/icons/KeyboardCapslock';


const Footer = () => {
    return (
<div>
<div className="pre-footer">
{/* <FaPhone className="iconF1"/> <ImHome className="iconF2"/> <IoIosMail className="iconF3"/> */}
{/* <Link to="#bigtitre" >< KeyboardCapslockIcon /> </Link> */}

        <div className="footer-div">
        <FaPhone   className="iconF1"/> <ImHome className="iconF2"/> <IoIosMail className="iconF3"/>
        <h1  className="footer-titre"><FaPagelines/> NATUROPATHIE </h1> 
         <h1 className="footer">Naturopathie 2021 |Tout droits réservés | Les informations présentes sur ce site sont déstinés à ameliorer votre santé et non pour remplacre un medecin | Mouna Khila </h1> 
        
        
        </div>
        </div>
       </div>
    )
};

export default Footer










