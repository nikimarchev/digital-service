import "./styles.css";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MobileBattery from "./priceTables/MobileBattery";
import MobileDisplay from "./priceTables/MobileDisplay";
import ContactDialog from "./ContactDialog";
import NavBar from "./NavBar";
import { Button } from "@mui/material";

const PhoneParts = () => {
  const [expanded, setExpanded] = useState<string>("");
  const [showBatteryButton, setShowBatteryButton] = useState<boolean>(false);
  const [showDisplayButton, setShowDisplayButton] = useState<boolean>(false);
  const [batteryButtonClicked, setBatteryButtonClicked] =
    useState<boolean>(false);
  const [displayButtonClicked, setDisplayButtonClicked] =
    useState<boolean>(false);

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
              type="part"
              onPropChange={(propValue: boolean) =>
                setShowBatteryButton(propValue)
              }
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
            <Typography variant="h6">ДИСПЛЕИ</Typography>
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
              type="part"
              onPropChange={(propValue: boolean) =>
                setShowDisplayButton(propValue)
              }
              buttonClicked={displayButtonClicked}
            />
          </AccordionDetails>
        </Accordion>
        <ContactDialog buttonText="КОНТАКТ ЗА ПОРЪЧКИ" />
      </div>
    </div>
  );
};

export default PhoneParts;
