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

interface RepairPrice {
  name: string;
  price: string;
  secondPrice: string;
}

interface PartPrice {
  name: string;
  price: string;
}

interface MobileDisplayProps {
  type: "repair" | "part";
  onPropChange: (value: boolean) => void;
  buttonClicked: boolean;
}

const MobileDisplay: React.FC<MobileDisplayProps> = ({
  type,
  onPropChange,
  buttonClicked,
}) => {
  const isAdminLogged = useContext(AdminInfo);
  const [repairPrices, setRepairPrices] = useState<RepairPrice[]>([]);
  const [partPrices, setPartPrices] = useState<PartPrice[]>([]);
  const [changedRow, setChangedRow] = useState<
    "price" | "secondPrice" | "part-price" | null
  >(null);
  const [indexChanged, setIndexChanged] = useState<number | null>(null);

  useEffect(() => {
    const displayRepairRef = ref(db, "display-repair");
    onValue(displayRepairRef, (snapshot) => {
      let data = Object.entries<{ price: number; secondPrice: number }>(
        snapshot.val()
      ).map(([name, { price, secondPrice }]) => ({
        name,
        price: price.toString(),
        secondPrice: secondPrice.toString(),
      }));
      data = data.sort((a, b) => b.name.localeCompare(a.name));
      setRepairPrices(data);
    });
    const displayPartRef = ref(db, "display-part");
    onValue(displayPartRef, (snapshot) => {
      let data = Object.entries<{ price: number }>(snapshot.val()).map(
        ([name, { price }]) => ({
          name,
          price: price.toString(),
        })
      );
      data = data.sort((a, b) => b.name.localeCompare(a.name));
      setPartPrices(data);
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

  const handleRepairSecondPriceChange = (
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
    if (!indexChanged) return;
    switch (changedRow) {
      case "price":
        const newPrices = [...repairPrices];
        set(
          ref(db, `display-repair/${newPrices[indexChanged].name}/price`),
          newPrices[indexChanged].price
        );
        break;
      case "secondPrice":
        const newSecondPrices = [...repairPrices];
        set(
          ref(
            db,
            `display-repair/${newSecondPrices[indexChanged].name}/secondPrice`
          ),
          newSecondPrices[indexChanged].secondPrice
        );
        break;
      case "part-price":
        const newPartPrices = [...partPrices];
        set(
          ref(db, `display-part/${newPartPrices[indexChanged].name}/price`),
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
              <TableCell align="center">ЦЕНА СЪВМЕСТИМ</TableCell>
              {type === "repair" && (
                <TableCell align="center">ЦЕНА ОРИГИНАЛЕН</TableCell>
              )}
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
                    <TableCell align="center">
                      {isAdminLogged ? (
                        <input
                          value={row.secondPrice}
                          onChange={(event) =>
                            handleRepairSecondPriceChange(event, index)
                          }
                          style={{ width: "50px" }}
                        />
                      ) : (
                        row.secondPrice
                      )}{" "}
                      {row.secondPrice === "N / A" ? null : "лв"}
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

export default MobileDisplay;
