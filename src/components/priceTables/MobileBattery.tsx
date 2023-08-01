import React, { useContext, useEffect, useState } from "react";
import "../styles.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AdminInfo } from "../../App";
import { onValue, ref, set } from "firebase/database";
import { db } from "../../firebase";

const MobileBattery = ({ type }) => {
  const isAdminLogged = useContext(AdminInfo);
  const [repairPrices, setRepairPrices] = useState<any>([]);
  const [partPrices, setPartPrices] = useState<any>([]);

  useEffect(() => {
    const batteryRepairRef = ref(db, "battery-repair");
    onValue(batteryRepairRef, (snapshot) => {
      let data = Object.entries(snapshot.val()).map(([name, { price }]) => ({
        name,
        price: price.toString(),
      }));
      data = data.sort((a, b) => b.name.localeCompare(a.name));
      setRepairPrices(data);
    });
    const batteryPartRef = ref(db, "battery-part");
    onValue(batteryPartRef, (snapshot) => {
      let data = Object.entries(snapshot.val()).map(([name, { price }]) => ({
        name,
        price: price.toString(),
      }));
      data = data.sort((a, b) => b.name.localeCompare(a.name));
      setPartPrices(data);
    });
  }, []);

  const handleRepairPriceChange = (event, index) => {
    const newPrices = [...repairPrices];
    newPrices[index].price = event.target.value;
    setRepairPrices(newPrices);
    set(
      ref(db, `battery-repair/${newPrices[index].name}/price`),
      event.target.value
    );
  };

  const handlePartPriceChange = (event, index) => {
    const newPrices = [...partPrices];
    newPrices[index].price = event.target.value;
    setPartPrices(newPrices);
    set(
      ref(db, `battery-part/${newPrices[index].name}/price`),
      event.target.value
    );
  };

  return (
    <div className="accordionBody">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>МОДЕЛ</TableCell>
              <TableCell align="center">ЦЕНА</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {type === "repair"
              ? repairPrices.map((row, index) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">
                      {isAdminLogged ? (
                        <input
                          value={row.price}
                          onChange={(event) =>
                            handleRepairPriceChange(event, index)
                          }
                          style={{ width: "50px" }}
                        />
                      ) : (
                        row.price
                      )}{" "}
                      {row.price === "N / A" ? null : "лв"}
                    </TableCell>
                  </TableRow>
                ))
              : partPrices.map((row, index) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">
                      {isAdminLogged ? (
                        <input
                          value={row.price}
                          onChange={(event) =>
                            handlePartPriceChange(event, index)
                          }
                          style={{ width: "50px" }}
                        />
                      ) : (
                        row.price
                      )}{" "}
                      {row.price === "N / A" ? null : "лв"}
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MobileBattery;
