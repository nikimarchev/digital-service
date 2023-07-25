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
import { onValue, ref } from "firebase/database";
import { db } from "../../firebase";

const MobileDisplay = ({ type }) => {
  const isAdminLogged = useContext(AdminInfo);
  const [repairPrices, setRepairPrices] = useState<any>([]);
  const [partPrices, setPartPrices] = useState<any>([]);

  useEffect(() => {
    const displayRepairRef = ref(db, "display-repair");
    onValue(displayRepairRef, (snapshot) => {
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
    const displayPartRef = ref(db, "display-repair");
    onValue(displayPartRef, (snapshot) => {
      let data = Object.entries(snapshot.val()).map(([name, { price }]) => ({
        name,
        price: price.toString(),
      }));
      data = data.sort((a, b) => b.name.localeCompare(a.name));
      setPartPrices(data);
    });
  }, []);

  return (
    <div className="accordionBody">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>МОДЕЛ</TableCell>
              <TableCell align="center">ЦЕНА СЪВМЕСТИМ</TableCell>
              {type === "repair" && (
                <TableCell align="center">ЦЕНА ОРИГИНАЛЕН</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {type === "repair"
              ? repairPrices.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">
                      {isAdminLogged ? (
                        <input
                          defaultValue={row.price}
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
                          defaultValue={row.secondPrice}
                          style={{ width: "50px" }}
                        />
                      ) : (
                        row.secondPrice
                      )}{" "}
                      {row.secondPrice === "N / A" ? null : "лв"}
                    </TableCell>
                  </TableRow>
                ))
              : partPrices.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">
                      {isAdminLogged ? (
                        <input
                          defaultValue={row.price}
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

export default MobileDisplay;
