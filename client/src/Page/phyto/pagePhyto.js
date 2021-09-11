import Modal from 'react-bootstrap/Modal'
import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import '../beauté/modal.css'
import ModalNAv from '../beauté/modalNav'
import './phyto.css'


// import '../../Shared/navbar.css'



function Modale ({id,el}) {



    // return (
    //             <div className="product">
    //             <img src={el.image} alt="" />
          
    //             <div className="product__info">
    //               <p className="info__name" defaultValue ={el.titre}/>
          
    //               <p className="info__description" defaultValue ={el.contenu}/>
          
            
        
    //             </div>
    //           </div>
    //         );
    //       };







    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  
    return (
      <div>
          
        <Button className="boutton" variant="primary" onClick={handleShow}>
          Voir plus
        </Button>
  
        <Modal dialogClassName="my-modal"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          
        >
          {/* <Modal.Header closeButton> */}
          {/* <img className="modalImage"src={el.image} alt="" /> */}
          {/* </Modal.Header> */}
            <ModalNAv className="navModal"/>
          <Modal.Body>
              
          <div>
         
         <div className="parent1" >
        
         <h6 className="title-phytoM">{el.titre}</h6>
         <div >
         <img  className="imageModal" src={el.image} alt="fpage1"/>
         </div>
         
         <div className="Rectang">
          
         </div>
     </div>
     <div className="modal-M">
  
        <p className="parag-phytoModal">{el.contenu}</p>
        </div>
        
          {/* <div className="product">
        <img src={el.image} alt="" />
  
         <div className="product__info">
           <p className="info__name" defaultValue ={el.titre}></p>
  
           <p className="info__description" defaultValue ={el.contenu}></p>
</div>
</div> */}
 </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="boutonModal" variant="secondary" onClick={handleClose}>
              Retour
            </Button>
            {/* <Button variant="primary">Understood</Button> */}
            </Modal.Footer>
           
        
        </Modal>
        
        </div>
    );
}
  
  export default Modale;
