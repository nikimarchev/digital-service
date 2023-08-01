import React, { useContext, useState } from "react";
import "./styles.css";
import { AdminInfoDispatch } from "../App";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, TextField } from "@mui/material";
import NavBar from "./NavBar";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const setIsAdminLogged = useContext(AdminInfoDispatch);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        setIsAdminLogged(true);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <NavBar />
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          padding: "2rem",
          border: "1px solid #ccc",
          borderRadius: "0.5rem",
        }}
        onSubmit={handleLogin}
      >
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
