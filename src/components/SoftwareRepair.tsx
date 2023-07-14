import "./styles.css";
import React, { useState } from "react";
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
  const [expanded, setExpanded] = useState<string>("panel1");

  return (
    <div className="detailsPage">
      <NavBar />
      <p className="infoHeader">СОФТУЕР И ОТКЛЮЧВАНЕ</p>
      <div className="accordionDiv">
        <Accordion
          className="accordion"
          onChange={(e, expanded) => {
            if (expanded) {
              setExpanded("panel1");
            } else {
              setExpanded("");
            }
          }}
          expanded={expanded === "panel1"}
        >
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
        <Accordion
          className="accordion"
          onChange={(e, expanded) => {
            if (expanded) {
              setExpanded("panel2");
            } else {
              setExpanded("");
            }
          }}
          expanded={expanded === "panel2"}
        >
          <AccordionSummary>
            <Typography variant="h6">ДРУГИ УСЛУГИ</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={styles.detailsTextSpecial}
              sx={{ textAlign: "left" }}
            >
              - Инсталиране на Windows
            </Typography>
            <Typography style={styles.detailsText} sx={{ textAlign: "left" }}>
              - Преинсталиране на Windows, Mac OS
            </Typography>
            <Typography style={styles.detailsText} sx={{ textAlign: "left" }}>
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
