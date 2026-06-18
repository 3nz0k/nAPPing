import { useState } from "react";
import { Modal, Box } from "@mui/material";

import styles from "./modalAlarm.module.css";

function ModalAlarm({ onClose }) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    onClose?.();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className={styles.overlay}
    >
      <Box className={styles.modal}>
        <div className={styles.modalContent}>
            <img src="/sun.png" alt="Réveil"/>
            <div className={styles.modalText}>
            <h1>Sieste terminée !</h1>
                <p>Votre temps de repos est terminé.</p>
                <p>Bonne reprise</p>
            </div>
            <hr/>
            <button className={styles.button} onClick={handleClose}>
                <div className={styles.buttonContent}>
                    <img src="/checkbox-circle.svg" alt="checkbox" />
                    <p>Arrêter l'alarme</p>
                </div>
            </button>
        </div>
      </Box>
    </Modal>
  );
}

export default ModalAlarm;