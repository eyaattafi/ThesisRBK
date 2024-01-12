const Inbox = require('../Models/inbox.js');
const User =require('../Models/user.js')
//Get all Inbox messages of a user  //

async function getInboxUser (req, res) {
    try {
      const getinUs= await InboxfindAll({ where: { userIduser: req.params.idUser } });
      res.status(200).json(getinUs)

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

//Get all Inbox messages of an admin //

async function getInboxAdmin (req, res) {
    try {
      const getinAdm = await Inbox.findAll({ include:{model:User},where: { adminIdadmin: req.params.idAdmin, inboxStatus : "Reciever" } });
      res.status(200).json(getinAdm)

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

// Get All Claims sent to the admin  //

async function getClaims (req, res) {
  try {
    const getClaim = await Inbox.findAll({ include:{model:User},where: { adminIdadmin: req.params.idAdmin, 
    inboxStatus : "Reciever",
  inboxObject : "Claims" } });
    res.status(200).json(getClaim)

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get Responses on claims by the admin //


async function getClaimsRespons (req, res) {
  try {
    const getRes = await Inbox.findAll({ include:{model:User},where: { adminIdadmin: req.params.idAdmin, 
    inboxStatus : "Sender",
  inboxObject : "Response on Claim" } });
    res.status(200).json(getRes)

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}




  //Create Message  //
  async function createInbox(req, res) {
    try {
      const addMessage = await Inbox.create(req.body);
      res.status(201).json(addMessage);

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

// delete Message //
  async function deleteInbox(req, res) {
    try {
     
      const deleteMessage= await Inbox.destroy({
        where: {idinBox : req.params.idinbox},
      });
      res.json(deleteMessage)
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  //update Message //
  async function updateInbox(req, res) {
    try {
     
      const upMessage = await Inbox.update(req.body, {
        where: {idinBox : req.params.idinBox},
      });
      res.json(upMessage)
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }


  module.exports = {
    getInboxUser,
    getInboxAdmin,
    createInbox,
    deleteInbox,
    updateInbox,
    getClaims,
    getClaimsRespons
  };
