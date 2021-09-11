import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';

import {useDispatch,useSelector} from 'react-redux'
import { addProductApi } from '../../../Redux/Action/productAction';

const AddProduct = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()



const [input,setInput]=useState({title:"",description:"", imageUrl:"" ,price:"", conseils
:"", rating:""})

const hanleChange=(e)=>{
    const {name,value}=e.target
    setInput({
        ...input,
        [name]:value
    })
    console.log("input",input)
}
const addNewProduct=()=>{
dispatch (addProductApi(input.title, input.description,input.imageUrl ,input.price, input.conseils, input.rating
    )) 
console.log("input",input)
setShow(false)
}
  return(
    <div>
    <div className='container mt-5'>
 <Button variant="primary" onClick={handleShow}>
   Ajouter Produit
</Button>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className="title-modal">Add Item</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form >
<Form.Group controlId="formBasicEmail">
<Form.Label>Titre</Form.Label>
<Form.Control type="text" placeholder="title" name='title' onChange={hanleChange} />

</Form.Group><Form.Group controlId="formBasicPassword">
<Form.Label>Description</Form.Label>
<Form.Control type="text" placeholder="enter description"  name='description' onChange={hanleChange}  />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label>Image</Form.Label>
<Form.Control type="text" placeholder="enter image"  name='imageUrl' onChange={hanleChange}   />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>Prix</Form.Label>
<Form.Control type="text" placeholder="enter your advice"  name='price' onChange={hanleChange}   />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label>Conseils</Form.Label>
<Form.Control type="text" placeholder="enter prix"  name='conseils' onChange={hanleChange}   />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>Rating</Form.Label>
<Form.Control type="text" placeholder="enter image"  name='rating' onChange={hanleChange}   />
</Form.Group>

<Button className="ms-3  mt-3" variant="secondary" onClick={handleClose}>  
Close
</Button>

<Button  onClick={addNewProduct}>add</Button>
</Form>
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default AddProduct

      