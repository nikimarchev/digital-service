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
  createData("iPhone 14 Pro Max", "N / A", "230"),
  createData("iPhone 14 Pro", "N / A", "210"),
  createData("iPhone 14 Plus", "N / A", "150"),
  createData("iPhone 14", "N / A", "160"),
  createData("iPhone 13 Pro Max", "300", "180"),
  createData("iPhone 13 Pro", "250", "170"),
  createData("iPhone 13", "250", "170"),
  createData("iPhone 13 mini", "200", "160"),
  createData("iPhone 12 Pro Max", "250", "150"),
  createData("iPhone 12 Pro", "200", "150"),
  createData("iPhone 12", "200", "150"),
  createData("iPhone 12 mini", "180", "150"),
  createData("iPhone 11 Pro Max", "180", "130"),
  createData("iPhone 11 Pro", "150", "130"),
  createData("iPhone 11", "100", "120"),
  createData("iPhone XR", "100", "120"),
  createData("iPhone XS Max", "150", "130"),
  createData("iPhone XS", "120", "120"),
  createData("iPhone X", "120", "120"),
  createData("iPhone SE 2020", "80", "80"),
  createData("iPhone 8 Plus", "90", "100"),
  createData("iPhone 8", "80", "90"),
  createData("iPhone 7 Plus", "90", "/корпус/ 100"),
  createData("iPhone 7", "80", "/корпус/ 80"),
  createData("iPhone 6S Plus", "65", "/корпус/ 70"),
  createData("iPhone 6S", "50", "/корпус/ 70"),
  createData("iPhone 6 Plus", "60", "/корпус/ 70"),
  createData("iPhone 6", "50", "/корпус/ 70"),
  createData("iPhone SE 1 gen", "40", "/корпус/ 70"),
  createData("iPhone 5S", "40", "/корпус/ 70"),
  createData("iPhone 5", "40", "/корпус/ 70"),
  createData("iPhone 4S", "40", "30"),
  createData("iPhone 4", "40", "30"),
];

const partPrices = [
  createData("iPhone 14 Pro Max", "N / A", "230"),
  createData("iPhone 14 Pro", "N / A", "210"),
  createData("iPhone 14 Plus", "N / A", "150"),
  createData("iPhone 14", "N / A", "160"),
  createData("iPhone 13 Pro Max", "300", "180"),
  createData("iPhone 13 Pro", "250", "170"),
  createData("iPhone 13", "250", "170"),
  createData("iPhone 13 mini", "200", "160"),
  createData("iPhone 12 Pro Max", "250", "150"),
  createData("iPhone 12 Pro", "200", "150"),
  createData("iPhone 12", "200", "150"),
  createData("iPhone 12 mini", "180", "150"),
  createData("iPhone 11 Pro Max", "180", "130"),
  createData("iPhone 11 Pro", "150", "130"),
  createData("iPhone 11", "100", "120"),
  createData("iPhone XR", "100", "120"),
  createData("iPhone XS Max", "150", "130"),
  createData("iPhone XS", "120", "120"),
  createData("iPhone X", "120", "120"),
  createData("iPhone SE 2020", "80", "80"),
  createData("iPhone 8 Plus", "90", "100"),
  createData("iPhone 8", "80", "90"),
  createData("iPhone 7 Plus", "90", "/корпус/ 100"),
  createData("iPhone 7", "80", "/корпус/ 80"),
  createData("iPhone 6S Plus", "65", "/корпус/ 70"),
  createData("iPhone 6S", "50", "/корпус/ 70"),
  createData("iPhone 6 Plus", "60", "/корпус/ 70"),
  createData("iPhone 6", "50", "/корпус/ 70"),
  createData("iPhone SE 1 gen", "40", "/корпус/ 70"),
  createData("iPhone 5S", "40", "/корпус/ 70"),
  createData("iPhone 5", "40", "/корпус/ 70"),
  createData("iPhone 4S", "40", "30"),
  createData("iPhone 4", "40", "30"),
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
                    <TableCell align="center">
                      {row.price} {row.price === "N / A" ? null : "лв"}
                    </TableCell>
                    <TableCell align="center">
                      {row.secondPrice}{" "}
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
                      {row.price} {row.price === "N / A" ? null : "лв"}
                    </TableCell>
                    <TableCell align="center">
                      {row.secondPrice}{" "}
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
