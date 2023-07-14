import * as React from "react";
import "../styles.css";
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
  createData("iPhone 13 Pro Max", "N / A", "700"),
  createData("iPhone 13 Pro", "N / A", "650"),
  createData("iPhone 13", "300 - 350", "500"),
  createData("iPhone 13 mini", "300", "450"),
  createData("iPhone 12 Pro Max", "300", "500"),
  createData("iPhone 12 Pro", "220", "350"),
  createData("iPhone 12", "220", "350"),
  createData("iPhone 12 mini", "250", "N / A"),
  createData("iPhone 11 Pro Max", "200", "320"),
  createData("iPhone 11 Pro", "170", "270"),
  createData("iPhone 11", "120", "170"),
  createData("iPhone XR", "120", "170"),
  createData("iPhone XS Max", "170", "250"),
  createData("iPhone XS", "130", "200"),
  createData("iPhone X", "130", "200"),
  createData("iPhone SE 2020", "80", "100"),
  createData("iPhone 8 Plus", "80", "120"),
  createData("iPhone 8", "80", "100"),
  createData("iPhone 7 Plus", "80", "120"),
  createData("iPhone 7", "80", "100"),
  createData("iPhone 6S Plus", "80", "100"),
  createData("iPhone 6S", "70", "80"),
  createData("iPhone 6 Plus", "80", "100"),
  createData("iPhone 6", "70", "80"),
  createData("iPhone SE 1 gen", "60", "N / A"),
  createData("iPhone 5S", "60", "60"),
  createData("iPhone 5", "60", "60"),
  createData("iPhone 4S", "50", "50"),
  createData("iPhone 4", "50", "50"),
];

const partPrices = [
  createData("iPhone 14 Pro Max", "N / A", "N / A"),
  createData("iPhone 14 Pro", "N / A", "N / A"),
  createData("iPhone 14 Plus", "N / A", "N / A"),
  createData("iPhone 14", "N / A", "N / A"),
  createData("iPhone 13 Pro Max", "N / A", "N / A"),
  createData("iPhone 13 Pro", "N / A", "N / A"),
  createData("iPhone 13", "220", "N / A"),
  createData("iPhone 13 mini", "N / A", "N / A"),
  createData("iPhone 12 Pro Max", "200", "N / A"),
  createData("iPhone 12 Pro", "200", "N / A"),
  createData("iPhone 12", "200", "N / A"),
  createData("iPhone 12 mini", "190", "N / A"),
  createData("iPhone 11 Pro Max", "160", "N / A"),
  createData("iPhone 11 Pro", "140", "N / A"),
  createData("iPhone 11", "100", "N / A"),
  createData("iPhone XR", "100", "N / A"),
  createData("iPhone XS Max", "150", "N / A"),
  createData("iPhone XS", "100", "N / A"),
  createData("iPhone X", "100", "N / A"),
  createData("iPhone SE 2020", "55", "N / A"),
  createData("iPhone 8 Plus", "60", "N / A"),
  createData("iPhone 8", "55", "N / A"),
  createData("iPhone 7 Plus", "60", "N / A"),
  createData("iPhone 7", "55", "N / A"),
  createData("iPhone 6S Plus", "55", "N / A"),
  createData("iPhone 6S", "50", "N / A"),
  createData("iPhone 6 Plus", "50", "N / A"),
  createData("iPhone 6", "50", "N / A"),
  createData("iPhone SE 1 gen", "50", "N / A"),
  createData("iPhone 5S", "45", "N / A"),
  createData("iPhone 5", "45", "N / A"),
  createData("iPhone 4S", "40", "N / A"),
  createData("iPhone 4", "40", "N / A"),
];

const MobileDisplay = ({ type }) => {
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
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MobileDisplay;
