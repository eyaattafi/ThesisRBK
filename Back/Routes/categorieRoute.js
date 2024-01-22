const categorieRouter=require("express").Router()
const Categorie=require('../Controllers/categoriesCont.js')


categorieRouter.get('/getcategorie/:type',Categorie.getAllCategories)
categorieRouter.post('/addCategorie', Categorie.createCategorie);
categorieRouter.get('/categoryByName/:name', Categorie.getCategoryByName);
module.exports=categorieRouter