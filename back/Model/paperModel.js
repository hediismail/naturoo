const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paperSchema = new Schema(
  {
    titre: {
      type: String,
      required: true,
    },
    contenu: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    catégorie: {
      type:String,
      required: true,
    }
   
}
);

module.exports = mongoose.model("Paper", paperSchema);