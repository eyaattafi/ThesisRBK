const chat = require('../Models/chat');

module.exports = {

getAllChat:async (req,res)=>{
        const all= await chat.findAll();
        res.json(all)
    },

getOneChat:async (req,res)=>{
        const {id}=req.params;
        const get=await chat.findByPk(id);
        res.json(get)
    },

deleteChat:async (req,res)=>{
        const {id}=req.params;
        const supp=await chat.destroy({
            where:{id}
        })
        res.json(supp)
    }
    
}