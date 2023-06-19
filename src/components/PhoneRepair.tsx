import "./styles.css";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MobileBattery from "./priceTables/MobileBattery.tsx";
import MobileDisplay from "./priceTables/MobileDisplay.tsx";
import MobileGlasses from "./priceTables/MobileGlasses.tsx";
import ContactDialog from "./ContactDialog.tsx";
import NavBar from "./NavBar.tsx";

const PhoneRepair = () => {
  const [expanded, setExpanded] = useState<string>("");

  return (
    <div className="detailsPage">
      <NavBar />
      <p className="infoHeader">РЕМОНТ НА ТЕЛЕФОНИ</p>
      <div className="accordionDiv">
        <Accordion
          className="accordion"
          onChange={(e, expanded) => {
            if (expanded) {
              setExpanded("panel1");
            }
          }}
          expanded={expanded === "panel1"}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
            <Typography variant="h6">СМЯНА НА БАТЕРИИ</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MobileBattery type="repair" />
          </AccordionDetails>
        </Accordion>

        <Accordion
          onChange={(e, expanded) => {
            if (expanded) {
              setExpanded("panel2");
            }
          }}
          expanded={expanded === "panel2"}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">СМЯНА НА ДИСПЛЕИ</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MobileDisplay type="repair" />
          </AccordionDetails>
        </Accordion>

        <Accordion
          onChange={(e, expanded) => {
            if (expanded) {
              setExpanded("panel3");
            }
          }}
          expanded={expanded === "panel3"}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography variant="h6">СМЯНА НА ПРЕДНИ И ЗАДНИ СТЪКЛА</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MobileGlasses type="repair" />
          </AccordionDetails>
        </Accordion>
        <ContactDialog buttonText="КОНТАКТ ЗА ЗАПАЗВАНЕ НА ЧАС" />
      </div>
    </div>
  );
};

export default PhoneRepair;
