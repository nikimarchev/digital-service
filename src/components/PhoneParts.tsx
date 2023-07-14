import "./styles.css";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MobileBattery from "./priceTables/MobileBattery.tsx";
import MobileDisplay from "./priceTables/MobileDisplay.tsx";
import ContactDialog from "./ContactDialog.tsx";
import NavBar from "./NavBar.tsx";

const PhoneParts = () => {
  const [expanded, setExpanded] = useState<string>("");

  return (
    <div className="detailsPage">
      <NavBar />
      <p className="infoHeader">ЧАСТИ ЗА IPHONE</p>
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
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
            <Typography variant="h6">БАТЕРИИ</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MobileBattery type="parts" />
          </AccordionDetails>
        </Accordion>

        <Accordion
          onChange={(e, expanded) => {
            if (expanded) {
              setExpanded("panel2");
            } else {
              setExpanded("");
            }
          }}
          expanded={expanded === "panel2"}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">ДИСПЛЕИ</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MobileDisplay type="parts" />
          </AccordionDetails>
        </Accordion>
        <ContactDialog buttonText="КОНТАКТ ЗА ПОРЪЧКИ" />
      </div>
    </div>
  );
};

export default PhoneParts;
