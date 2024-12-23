import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PasswordInput = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const [email, setEmail] = useState("2@fatih.comfatih");
  const [password, setPassword] = useState("Fatih.123!");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    const bodyData = JSON.stringify({
      email,
      password,
    });
    await fetch("http://localhost:5001/auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: bodyData,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.error) {
          toast.error(data.error);
        } else if (data.accessToken) {
          toast.success("Giriş Başarılı");
          localStorage.setItem("token", data.accessToken);
          navigate("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: { xs: "24ch", md: "28ch", lg: "34ch" },
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Eposta"
          onChange={handleEmailChange}
          variant="outlined"
        />
      </Box>

      <FormControl
        sx={{
          m: 1,
          width: { xs: "24ch", md: "28ch", lg: "34ch" },
        }}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-password">Şifre</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="start">
              <IconButton
                aria-label={
                  values.showPassword
                    ? "hide the password"
                    : "display the password"
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          onChange={handlePasswordChange}
          label="Password"
        />
      </FormControl>

      <Stack spacing={2} direction="row">
        <Button
          sx={{ backgroundColor: "#FE6F3B", marginTop: "24px" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Giriş Yap
        </Button>
      </Stack>
    </Box>
  );
};

export default PasswordInput;
