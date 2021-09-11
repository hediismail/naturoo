import Modal from 'react-bootstrap/Modal'
import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import '../beauté/modal.css'
import ModalNAv from '../beauté/modalNav';
import Rating from '../../Component/Rating';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux'
import { loadCurrentItem, addToCart } from '../../Redux/Action/orderAction'
import { connect } from 'react-redux'


function Modale ({id,el}) {



    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [qanty, setQanty] = useState(1)
    const dispatch = useDispatch()
  
    return (
      <div>
          
        <a href className="title" variant="primary" onClick={handleShow}>
        {el.title.substring(0, 20)}...
       
        </a>
  
        <Modal dialogClassName="my-modal"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          
        >
       
          <ModalNAv className="navModal"/>
          <Modal.Body>
          
              
          <div >
         
         <div className="parent1" >
        
         <h6 className="title-phytoM">{el.title}</h6>
         <div >
         <img  className="imageModal" src={el.imageUrl} alt="fpage1"/>
         </div>
         
         <div className="Rectang">
          
         </div>
     </div>
     
     <div className="boutik">
     
     <div className="modal-B">
    
  
        <h3 className="text-dexcrip">Description:</h3>
        <p className="parag-boutikModal">{el.description}</p>
        <h4 className="text-dexcrip">Conseils d'utilisation:</h4>
        <p className="parag-boutikModal">{el.conseils}</p>
        </div>
       
        <div className="box-boutik">
       
        <p className="prix-modalBoutik"> Prix: {el.price} DT</p>
        <div className="Rating-modal"> 
        <Rating style={{ fontSize: 70 }} className="ratingss"
            rating={el.rating}
           
            
          />
           <a> <AddShoppingCartIcon style={{ fontSize: 80 }} className="iconPanierModale" 
            onClick={() => dispatch(addToCart(el._id, qanty))}
          
          />
            
          </a>
          </div>
        </div>
        </div>
        
        
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
const mapDispatchToProps = (dispatch) => {
  return {
     addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  }
}

export default connect(null, mapDispatchToProps)(Modale)
  //export default Modale;
