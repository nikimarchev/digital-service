import "./styles.css";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ContactDialog from "./ContactDialog.tsx";
import NavBar from "./NavBar.tsx";

const styles = {
  detailsText: {
    justifyContent: "flex-start",
    display: "flex",
    fontSize: "20px",
    marginBottom: "10px",
    marginLeft: "20px",
  },
  detailsTextSpecial: {
    justifyContent: "flex-start",
    display: "flex",
    fontSize: "20px",
    marginBottom: "10px",
    marginLeft: "20px",
    marginTop: "30px",
  },
};

const SoftwareRepair = () => {
  return (
    <div className="detailsPage">
      <NavBar />
      <p className="infoHeader">СОФТУЕР И ОТКЛЮЧВАНЕ</p>
      <div className="accordionDiv">
        <Accordion className="accordion" expanded={true}>
          <AccordionSummary>
            <Typography variant="h6">СОФТУЕРНИ НАМЕСИ</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={styles.detailsText}>Премахване на:</Typography>
            <Typography style={styles.detailsText}>- Google FRP</Typography>
            <Typography style={styles.detailsText}>- iCloud</Typography>
            <Typography style={styles.detailsText}>
              - Samsung Account
            </Typography>
            <Typography style={styles.detailsText}>- Huawei ID</Typography>
            <ContactDialog buttonText="КОНТАКТ ЗА ЦЕНИ И ЧАС" />
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion" expanded={true}>
          <AccordionDetails>
            <Typography style={styles.detailsTextSpecial}>
              - Инсталиране на Windows
            </Typography>
            <Typography style={styles.detailsText}>
              - Преинсталиране на Windows, Mac OS
            </Typography>
            <Typography style={styles.detailsText}>
              - Възстановяване на данни
            </Typography>
            <ContactDialog buttonText="КОНТАКТ ЗА ЦЕНИ И ЧАС" />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default SoftwareRepair;
