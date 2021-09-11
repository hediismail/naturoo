import axios from "axios";



const Api = axios.create({ baseURL: "http://localhost:4005/app/product" });

//addMenu
function addNewProduct(title, description, rating, imageUrl,conseils, price) {
    return Api.post("/add", { title, description, rating, imageUrl,conseils, price });
  }

  //getMenu
  function getAllProducts() {
    return Api.get("/get");
  }

//deleteMenu
function deleteProducts(id) {
  return Api.delete(`/${id}`);
}

//update Menu 

function updateProducts(id) {
  return Api.put(`/${id}`);
}





  export {addNewProduct, getAllProducts, deleteProducts,updateProducts} 
  export default {addNewProduct,getAllProducts, deleteProducts,updateProducts}