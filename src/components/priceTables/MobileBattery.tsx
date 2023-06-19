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
