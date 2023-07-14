import * as React from "react";
import "../styles.css";
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
  createData("iPhone 13 Pro Max", "160"),
  createData("iPhone 13 Pro", "130"),
  createData("iPhone 13", "110"),
  createData("iPhone 13 mini", "110"),
  createData("iPhone 12 Pro Max", "110"),
  createData("iPhone 12 Pro", "110"),
  createData("iPhone 12", "110"),
  createData("iPhone 12 mini", "90"),
  createData("iPhone 11 Pro Max", "100"),
  createData("iPhone 11 Pro", "90"),
  createData("iPhone 11", "80"),
  createData("iPhone XR", "80"),
  createData("iPhone XS Max", "80"),
  createData("iPhone XS", "80"),
  createData("iPhone X", "70"),
  createData("iPhone SE 2020", "60"),
  createData("iPhone 8 Plus", "60"),
  createData("iPhone 8", "60"),
  createData("iPhone 7 Plus", "50"),
  createData("iPhone 7", "40"),
  createData("iPhone 6S Plus", "50"),
  createData("iPhone 6S", "40"),
  createData("iPhone 6 Plus", "40"),
  createData("iPhone 6", "40"),
  createData("iPhone SE 1 gen", "40"),
  createData("iPhone 5S", "30"),
  createData("iPhone 5", "30"),
  createData("iPhone 4S", "30"),
  createData("iPhone 4", "30"),
];

const partPrices = [
  createData("iPhone 14 Pro Max", "N / A"),
  createData("iPhone 14 Pro", "100"),
  createData("iPhone 14", "N / A"),
  createData("iPhone 14 plus", "N / A"),
  createData("iPhone 13 Pro Max", "100"),
  createData("iPhone 13 Pro", "100"),
  createData("iPhone 13", "70"),
  createData("iPhone 13 mini", "N / A"),
  createData("iPhone 12 Pro Max", "80"),
  createData("iPhone 12 Pro", "70"),
  createData("iPhone 12", "70"),
  createData("iPhone 12 mini", "60"),
  createData("iPhone 11 Pro Max", "80"),
  createData("iPhone 11 Pro", "70"),
  createData("iPhone 11", "60"),
  createData("iPhone XR", "60"),
  createData("iPhone XS Max", "60"),
  createData("iPhone XS", "60"),
  createData("iPhone X", "60"),
  createData("iPhone SE 2020", "40"),
  createData("iPhone 8 Plus", "30"),
  createData("iPhone 8", "30"),
  createData("iPhone 7 Plus", "30"),
  createData("iPhone 7", "30"),
  createData("iPhone 6S Plus", "30"),
  createData("iPhone 6S", "30"),
  createData("iPhone 6 Plus", "30"),
  createData("iPhone 6", "30"),
  createData("iPhone SE 1 gen", "30"),
  createData("iPhone 5S", "30"),
  createData("iPhone 5C", "30"),
  createData("iPhone 5", "30"),
];

const MobileBattery = ({ type }) => {
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
              ? repairPrices.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">
                      {row.price} {row.price === "N / A" ? null : "лв"}
                    </TableCell>
                  </TableRow>
                ))
              : partPrices.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">
                      {row.price} {row.price === "N / A" ? null : "лв"}
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
