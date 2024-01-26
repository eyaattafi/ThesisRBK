"use client"

import React ,{useState}from "react"
import Link from "next/link"
import Donnee from "./donnee"
import Partages from "./Partages"
import Services from "./Services"
import './conf.css'

const Privacy = ()=>{

    const [open,setOpen]=useState([true,false,false])
    const renderComp = () => {
        if(open[0]===true){
            return <Donnee/>
        }else if(open[1]===true){
            return <Partages/>
        }else if(open[2]===true){
            return <Services/>
        }
    }
    
    return (
        <div className="all">
            <div className="compte"><Link href="Profile">Compte</Link>  </div>
                <div className="confi">Confidentialité et partage </div>
                <div className="donnee" onClick={()=>setOpen([true,false,false])}>Données</div>
                <div className="parteges" onClick={()=>setOpen([false,true,false])}>Partages</div>
                <div className="services" onClick={()=>setOpen([false,false,true])}>Services</div>
                <div>{renderComp()}</div>
            </div>
    )
}

export default Privacy ;