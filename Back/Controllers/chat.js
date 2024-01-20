const chat = require('../Models/chat');

module.exports = {
addChat:async(req,res)=>{
        try {
            let ad=await chat.create(req.body)
            const token = generateToken(ad.id,ad.contet);
            ad.dataValues.token=token
            res.json(ad)
        } catch (error) {
            res.status(500).json(error)
        }
    },
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