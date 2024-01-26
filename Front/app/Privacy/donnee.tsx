"use client"
import React ,{useState} from "react"
import Link from "next/link"
import InfoPers from "./InfoPers"
import Modal from "@mui/material/Modal";
import Supprimer from "./Supprimer"
import './conf.css'

const Donnee = () => {
    const [open, setOpen] = React.useState([false,false]);
    const handleOpen = () => setOpen([true,false]);
    const handleClose = () => setOpen([false,false]);
    
  const renderComp=()=>{
    if(open[0]===true){
        return <InfoPers/>
    }else if (open[1]===true){
        return <Supprimer/>
    }
}
    return (
    <div className="all" >
 
       <div className="div1">Gestion des donnees de votre compte</div>
       <div className="personel" onClick={()=>setOpen([true,false])}>Demander à recevoir mes données personnelles </div>
       <div className="p1"> Nous créerons pour vous premettre de télécharger vos données personelles.</div>
       <div className="personel" onClick={()=>setOpen([false,true])} >Supprimer mon compte </div>
       <div className="p1"> Votre compte et vos données seront alors supprimés difinitivement , conférmement
        à la législation applicable . </div>
       <div>{renderComp()}
    </div>
   
       </div>
    )
}
export default Donnee ;