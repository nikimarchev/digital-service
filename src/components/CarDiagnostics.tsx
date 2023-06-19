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

const CarDiagnostics = () => {
  return (
    <div className="detailsPage">
      <NavBar />
      <p className="infoHeader">ДИАГНОСТИКА И СОФТУЕРНА НАМЕСА НА АВТОМОБИЛИ</p>
      <div className="accordionDiv">
        <Accordion className="accordion" expanded={true}>
          <AccordionSummary>
            <Typography variant="h6">СОФТУЕРНИ НАМЕСИ</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={styles.detailsText}>
              - Диагностика на автомибили
            </Typography>
            <Typography style={styles.detailsText}>
              - Софтуерно изключване на грешки
            </Typography>
            <Typography style={styles.detailsText}>
              - Софтуерно изключване на DPF/EGR/FAP филтри
            </Typography>
            <Typography style={styles.detailsText}>
              - Софтуерно изключване на AdBlue системи
            </Typography>
            <Typography style={styles.detailsText}>
              - Включване на екстри
            </Typography>
            <Typography style={styles.detailsTextSpecial}>
              Цени спрямо марка и модел.
            </Typography>
            <ContactDialog buttonText="КОНТАКТ ЗА ЦЕНИ И ЧАС" />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default CarDiagnostics;
