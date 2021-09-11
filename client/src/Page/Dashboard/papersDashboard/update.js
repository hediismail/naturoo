import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import EditIcon from '@material-ui/icons/Edit';

import {useDispatch} from 'react-redux'
import { updatePaper } from '../../../Redux/Action/paperAction';
import './papersDashboard.css'


const UpdatePaper = ({el,id}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [update,setupdate]=useState({titre:el.titre,contenu:el.contenu,image:el.image,catégorie:el.catégorie})
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

    const updatepaper=()=>{
        dispatch (updatePaper(id,update.titre, update.contenu,update.image ,update.catégorie)) 
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
<h3>Modifier Paper </h3>
</Modal.Header>
<Modal.Body>
<Form >
<Form.Group controlId="formBasicEmail">
<Form.Label>Titre</Form.Label>
<Form.Control type="text" placeholder="title" name='titre' defaultValue={el.titre}  onChange={handleChange}/>

</Form.Group><Form.Group controlId="formBasicPassword">
<Form.Label>Contenu</Form.Label>
<Form.Control type="text" placeholder="enter contenu"  name='contenu' defaultValue={el.contenu}  onChange={handleChange}  />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label>Image</Form.Label>
<Form.Control type="text" placeholder="enter image"  name='image'  defaultValue={el.image}   onChange={handleChange} />
</Form.Group>



<Form.Group controlId="formBasicPassword">
<Form.Label>Catégorie</Form.Label>
<Form.Control type="text" placeholder="enter description"  name="catégorie"  defaultValue={el.catégorie}  onChange={handleChange} />
</Form.Group>
<Button className="ms-3  mt-3" variant="secondary" onClick={handleClose}>  
Close
</Button>

<Button onClick={updatepaper} >valider</Button>
</Form>
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default UpdatePaper