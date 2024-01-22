
const featureCont=require('../Controllers/Feature')
const router=require('express').Router()


router.get('/getByFeature/:id',featureCont.getOffersByFeature)

module.exports=router