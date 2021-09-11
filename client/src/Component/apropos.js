import React from 'react'

import apropos from './../images/apropos.jpg'
import conceptnaturo from './../images/conceptsnatoro.jpg'
import nousommes from './../images/nousommes.jpg'
import Navbar from '../Shared/navbar'
import Footer from '../Shared/footer'
import './apropos.css'

function Apropos() {
    return (
        <div>
         <Navbar/>
            <div className="parent" >
            <h1 className="fraze">À propos</h1>
  
            <div >
            <img  className="imagearpop" src={apropos} alt="fpage1"/>
            </div>
            
            <div className="Rectang">
             
            </div>
        </div>
        <div>
        <img  className="imageconcept" src={conceptnaturo} alt="fpage1"/>
        <h3 className="titre2">NOS CONCEPTS</h3>
        <p className="paragraconcept">La naturopathie repose sur la théorie selon laquelle il existe une force vitale au sein de l'organisme qui lui permet de se défendre et se guérir lui-même. Et pour que cette force s'active, il est nécessaire de favoriser correctement ce qu'on appelle les facteurs naturels de santé (alimentation, activité physique, jeûne, eau, air pur, soleil relaxation, équilibre émotionnel, repos...).
       <br/> Contrairement à la médecine dite conventionnelle, qui très souvent va uniquement traiter les symptômes, la naturopathie, une médecine traditionnelle, cherchera quant à elle avant tout la ou les causes profondes de ces symptômes. En d'autres termes, elle agira sur le «terrain» de l'individu, sur son mode de vie. La naturopathie préconise une approche globale et considère le patient dans son entièreté, on parle d'une approche holistique.</p>
        </div>
        <div className="intro1">
    

        </div>
        <div>
        <img  className="imagenousommes" src={nousommes} alt="fpage1"/>
        <h3 className="titre1">QUI SOMMES-NOUS</h3>
        <p className="paragrasommes">Un naturopathe, contrairement à un médecin, ne traite pas les maladies et ne pose pas de diagnostic. Il peut travailler en collaboration avec celui-ci, mais a un rôle bien différent, qui est complémentaire. De nombreux médecins réfèrent d'ailleurs certains de leur patients à un naturopathe après les avoir vus.

Le naturopathe va chercher à maintenir ou à rétablir la santé par des moyens naturels en cherchant notamment à mettre en œuvre les capacités d’auto-guérison de ses clients. Pour cela il aura au préalable fait un bilan global des facteurs de santé, pour estimer le niveau de vitalité et les éventuelles carences de la personne qui vient le voir. Il va donc poser beaucoup de questions pour connaître le mode de vie de son client, il cherchera par exemple à savoir s'il fait du sport, s'il a un travail stressant, il tentera d'en apprendre plus sur son type d'alimentation, etc.

En fonction des réponses obtenues, le naturopathe se positionnera comme un «éducateur de santé»Contrairement et donnera des conseils dans le but que son client retrouve ou conserve son état de santé.  

</p>
        </div>
        <div className="intro2">

</div>
<Footer/>
        </div>
        
    )
}

export default Apropos