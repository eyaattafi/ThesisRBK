const notificationRouter=require("express").Router()
const Notification=require('../Controllers/notificationCont.js')

notificationRouter.get('/AllNotifs',Notification.getNotifs)
notificationRouter.get('/getNotifications/:userid',Notification.getNotifications)
notificationRouter.get('/unreadNotification/:userid',Notification.getUnreadNot)
notificationRouter.put('/updateNotification/:idnotification',Notification.updateNotif)
notificationRouter.post('/addNotification', Notification.createNotification);
notificationRouter.delete('/deletenotification/:idnot', Notification.deleteNotification);
module.exports=notificationRouter