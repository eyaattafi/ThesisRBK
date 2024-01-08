const Categories=require('../Models/categories.js')


//**********************get all categories *************/
async function getAllCategories(req,res){
try{
    const categ=await Categories.findAll({where:{categorieType:req.params.type}})
    res.json(categ)
}catch(error){
    res.status(500).json({error:error.message})
}
}
async function createCategorie(req, res) {
    try {
      const newWish= await Categories.create(req.body);
      res.status(201).json(newWish);

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
module.exports = {
   getAllCategories,
   createCategorie
  };