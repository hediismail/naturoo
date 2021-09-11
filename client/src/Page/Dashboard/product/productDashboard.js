import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Table, Button} from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteProduct, getProductAPI } from '../../../Redux/Action/productAction'
import AddProduct from './addProduct'
import UpdateProduct from './updateProduct'
import '../papersDashboard/papersDashboard.css'

const ProductsDashboard = ()=>{

  const product = useSelector((state) => state.product.datas)
  const dispatch = useDispatch()
  
  console.log(product)
 
  useEffect(() => {
    dispatch(getProductAPI())
       }, [dispatch])
       console.log("my datas",product)

       //Delete Paper

 
   const deleteProductt =(id)=>{
    dispatch (deleteProduct(id) )
    console.log(deleteProduct(id))
  }
  return (
    <div className="tab">
       <AddProduct/>
        <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr className="dash-titr">
                <th className="dash-titr-id">ID</th>
                <th className="dash-titr-titr">Titre</th>
                <th className="dash-titr-cont">Déscription</th>
                <th className="dash-titr-cont">Conseils</th>
                <th className="dash-titr-catégo">Prix</th>
                <th className="dash-titr-img">Rating</th>
                <th className="dash-titr-img">Image</th>
              
                <th className="dash-titr-op"> Options</th>
              </tr>
            </thead>
            <tbody>
           
              {product.map((product) => (
                <tr key={product._id}>
                  <td className="paper-dash">{product._id}</td>
                  <td className="paper-dash">{product.title}</td>
                  <td className="paper-dash">{product.description.substring(0, 50)}...</td>
                  <td className="paper-dash">{product.conseils}</td>
                  <td className="paper-dash">{product.price}</td>
                  <td className="paper-dash">{product.rating}</td>
                  <td> <img className="dash-img" src={product.imageUrl} alt=""/></td>
                  <td>
                  
                   <Button 
                      variant="danger"
                      className="dash-paper-editt">
                      <UpdateProduct className="dash-paper-editt" id={product._id}  el={product}/>
                      
                      </Button>
                    <Button
                      variant="danger"
                      className="dash-paper-delete"
                      onClick={() => deleteProductt(product._id)}
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

   
export default ProductsDashboard 