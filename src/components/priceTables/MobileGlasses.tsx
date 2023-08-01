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

const MobileGlasses = ({ type }) => {
  const isAdminLogged = useContext(AdminInfo);
  const [repairPrices, setRepairPrices] = useState<any>([]);

  useEffect(() => {
    const glassRepairRef = ref(db, "glass-repair");
    onValue(glassRepairRef, (snapshot) => {
      let data = Object.entries(snapshot.val()).map(
        ([name, { price, secondPrice }]) => ({
          name,
          price: price.toString(),
          secondPrice: secondPrice.toString(),
        })
      );
      data = data.sort((a, b) => b.name.localeCompare(a.name));
      setRepairPrices(data);
    });
  }, []);

  const handlePriceChange = (event, index) => {
    const newPrices = [...repairPrices];
    newPrices[index].price = event.target.value;
    setRepairPrices(newPrices);
    set(
      ref(db, `glass-repair/${newPrices[index].name}/price`),
      event.target.value
    );
  };

  const handleSecondPriceChange = (event, index) => {
    const newPrices = [...repairPrices];
    newPrices[index].secondPrice = event.target.value;
    setRepairPrices(newPrices);
    set(
      ref(db, `glass-repair/${newPrices[index].name}/secondPrice`),
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
              <TableCell align="center">ЦЕНА ПРЕДНО СТЪКЛО</TableCell>
              <TableCell align="center">ЦЕНА ЗАДНО СТЪКЛО</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {type === "repair" &&
              repairPrices.map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">
                    {isAdminLogged ? (
                      <input
                        value={row.price}
                        onChange={(event) => handlePriceChange(event, index)}
                        style={{ width: "50px" }}
                      />
                    ) : (
                      row.price
                    )}{" "}
                    {row.price === "N / A" ? null : "лв"}
                  </TableCell>
                  <TableCell align="center">
                    {isAdminLogged ? (
                      <input
                        value={row.secondPrice}
                        onChange={(event) =>
                          handleSecondPriceChange(event, index)
                        }
                        style={{ width: "50px" }}
                      />
                    ) : (
                      row.secondPrice
                    )}{" "}
                    {row.secondPrice === "N / A" ? null : "лв"}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MobileGlasses;
