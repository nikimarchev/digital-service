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
import { customSortTwoPrices } from "../../utils";

interface GlassRepair {
  name: string;
  price: string;
  secondPrice: string;
}

interface Props {
  type: string;
  onPropChange: (value: boolean) => void;
  buttonClicked: boolean;
}

const MobileGlasses: React.FC<Props> = ({
  type,
  onPropChange,
  buttonClicked,
}) => {
  const isAdminLogged = useContext(AdminInfo);
  const [repairPrices, setRepairPrices] = useState<GlassRepair[]>([]);
  const [changedRow, setChangedRow] = useState<string | null>(null);
  const [indexChanged, setIndexChanged] = useState<number | null>(null);

  useEffect(() => {
    const glassRepairRef = ref(db, "glass-repair");
    onValue(glassRepairRef, (snapshot) => {
      const data = Object.entries<{ price: number; secondPrice: number }>(
        snapshot.val()
      ).map(([name, { price, secondPrice }]) => ({
        name,
        price: price.toString(),
        secondPrice: secondPrice.toString(),
      }));
      const newData = customSortTwoPrices(data);
      setRepairPrices(newData);
    });
  }, []);

  const handlePriceChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newPrices = [...repairPrices];
    newPrices[index].price = event.target.value;
    setRepairPrices(newPrices);
    setChangedRow("price");
    setIndexChanged(index);
    onPropChange(true);
  };

  const handleSecondPriceChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newPrices = [...repairPrices];
    newPrices[index].secondPrice = event.target.value;
    setRepairPrices(newPrices);
    setChangedRow("secondPrice");
    setIndexChanged(index);
    onPropChange(true);
  };

  const changeRequest = () => {
    if (indexChanged === null) return;
    switch (changedRow) {
      case "price":
        const newPrices = [...repairPrices];
        set(
          ref(db, `glass-repair/${newPrices[indexChanged].name}/price`),
          newPrices[indexChanged].price
        );
        break;
      case "secondPrice":
        const newSecondPrices = [...repairPrices];
        set(
          ref(
            db,
            `glass-repair/${newSecondPrices[indexChanged].name}/secondPrice`
          ),
          newSecondPrices[indexChanged].secondPrice
        );
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (buttonClicked) {
      changeRequest();
      onPropChange(false);
    }
  }, [buttonClicked]);

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
