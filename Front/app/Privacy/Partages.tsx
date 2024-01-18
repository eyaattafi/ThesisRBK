// import React  from "react"
import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Partages = () => {

    return (
    <div className="all">
        <div className="part">Partages d'ativitées</div>
        <div className="p2">Choissisez la façon ,de votre profil et vos activitéss'affichent pour les tiers .</div>
        <div className="p3">
            Afficher mon ou mes annonce(s) dans les moteurs de recherche</div>
        <div className="p4">En activant cette option, les moteurs de recherche, comme Google, afficheront votre ou vos annonce(s) dans les résultats de recherche.</div>
        <div className="icon"><Switch {...label} defaultChecked /></div>
        <div className="p5">Accusés de réception</div>
        <div className="p4">Si cette option est activée, les expéditeurs pourront savoir que vous avez lu leurs messages.</div>
        <div className="icon"><Switch {...label} defaultChecked /></div>

    </div>
    )
}
export default Partages ;