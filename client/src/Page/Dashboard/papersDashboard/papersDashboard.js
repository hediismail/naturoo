import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
// import {LinkContainer} from 'react-router-bootstrap'
import { Table, Button} from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
import './papersDashboard.css'

import { deletePaper, getPaperAPI } from '../../../Redux/Action/paperAction';
import AddPaper from './addPaper'
import UpdatePaper from './update'

const PapresDashboard = ()=>{

  const paper = useSelector((state) => state.paper.datas)
  const dispatch = useDispatch()
  
  console.log(paper)
 
  useEffect(() => {
    dispatch(getPaperAPI())
       }, [dispatch])
       console.log("my data",paper)

       //Delete Paper

 
   const deletePaperr =(id)=>{
    dispatch (deletePaper(id) )
    console.log(deletePaper(id))
  }
  return (
    <div>
       <AddPaper/>
        <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr className="dash-titr">
                <th className="dash-titr-id">ID</th>
                <th className="dash-titr-titr">Titre</th>
                <th className="dash-titr-cont">Contenu</th>
                <th className="dash-titr-catégo">Catégorie</th>
                <th className="dash-titr-img">Image</th>
                <th className="dash-titr-op"> Options</th>
              </tr>
            </thead>
            <tbody>
           
              {paper.map((paper) => (
                <tr key={paper._id}>
                  <td className="paper-dash">{paper._id}</td>
                  <td className="paper-dash">{paper.titre}</td>
                  <td className="paper-dash">{paper.contenu.substring(0, 150)}...</td>
                  <td className="paper-dash">{paper.catégorie}</td>
                  <td> <img className="dash-img" src={paper.image} alt=""/></td>
                  <td>
                  
                  <Button 
                      variant="danger"
                      className="dash-paper-editt">
                      <UpdatePaper className="dash-paper-editt" id={paper._id}  el={paper}/>
                      
                      </Button>
                    <Button
                      variant="danger"
                      className="dash-paper-delete"
                      onClick={() => deletePaperr(paper._id)}
                    >
                      < DeleteIcon/>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

</div>

)}

   
export default PapresDashboard 