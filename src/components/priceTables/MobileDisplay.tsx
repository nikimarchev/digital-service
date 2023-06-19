import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name: string, price: string, secondPrice: string) {
  return { name, price, secondPrice };
}

const repairPrices = [
  createData("iPhone 14 Pro Max", "N / A", "N / A"),
  createData("iPhone 14 Pro", "N / A", "N / A"),
  createData("iPhone 14 Plus", "N / A", "N / A"),
  createData("iPhone 14", "N / A", "N / A"),
  createData("iPhone 13 Pro Max", "N / A", "700лв"),
  createData("iPhone 13 Pro", "N / A", "650лв"),
  createData("iPhone 13", "300 - 350лв", "500лв"),
  createData("iPhone 13 mini", "300лв", "450лв"),
  createData("iPhone 12 Pro Max", "300лв", "500лв"),
  createData("iPhone 12 Pro", "220лв", "350лв"),
  createData("iPhone 12", "220лв", "350лв"),
  createData("iPhone 12 mini", "250лв", "N / A"),
  createData("iPhone 11 Pro Max", "200лв", "320лв"),
  createData("iPhone 11 Pro", "170лв", "270лв"),
  createData("iPhone 11", "120лв", "170лв"),
  createData("iPhone XR", "120лв", "170лв"),
  createData("iPhone XS Max", "170лв", "250лв"),
  createData("iPhone XS", "130лв", "200лв"),
  createData("iPhone X", "130лв", "200лв"),
  createData("iPhone SE 2020", "80лв", "100лв"),
  createData("iPhone 8 Plus", "80лв", "120лв"),
  createData("iPhone 8", "80лв", "100лв"),
  createData("iPhone 7 Plus", "80лв", "120лв"),
  createData("iPhone 7", "80лв", "100лв"),
  createData("iPhone 6S Plus", "80лв", "100лв"),
  createData("iPhone 6S", "70лв", "80лв"),
  createData("iPhone 6 Plus", "80лв", "100лв"),
  createData("iPhone 6", "70лв", "80лв"),
  createData("iPhone SE 1 gen", "60лв", "N / A"),
  createData("iPhone 5S", "60лв", "60лв"),
  createData("iPhone 5", "60лв", "60лв"),
  createData("iPhone 4S", "50лв", "50лв"),
  createData("iPhone 4", "50лв", "50лв"),
];

const partPrices = [
  createData("iPhone 14 Pro Max", "N / A", "N / A"),
  createData("iPhone 14 Pro", "N / A", "N / A"),
  createData("iPhone 14 Plus", "N / A", "N / A"),
  createData("iPhone 14", "N / A", "N / A"),
  createData("iPhone 13 Pro Max", "N / A", "700лв"),
  createData("iPhone 13 Pro", "N / A", "650лв"),
  createData("iPhone 13", "300 - 350лв", "500лв"),
  createData("iPhone 13 mini", "300лв", "450лв"),
  createData("iPhone 12 Pro Max", "300лв", "500лв"),
  createData("iPhone 12 Pro", "220лв", "350лв"),
  createData("iPhone 12", "220лв", "350лв"),
  createData("iPhone 12 mini", "250лв", "N / A"),
  createData("iPhone 11 Pro Max", "200лв", "320лв"),
  createData("iPhone 11 Pro", "170лв", "270лв"),
  createData("iPhone 11", "120лв", "170лв"),
  createData("iPhone XR", "120лв", "170лв"),
  createData("iPhone XS Max", "170лв", "250лв"),
  createData("iPhone XS", "130лв", "200лв"),
  createData("iPhone X", "130лв", "200лв"),
  createData("iPhone SE 2020", "80лв", "100лв"),
  createData("iPhone 8 Plus", "80лв", "120лв"),
  createData("iPhone 8", "80лв", "100лв"),
  createData("iPhone 7 Plus", "80лв", "120лв"),
  createData("iPhone 7", "80лв", "100лв"),
  createData("iPhone 6S Plus", "80лв", "100лв"),
  createData("iPhone 6S", "70лв", "80лв"),
  createData("iPhone 6 Plus", "80лв", "100лв"),
  createData("iPhone 6", "70лв", "80лв"),
  createData("iPhone SE 1 gen", "60лв", "N / A"),
  createData("iPhone 5S", "60лв", "60лв"),
  createData("iPhone 5", "60лв", "60лв"),
  createData("iPhone 4S", "50лв", "50лв"),
  createData("iPhone 4", "50лв", "50лв"),
];

const MobileDisplay = ({ type }) => {
  return (
    <div style={{ height: "300px", overflow: "auto" }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>МОДЕЛ</TableCell>
              <TableCell align="center">ЦЕНА СЪВМЕСТИМ</TableCell>
              <TableCell align="center">ЦЕНА ОРИГИНАЛЕН</TableCell>
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
                    <TableCell align="center">{row.secondPrice}</TableCell>
                  </TableRow>
                ))
              : partPrices.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.price}</TableCell>
                    <TableCell align="center">{row.secondPrice}</TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MobileDisplay;
