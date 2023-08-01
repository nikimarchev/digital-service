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
import { customSort } from "../../utils";

interface MobileBatteryProps {
  type: "repair" | "part";
  onPropChange: (value: boolean) => void;
  buttonClicked: boolean;
}

interface PriceData {
  name: string;
  price: string;
}

const MobileBattery: React.FC<MobileBatteryProps> = ({
  type,
  onPropChange,
  buttonClicked,
}) => {
  const isAdminLogged = useContext(AdminInfo);
  const [repairPrices, setRepairPrices] = useState<PriceData[]>([]);
  const [partPrices, setPartPrices] = useState<PriceData[]>([]);
  const [changedRow, setChangedRow] = useState<string | null>(null);
  const [indexChanged, setIndexChanged] = useState<number | null>(null);

  useEffect(() => {
    const batteryRepairRef = ref(db, "battery-repair");
    onValue(batteryRepairRef, (snapshot) => {
      const data = Object.entries<{ price: number }>(snapshot.val()).map(
        ([name, { price }]) => ({
          name,
          price: price.toString(),
        })
      );
      const newData = customSort(data);
      setRepairPrices(newData);
    });
    const batteryPartRef = ref(db, "battery-part");
    onValue(batteryPartRef, (snapshot) => {
      const data = Object.entries<{ price: number }>(snapshot.val()).map(
        ([name, { price }]) => ({
          name,
          price: price.toString(),
        })
      );
      const newData = customSort(data);
      setPartPrices(newData);
    });
  }, []);

  const handleRepairPriceChange = (
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

  const handlePartPriceChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newPrices = [...partPrices];
    newPrices[index].price = event.target.value;
    setPartPrices(newPrices);
    setChangedRow("part-price");
    setIndexChanged(index);
    onPropChange(true);
  };

  const changeRequest = () => {
    if (indexChanged === null) return;
    switch (changedRow) {
      case "price":
        const newPrices = [...repairPrices];
        set(
          ref(db, `battery-repair/${newPrices[indexChanged].name}/price`),
          newPrices[indexChanged].price
        );
        break;
      case "part-price":
        const newPartPrices = [...partPrices];
        set(
          ref(db, `battery-part/${newPartPrices[indexChanged].name}/price`),
          newPartPrices[indexChanged].price
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
              <TableCell align="center">ЦЕНА</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {type === "repair"
              ? repairPrices.map((row, index) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">
                      {isAdminLogged ? (
                        <input
                          value={row.price}
                          onChange={(event) =>
                            handleRepairPriceChange(event, index)
                          }
                          style={{ width: "50px" }}
                        />
                      ) : (
                        row.price
                      )}{" "}
                      {row.price === "N / A" ? null : "лв"}
                    </TableCell>
                  </TableRow>
                ))
              : partPrices.map((row, index) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">
                      {isAdminLogged ? (
                        <input
                          value={row.price}
                          onChange={(event) =>
                            handlePartPriceChange(event, index)
                          }
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

export default MobileBattery;
