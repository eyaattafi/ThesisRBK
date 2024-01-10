const inboxRouter=require("express").Router()
const Inbox=require('../Controllers/inboxCont.js')


inboxRouter.get('/inboxOfUser/:idUser',Inbox.getInboxUser)
inboxRouter.get('/inboxOfAdmin/:idAdmin',Inbox.getInboxAdmin)
inboxRouter.get('/getClaims/:idAdmin', Inbox.getClaims);
inboxRouter.post('/addinbox', Inbox.createInbox);
inboxRouter.put('/updateinbox/:idinbox', Inbox.updateInbox);
inboxRouter.delete('/deleteinbox/:idinbox', Inbox.deleteInbox);


module.exports=inboxRouter