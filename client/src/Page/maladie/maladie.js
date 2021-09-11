import React from 'react'
import maladies from '../../images/maladies.jpg'
import { useDispatch, useSelector } from 'react-redux'
import {useEffect, useState} from 'react'
import Modale from './pageMaladie'
import '../../Page/phyto/phyto.css'

//  import { useHistory } from 'react-router'
// import { logout } from '../../Redux/Action/authAction'

import Navbar from '../../Shared/navbar'
import Footer from '../../Shared/footer'
import { getPaperAPI } from '../../Redux/Action/paperAction'
// import './phyto.css'
const Maladie = () => {

    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
      setKeyword(e.target.value)
      
    } 
    const dispatch=useDispatch();
    // const history=useHistory();
    const paper = useSelector((state)=>state.paper.datas);
    useEffect(() => {
        dispatch(getPaperAPI())
           }, [dispatch])
           console.log("my data",paper)
    return (
        <div>
         <Navbar submitHandler={submitHandler}/>
            <div className="parent1" >
            <h1 className="fraze">Maladies</h1>
  
            <div >
            <img  className="imagearpop" src={maladies} alt="fpage1"/>
            </div>
            
            <div className="Rectang">
             
            </div>
        </div>
        <div className="espace"/>
{
    paper
    .filter((el) => el.catégorie === 'maladie' && el.titre.toLowerCase().includes(keyword.toLowerCase()))
    .map((el, key)=>(
        <div  key={key}>

        <div className="card-phyto">
            <div className="phyto-title-parag">
        <h6 className="title-phyto">{el.titre}</h6>
        <p className="parag-phyto">{el.contenu.substring(0, 300)}...</p>
        <Modale id={el._id} el={el} />
        
        </div>
        <img className="img-phyto"
        src={el.image} alt="imgs"/>
        </div>


     
        </div> 
    )
     ) 
     
        }
         <Footer/>
     </div> 
          
     )
     }

export default Maladie
