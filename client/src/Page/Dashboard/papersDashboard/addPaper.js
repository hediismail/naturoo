import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import {addPaperApi} from '../../../Redux/Action/paperAction'
import {useDispatch,useSelector} from 'react-redux'

const AddPaper = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()



const [input,setInput]=useState({titre:"",contenu:"", image:"" ,catégorie:""})

const hanleChange=(e)=>{
    const {name,value}=e.target
    setInput({
        ...input,
        [name]:value
    })
    console.log("input",input)
}
const addNewPaper=()=>{
dispatch (addPaperApi(input.titre, input.contenu,input.image ,input.catégorie)) 
console.log("inpuuuuuuuuuuuut",input)
setShow(false)
}
  return(
    <div>
    <div className='container mt-5'>
 <Button variant="primary" onClick={handleShow}>
   Ajouter Paper
</Button>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className="title-modal">Ajouter Paper</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form >
<Form.Group controlId="formBasicEmail">
<Form.Label>Titre</Form.Label>
<Form.Control type="text" placeholder="title" name='titre' onChange={hanleChange} />

</Form.Group><Form.Group controlId="formBasicPassword">
<Form.Label>Contenu</Form.Label>
<Form.Control type="text" placeholder="enter category"  name='catégorie' onChange={hanleChange}  />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label>Image</Form.Label>
<Form.Control type="text" placeholder="enter image"  name='image' onChange={hanleChange}   />
</Form.Group>




<Form.Group controlId="formBasicPassword">
<Form.Label>Catégorie</Form.Label>
<Form.Control type="text" placeholder="enter description"  name='contenu' onChange={hanleChange}   />
</Form.Group>
<Button className="ms-3  mt-3" variant="secondary" onClick={handleClose}>  
Close
</Button>

<Button  onClick={addNewPaper}>add</Button>
</Form>
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default AddPaper

      