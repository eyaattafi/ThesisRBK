const Notification = require('../Models/notifications.js');

async function getNotifications(req, res) {
    try {
      const notifications = await Notification.findAll({ where: { userIduser: req.params.userid } });
      res.status(200).json(notifications)

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async function createNotification(req, res) {
    try {
      const notification= await Notification.create(req.body);
      res.status(201).json(notification);

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
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
  module.exports = {
    getNotifications,
    createNotification,
    deleteNotification
  };
