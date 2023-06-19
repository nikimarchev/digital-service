import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name: string, price: string) {
  return { name, price };
}

const repairPrices = [
  createData("iPhone 13 Pro Max", "160лв"),
  createData("iPhone 13 Pro", "130лв"),
  createData("iPhone 13", "110лв"),
  createData("iPhone 13 mini", "110лв"),
  createData("iPhone 12 Pro Max", "110лв"),
  createData("iPhone 12 Pro", "110лв"),
  createData("iPhone 12", "110лв"),
  createData("iPhone 12 mini", "90лв"),
  createData("iPhone 11 Pro Max", "100лв"),
  createData("iPhone 11 Pro", "90лв"),
  createData("iPhone 11", "80лв"),
  createData("iPhone XR", "80лв"),
  createData("iPhone XS Max", "80лв"),
  createData("iPhone XS", "80лв"),
  createData("iPhone X", "70лв"),
  createData("iPhone SE 2020", "60лв"),
  createData("iPhone 8 Plus", "60лв"),
  createData("iPhone 8", "60лв"),
  createData("iPhone 7 Plus", "50лв"),
  createData("iPhone 7", "40лв"),
  createData("iPhone 6S Plus", "50лв"),
  createData("iPhone 6S", "40лв"),
  createData("iPhone 6 Plus", "40лв"),
  createData("iPhone 6", "40лв"),
  createData("iPhone SE 1 gen", "40лв"),
  createData("iPhone 5S", "30лв"),
  createData("iPhone 5", "30лв"),
  createData("iPhone 4S", "30лв"),
  createData("iPhone 4", "30лв"),
];

const partPrices = [
  createData("iPhone 13 Pro Max", "160лв"),
  createData("iPhone 13 Pro", "130лв"),
  createData("iPhone 13", "110лв"),
  createData("iPhone 13 mini", "110лв"),
  createData("iPhone 12 Pro Max", "110лв"),
  createData("iPhone 12 Pro", "110лв"),
  createData("iPhone 12", "110лв"),
  createData("iPhone 12 mini", "90лв"),
  createData("iPhone 11 Pro Max", "100лв"),
  createData("iPhone 11 Pro", "90лв"),
  createData("iPhone 11", "80лв"),
  createData("iPhone XR", "80лв"),
  createData("iPhone XS Max", "80лв"),
  createData("iPhone XS", "80лв"),
  createData("iPhone X", "70лв"),
  createData("iPhone SE 2020", "60лв"),
  createData("iPhone 8 Plus", "60лв"),
  createData("iPhone 8", "60лв"),
  createData("iPhone 7 Plus", "50лв"),
  createData("iPhone 7", "40лв"),
  createData("iPhone 6S Plus", "50лв"),
  createData("iPhone 6S", "40лв"),
  createData("iPhone 6 Plus", "40лв"),
  createData("iPhone 6", "40лв"),
  createData("iPhone SE 1 gen", "40лв"),
  createData("iPhone 5S", "30лв"),
  createData("iPhone 5", "30лв"),
  createData("iPhone 4S", "30лв"),
  createData("iPhone 4", "30лв"),
];

const MobileBattery = ({ type }) => {
  return (
    <div style={{ height: "300px", overflow: "auto" }}>
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
              ? repairPrices.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.price}</TableCell>
                  </TableRow>
                ))
              : partPrices.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.price}</TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MobileBattery;
