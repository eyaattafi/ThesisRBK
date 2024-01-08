const categorieRouter=require("express").Router()
const Categorie=require('../Controllers/categoriesCont.js')


categorieRouter.get('/getcategorie/:type',Categorie.getAllCategories)
categorieRouter.post('/addCategorie', Categorie.createCategorie);
module.exports=categorieRouter