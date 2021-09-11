import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import EditIcon from '@material-ui/icons/Edit';

import {useDispatch} from 'react-redux'

// import './papersDashboard.css'
import { updateProduct } from '../../../Redux/Action/productAction';


const UpdateProduct = ({el,id}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [update,setupdate]=useState({title:el.title,conseils:el.conseils,imageUrl:el.imageUrl,description:el.description, price:el.price})
    // handelInput
    const handleChange=(e)=>{
        const {name,value}=e.target
        setupdate({
            ...update,
            [name]:value
        })
        console.log("input",update)
    }
    // update Menu

    const updateproduct=()=>{
        dispatch (updateProduct(id,update.title , update.description, update.imageUrl,update.conseils, update.price , update.rating)) 
        console.log("update",update)
        setShow(false)
        }


  return(
    <div>
    <div className='container mt-5'>
 {/* <Button className="btn btn-warning" onClick={handleShow}>
   Modifier
</Button> */}
  <EditIcon className="dash-paper-edit" onClick={handleShow}/>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<h3>Modifier Prodiut</h3>
</Modal.Header>
<Modal.Body>
<Form >
<Form.Group controlId="formBasicEmail">
<Form.Label>Titre</Form.Label>
<Form.Control type="text" placeholder="title" name='title' defaultValue={el.title}  onChange={handleChange}/>

</Form.Group><Form.Group controlId="formBasicPassword">
<Form.Label>Description</Form.Label>
<Form.Control type="text" placeholder="enter description"  name='description' defaultValue={el.description}  onChange={handleChange}  />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label>Image</Form.Label>
<Form.Control type="text" placeholder="enter image"  name='imageUrl'  defaultValue={el.imageUrl}   onChange={handleChange} />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>Prix</Form.Label>
<Form.Control type="text" placeholder="enter price"  name="price"  defaultValue={el.price}  onChange={handleChange} />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>Conseils</Form.Label>
<Form.Control type="text" placeholder="enter conseils"  name="conseils"  defaultValue={el.conseils}  onChange={handleChange} />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>Rating</Form.Label>
<Form.Control type="text" placeholder="enter image"  name='rating' onChange={handleChange}/>
</Form.Group>

<Button className="ms-3  mt-3" variant="secondary" onClick={handleClose}>  
Close
</Button>

<Button onClick={updateproduct} >valider</Button>
</Form>
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default UpdateProduct