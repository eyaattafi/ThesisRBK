const notificationRouter=require("express").Router()
const Notification=require('../Controllers/notificationCont.js')


notificationRouter.get('/getNotifications/:userid',Notification.getNotifications)
notificationRouter.post('/addNotification', Notification.createNotification);
notificationRouter.delete('/deletenotification/:idnot', Notification.deleteNotification);
module.exports=notificationRouter