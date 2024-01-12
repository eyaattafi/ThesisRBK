const inboxRouter=require("express").Router()
const Inbox=require('../Controllers/inboxCont.js')

//Admin Inbox interaction
inboxRouter.get('/inboxOfUser/:idUser',Inbox.getInboxUser)
inboxRouter.get('/inboxOfAdmin/:idAdmin',Inbox.getInboxAdmin)
inboxRouter.get('/answersOfAdmin/:idAdmin',Inbox.getAnswers)

//Claims interactions //
inboxRouter.get('/getClaims/:idAdmin', Inbox.getClaims);
inboxRouter.get('/getClaimsRespons/:idAdmin',Inbox.getClaimsRespons)


inboxRouter.post('/addinbox', Inbox.createInbox);
inboxRouter.put('/updateinbox/:idinbox', Inbox.updateInbox);
inboxRouter.delete('/deleteinbox/:idinbox', Inbox.deleteInbox);


module.exports=inboxRouter