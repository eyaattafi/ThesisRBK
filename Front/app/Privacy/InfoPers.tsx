import React from "react"
import Box from "@mui/material/Box";
const InfoPers = () =>{
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
  
           <Box sx={style}>
           <div className="p8"> Demandez à recevoir vos données personnelles</div>
           <div className="p9">Avant de vous fournir une copie de vos données, nous avons besoin que vous répondiez à quelques questions.</div>
           <div className="double-input">
           <div className="coolinput">
              <label htmlFor="input" className="text">
              Où habitez-vous ?
              </label>
              <input
                type="text"
                placeholder=" Write here..."
                name="input"
                className="input"
              />
            </div>
            </div>
              <div className="coolinput">
                <label htmlFor="input" className="text">
                Sous quel format voulez-vous vos données ?
                </label>
                
                <input
                  type="text"
                  placeholder=" Write here..."
                  name="input"
                  className="input"
                />
                
              </div>
              <div className="coolinput1">
              <label htmlFor="input" className="text">
              Pourquoi demandez-vous une copie de vos données ?
              </label>
              <div className="">
                    <select className="select">
                        <option value="Je veux savoir quelles sont les informations que RentaVilla posséde à mon sujet">Je veux savoir quelles sont les informations que RentaVilla posséde à mon sujet</option>
                        <option value="Je veux ouvrir u ticket auprés de l'assistance">Je veux ouvrir u ticket auprés de l'assistance</option>
                        <option value="Je veux déplacer mes données vers un autre service">Je veux déplacer mes données vers un autre service</option>
                        <option value="Je prévois de supprimer ou désactiver mon compte prochainement">Je prévois de supprimer ou désactiver mon compte prochainement </option>
                    </select>
                </div>
            <div className="action-btns">
              <button>Demander mes données</button>
            </div>
            </div>
           </Box>
         
</div>    
    )
}

export default InfoPers ;