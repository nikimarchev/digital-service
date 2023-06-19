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
  createData("iPhone 14 Pro Max", "N / A", "230лв"),
  createData("iPhone 14 Pro", "N / A", "210лв"),
  createData("iPhone 14 Plus", "N / A", "150лв"),
  createData("iPhone 14", "N / A", "160лв"),
  createData("iPhone 13 Pro Max", "300лв", "180лв"),
  createData("iPhone 13 Pro", "250лв", "170лв"),
  createData("iPhone 13", "250лв", "170лв"),
  createData("iPhone 13 mini", "200лв", "160лв"),
  createData("iPhone 12 Pro Max", "250лв", "150лв"),
  createData("iPhone 12 Pro", "200лв", "150лв"),
  createData("iPhone 12", "200лв", "150лв"),
  createData("iPhone 12 mini", "180лв", "150лв"),
  createData("iPhone 11 Pro Max", "180лв", "130лв"),
  createData("iPhone 11 Pro", "150лв", "130лв"),
  createData("iPhone 11", "100лв", "120лв"),
  createData("iPhone XR", "100лв", "120лв"),
  createData("iPhone XS Max", "150лв", "130лв"),
  createData("iPhone XS", "120лв", "120лв"),
  createData("iPhone X", "120лв", "120лв"),
  createData("iPhone SE 2020", "80лв", "80лв"),
  createData("iPhone 8 Plus", "90лв", "100лв"),
  createData("iPhone 8", "80лв", "90лв"),
  createData("iPhone 7 Plus", "90лв", "100лв /корпус/"),
  createData("iPhone 7", "80лв", "80лв /корпус/"),
  createData("iPhone 6S Plus", "65лв", "70лв /корпус/"),
  createData("iPhone 6S", "50лв", "70лв /корпус/"),
  createData("iPhone 6 Plus", "60лв", "70лв /корпус/"),
  createData("iPhone 6", "50лв", "70лв /корпус/"),
  createData("iPhone SE 1 gen", "40лв", "70лв /корпус/"),
  createData("iPhone 5S", "40лв", "70лв /корпус/"),
  createData("iPhone 5", "40лв", "70лв /корпус/"),
  createData("iPhone 4S", "40лв", "30лв"),
  createData("iPhone 4", "40лв", "30лв"),
];

const partPrices = [
  createData("iPhone 14 Pro Max", "N / A", "230лв"),
  createData("iPhone 14 Pro", "N / A", "210лв"),
  createData("iPhone 14 Plus", "N / A", "150лв"),
  createData("iPhone 14", "N / A", "160лв"),
  createData("iPhone 13 Pro Max", "300лв", "180лв"),
  createData("iPhone 13 Pro", "250лв", "170лв"),
  createData("iPhone 13", "250лв", "170лв"),
  createData("iPhone 13 mini", "200лв", "160лв"),
  createData("iPhone 12 Pro Max", "250лв", "150лв"),
  createData("iPhone 12 Pro", "200лв", "150лв"),
  createData("iPhone 12", "200лв", "150лв"),
  createData("iPhone 12 mini", "180лв", "150лв"),
  createData("iPhone 11 Pro Max", "180лв", "130лв"),
  createData("iPhone 11 Pro", "150лв", "130лв"),
  createData("iPhone 11", "100лв", "120лв"),
  createData("iPhone XR", "100лв", "120лв"),
  createData("iPhone XS Max", "150лв", "130лв"),
  createData("iPhone XS", "120лв", "120лв"),
  createData("iPhone X", "120лв", "120лв"),
  createData("iPhone SE 2020", "80лв", "80лв"),
  createData("iPhone 8 Plus", "90лв", "100лв"),
  createData("iPhone 8", "80лв", "90лв"),
  createData("iPhone 7 Plus", "90лв", "100лв /корпус/"),
  createData("iPhone 7", "80лв", "80лв /корпус/"),
  createData("iPhone 6S Plus", "65лв", "70лв /корпус/"),
  createData("iPhone 6S", "50лв", "70лв /корпус/"),
  createData("iPhone 6 Plus", "60лв", "70лв /корпус/"),
  createData("iPhone 6", "50лв", "70лв /корпус/"),
  createData("iPhone SE 1 gen", "40лв", "70лв /корпус/"),
  createData("iPhone 5S", "40лв", "70лв /корпус/"),
  createData("iPhone 5", "40лв", "70лв /корпус/"),
  createData("iPhone 4S", "40лв", "30лв"),
  createData("iPhone 4", "40лв", "30лв"),
];

const MobileGlasses = ({ type }) => {
  return (
    <div style={{ height: "300px", overflow: "auto" }}>
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

export default MobileGlasses;
