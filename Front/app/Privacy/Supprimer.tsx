import React from "react"
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Link from "next/link"

 const Supprimer = () =>{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        height: 750,
        width: 600,
        bgcolor: "background.paper",
        boxShadow: 24,
        border: "none",
        p: 4,
        borderRadius: "0.50rem",
      };

    return (
   <div onClick={handleOpen}>
     {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > */}
            <Box sx={style}>
            <div className="p9" >L'engagement de la communauté</div>
            <div className="p10">RentaVilla est une communauté où quiconque peut trouver sa place</div>
            <div className="p11">Afin de maintenir cet engagement, nous vous demandons de bien vouloir consentir à ce qui suit :</div>
            <div className="p12">Engageons-nous ensemble à faire preuve de respect envers chaque membre de la communauté RentaVilla, 
              quelle que soit sa couleur de peau, sa religion, sa nationalité ou origine, son handicap, son sexe, son identité de genre,
              son orientation sexuelle ou son âge.</div>
            <button className="b1">Accepter et continuer</button>
            <button className="b2" ><Link href="/confirmSupp"> Supprimer </Link> </button>
            </Box>
            {/* </Modal> */}
        </div>
    )

    
 }

 export default Supprimer ;