import React from 'react'
// import maladies from '../../images/maladies.jpg'
// import { useDispatch, useSelector } from 'react-redux'
// import {useEffect} from 'react'
// import {getAllPapers} from '../../Redux/Action/paperAction'
//import './phyto.css'
// const PageMaladie = () => {
    // const dispatch=useDispatch();
   
    // const paper = useSelector((state)=>state.paper.datas);
    // useEffect (()=>{
    //     dispatch(getAllPapers())
    // })
    // return (
        // <div>
         
        //     <div className="parent1" >
        //     <h1 className="fraze">Maladies</h1>
  
        //     <div >
        //     <img  className="imagearpop" src={maladies} alt="fpage1"/>
        //     </div>
            
        //     <div className="Rectang">
             
        //     </div>
        // </div>
        // <div className="espace">

       
        function Maladies ({id,el}) {
          
          
            return (
                

    // paper
    // .filter((el) => el.catégorie === 'maladie')
    // .map((el)=>(
        

        <div className="card-phyto">
         <img className="modalImage" src={el.image} alt="" />
        
            
          <h6 className="title-phyto">{el.titre}</h6>
        <p className="parag-phyto">{el.contenu}</p>
        </div>
            );

        }

    

export default Maladies
