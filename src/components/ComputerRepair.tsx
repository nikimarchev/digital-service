import "./styles.css";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
};

const ComputerRepair = () => {
  const [expanded, setExpanded] = useState<string>("");

  return (
    <div className="detailsPage">
      <NavBar />
      <p className="infoHeader">РЕМОНТ НА КОМПЮТРИ И ЛАПТОПИ</p>
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
              РЕМОНТ НА ЛАПТОПИ
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={styles.detailsText}>- Дисплей</Typography>
            <Typography style={styles.detailsText}>- Клавиатура</Typography>
            <Typography style={styles.detailsText}>- Батерия</Typography>
            <Typography style={styles.detailsText}>
              - HDD, SSD и РАМ памет
            </Typography>
            <Typography style={styles.detailsText}>
              - Ремонт на намокрен лаптоп
            </Typography>
            <Typography style={styles.detailsText}>- Пробеми с WIFI</Typography>
            <Typography style={styles.detailsText}>- Други</Typography>
            <ContactDialog buttonText="КОНТАКТ ЗА ЦЕНИ И ЧАС" />
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
              СМЯНА НА КОМПОНЕНТИ НА КОМПЮТЪР
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={styles.detailsText}>- Дънна платка</Typography>
            <Typography style={styles.detailsText}>- Видео карата</Typography>
            <Typography style={styles.detailsText}>- Процесор</Typography>
            <Typography style={styles.detailsText}>- Рам памет</Typography>
            <Typography style={styles.detailsText}>- SSD и HDD</Typography>
            <Typography style={styles.detailsText}>
              - Захранване и други
            </Typography>
            <ContactDialog buttonText="КОНТАКТ ЗА ЦЕНИ И ЧАС" />
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
              РЕМОНТ НА КОМПОНЕНТИ
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={styles.detailsText}>
              - Ремонт на дънна платка
            </Typography>
            <Typography style={styles.detailsText}>- Други</Typography>
            <ContactDialog buttonText="КОНТАКТ ЗА ЦЕНИ И ЧАС" />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default ComputerRepair;
