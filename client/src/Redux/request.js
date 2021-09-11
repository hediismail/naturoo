// import axios from 'axios'

// export const fetchAllPapers = () =>
//   axios
//     .get("http://localhost:4005/app/paper/get", {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     })
//     .then((res) => res.data);


//     export const fetchPaperDetails = () =>
//   axios
//     .get("http://localhost:4005/app/paper/get/:id", {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     })
//     .then((res) => res.data);


/***********************************second try*********** */



import axios from "axios";

const Api = axios.create({ baseURL: "http://localhost:4005/app/paper" });

//addMenu
function addNewPaper(titre, contenu,image,catégorie ) {
    return Api.post("/add", { titre, contenu,image,catégorie});
  }

  //getMenu
  function getAllPapers() {
    return Api.get("/get");
  }

//deleteMenu
function deletePapers(id) {
  return Api.delete(`/${id}`);
}

//update Menu 

function updatePapers(id) {
  return Api.put(`/${id}`);
}





  export {addNewPaper, getAllPapers, deletePapers,updatePapers} 
  export default {addNewPaper,getAllPapers, deletePapers,updatePapers}
  

  /***************************************PRODUCTS ************************************ *****/

  