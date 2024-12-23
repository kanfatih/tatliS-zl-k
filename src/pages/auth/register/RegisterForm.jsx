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

const RegisterForm = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    if (!email) {
      return toast.error("Lütfen e-posta adresinizi giriniz.");
    }

    if (!password) {
      return toast.error("Lütfen şifrenizi giriniz.");
    }

    if (password.length < 8) {
      return toast.error("Şire en az 8 karakter olmalıdır.");
    }

    const bodyData = JSON.stringify({
      fullName: "Azat",
      email,
      password,
    });
    await fetch("http://localhost:5001/auth/register", {
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
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success(data.message);
          return navigate("/giris");
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
          onChange={handleEmailChange}
          value={email}
          id="outlined-basic"
          label="E-posta"
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
            <InputAdornment position="end">
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
          label="Password"
          onChange={handlePasswordChange}
          value={password}
        />
      </FormControl>

      <Stack spacing={2} direction="row">
        <Button
          sx={{ backgroundColor: "#3750EB", marginTop: "24px" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Kayıt Ol
        </Button>
      </Stack>
    </Box>
  );
};

export default RegisterForm;
