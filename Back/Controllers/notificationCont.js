const Notification = require('../Models/notifications.js');
 

//Get All Notifications // 
async function getNotifs(req, res) {
  try {
    const notifs = await Notification.findAll();
    res.status(200).json(notifs)

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}



// Get Notif By userId // 
async function getNotifications(req, res) {
    try {
      const notifications = await Notification.findAll({ where: { userIduser: req.params.userid } });
      res.status(200).json(notifications)

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get Notif unread By userId // 
async function getUnreadNot(req, res) {
  try {
    const notifications = await Notification.findAll({ where: { userIduser: req.params.userid ,notificationSeen : false} });
    res.status(200).json(notifications)

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


  // Add notification //
  async function createNotification(req, res) {
    try {
      const notification= await Notification.create(req.body);
      res.status(201).json(notification);

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }


  // Delete Notification //
  async function deleteNotification(req, res) {
    try {
     
      const notification= await Notification.destroy({
        where: {idnotification : req.params.idnot},
      });
      res.json(notification)
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
// Update notification // 
async function updateNotif(req, res) {
  try {
    const updateNot = await Notification.update(req.body, {
      where: {idnotification : req.params.idnotification},
    });
    res.json(updateNot)
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


  module.exports = {
    getNotifications,
    createNotification,
    deleteNotification,
    getNotifs,
    updateNotif,
    getUnreadNot
  };
