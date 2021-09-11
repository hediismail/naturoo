const Paper = require ('../Model/paperModel') 



module.exports = {
   
        // Add Paper
        addPaper:async (req, res)=>{
            
               
           const {titre, contenu, image,  catégorie}=req.body
    
           try{
               paper= new Paper({
                titre, 
                contenu,
                 image,
                 catégorie, 
                 
               })
               await paper.save()
               res.json(paper)
           }  
           catch(error){console.error(error.message)}
         
        },
        getPaper:async(req, res)=>{
            try{
                const paper = await Paper.find();
                res.json(paper)
            }
            catch(error){console.error(error.message)}
     },
     deletePaper: async (req, res)=>{
        try{
            const paper = await Paper.findByIdAndDelete(req.params.id)
            res.json(paper)
        }
        catch(error){console.error(error.message)}
      
    },
    updatePaper: async (req, res)=>{
        try{
            const paper =await Paper.findByIdAndUpdate(req.params.id, req.body,        
         {new :true})
         res.json(paper)
    }
    catch(error){console.error(error.message)}
    },
    getPaperDetail : async (req, res) => {
        try {
          const paper = await Paper.findById(req.params.id);
      
          res.json(paper);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Server Error" });
        }
    }
  
    }
    

