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
import { Button } from "@mui/material";

const PhoneRepair = () => {
  const [expanded, setExpanded] = useState<string>("");
  const [showBatteryButton, setShowBatteryButton] = useState<boolean>(false);
  const [showDisplayButton, setShowDisplayButton] = useState<boolean>(false);
  const [showGlassButton, setShowGlassButton] = useState<boolean>(false);
  const [batteryButtonClicked, setBatteryButtonClicked] =
    useState<boolean>(false);
  const [displayButtonClicked, setDisplayButtonClicked] =
    useState<boolean>(false);
  const [glassButtonClicked, setGlassButtonClicked] = useState<boolean>(false);

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
            } else {
              setExpanded("");
            }
          }}
          expanded={expanded === "panel1"}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
            <Typography variant="h6" sx={{ textAlign: "left" }}>
              СМЯНА НА БАТЕРИИ
            </Typography>
            <div style={{ flexGrow: 1 }} />
            {showBatteryButton && (
              <Button
                variant="outlined"
                onClick={() => setBatteryButtonClicked(true)}
              >
                Запази
              </Button>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <MobileBattery
              type="repair"
              onPropChange={(propValue) => setShowBatteryButton(propValue)}
              buttonClicked={batteryButtonClicked}
            />
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
            <Typography variant="h6" sx={{ textAlign: "left" }}>
              СМЯНА НА ДИСПЛЕИ
            </Typography>
            <div style={{ flexGrow: 1 }} />
            {showDisplayButton && (
              <Button
                variant="outlined"
                onClick={() => setDisplayButtonClicked(true)}
              >
                Запази
              </Button>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <MobileDisplay
              type="repair"
              onPropChange={(propValue) => setShowDisplayButton(propValue)}
              buttonClicked={displayButtonClicked}
            />
          </AccordionDetails>
        </Accordion>

        <Accordion
          onChange={(e, expanded) => {
            if (expanded) {
              setExpanded("panel3");
            } else {
              setExpanded("");
            }
          }}
          expanded={expanded === "panel3"}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography variant="h6" sx={{ textAlign: "left" }}>
              СМЯНА НА ПРЕДНИ И ЗАДНИ СТЪКЛА
            </Typography>
            <div style={{ flexGrow: 1 }} />
            {showGlassButton && (
              <Button
                variant="outlined"
                onClick={() => setGlassButtonClicked(true)}
              >
                Запази
              </Button>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <MobileGlasses
              type="repair"
              onPropChange={(propValue) => setShowGlassButton(propValue)}
              buttonClicked={glassButtonClicked}
            />
          </AccordionDetails>
        </Accordion>
        <ContactDialog buttonText="КОНТАКТ ЗА ЗАПАЗВАНЕ НА ЧАС" />
      </div>
    </div>
  );
};

export default PhoneRepair;
