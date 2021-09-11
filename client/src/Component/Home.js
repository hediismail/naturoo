import React from 'react'
import "../Shared/navbar.css"
import acceuil from './../images/acceuil.jpg'
import beauté from './../images/beauté.jpg'
import maladies from './../images/maladies.jpg'
import phyto from './../images/phyto.jpg'
import boutiquePrincipal from './../images/boutikPrincipal.jpg'
import treemen from './../images/treeman.jpg'
import Navbar from '../Shared/navbar'
import Footer from '../Shared/footer'
import { useDispatch, useSelector } from 'react-redux'
import  { useEffect,useState } from 'react'
import { getPaperAPI } from '../Redux/Action/paperAction'
import { getProductAPI } from '../Redux/Action/productAction'
import { Link } from 'react-router-dom'






function Home({ match }) {
    const keyword = match.params.keyword
    const dispatch = useDispatch()


 

    const productList = useSelector((state) => state.getPaperAPI)
    const { paper,  catégorie} = getPaperAPI
    const { product} =getProductAPI

    useEffect(() => {
        dispatch(getPaperAPI, getProductAPI(keyword))
      }, [dispatch, keyword])
     

console.log('keyword', keyword)
      
    return (
        <div>
         <Navbar />
            <div className="parent" >
            <h1 className="fraze">LE CHEMAIN VERS UNE VIE EPANOUIE</h1>
  
            <div >
            <img  className="image1" src={acceuil} alt="fpage1"/>
            </div>
            <div className="rectangle">
             
            </div>
            {/******* * ** ****Crad *******/}
            <div>
            <h3 className="noservices"><b>NOS SERVICES</b></h3>
            </div>
            </div>
           <div className="total-card">
            <div className="card">
                <div >
                    <Link to="/phyto"><img   className="card-imag" src={phyto} alt="imgphyto"/></Link>
                    <div  className="deco">
                        <h3 className="card-text" >PHYTOTHERAPIE </h3>

                    </div>
                </div>
            </div>
            <div className="card">
                <div >
                    <Link to="/Maladies"><img className="card-imag" src={maladies} alt="imgphyto"/></Link>
                    <div  className="deco">
                        <h3 className="card-text">MALADIES</h3>

                    </div>
                </div>
            </div>
            
            <div className="card">
                <div >
                   <Link to="/beauté"> <img className="card-imag" src={beauté} alt="imgphyto"/></Link>
                    <div  className="deco">
                        <h3 className="card-text">BEAUTÉ</h3>

                    </div>
                </div>
            </div>
            <div className="card">
                <div >
                   <Link to="/boutique"> <img className="card-imag" src={boutiquePrincipal} alt="imgphyto"/></Link>
                    <div  className="deco">
                        <h3 className="card-text">BOUTIQUE</h3>

                    </div>
                </div>
            </div>
            </div>
{/* **************************Contact ******************************/}

<div className="cadre">
{/* <div className="nousommes" >
    <h2>En savoir plus</h2>
    <lu>
       <li> À propos </li>
       <li> Phytothérapie</li>
       <li> Maladies</li>
       <li> Beauté</li>
       <li> Boutique</li>
    </lu>

</div> */}

<div className="consulta">
<h6>Votre consultation de naturopathie en ligne</h6>
<p className="paragraf1">Ces consultations ne remplacent pas une consultation médicale. Ce sont des bilans de vitalité qui permettent d’évaluer votre état de santé global et votre niveau d’énergie. Lors de la consultation nous mettrons en place un programme  d’hygiène de vie qui sera votre feuille de route au quotidien. 

Le but de ces consultations est de vous apporter une réponse globale à vos problématiques physiques et émotionnelles, à travers des conseils d’hygiène de vie, qui se basent uniquement sur des techniques exclusivement naturelles : alimentation, exercice physique, gestion des émotions, phytologie, huiles essentielles, hydrologie, etc </p>

</div>

<div>
<img className="treemen" src={treemen} alt="treemen"/>
</div>
<div className="paragraf2">
    <h6 className="hh6">Qu’est-ce qu’un naturopathe ?</h6>
    <p className="nat">Le naturopathe est un éducateur de santé.  Il établit un bilan de vitalité personnalisé et vous permet de mieux vous connaître. Vous prendrez conscience de vos forces et de vos faiblesses, de votre niveau d’énergie vitale. Vous repartirez avec une meilleure connaissance de votre organisme. Ensemble, vous établirez un programme qui vous permettra d’optimiser votre forme : alimentation, habitudes de vie à mettre en place, conseils phytothérapie et aromathérapie. Le rôle du naturopathe est ainsi de vous rendre le plus informé possible et le plus autonome vis-à-vis de votre santé.</p>
</div>
</div>
 {/* <div className="contacter-nous">
    <h5 className="contactnous">Contactez-Nous</h5>
 <a href="#search" className="contact"><FaPhone/><h6>92 196 546 </h6></a>
 <a href="#search" className="contact"><ImHome/><h6>Naturopathie, 44 Le bardo 2000, Tunis</h6></a>
 <a href="#search" className="contact"><IoIosMail/><h6>natoropathie@gmail.com</h6></a>

</div>  */}



<Footer/>
</div>

  
    )
}

export default Home
