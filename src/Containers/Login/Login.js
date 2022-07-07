import React, { useState } from "react";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

import "./Login.css";
import { loginInputs } from "../../Utils/inputUtils";

const Login = () => {
  const navigate = useNavigate();
const k = loginInputs
  const [inputs, setInputs] = useState({...loginInputs});

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const input = { ...inputs[name], value };
    setInputs({ ...inputs, [name]: input });
  };

  const handleClickShowPassword = () => {
    const password = { ...inputs.password };
    setInputs({
      ...inputs,
      password: { ...password, showPassword: !password.showPassword },
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitForm = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 0);
    });
  };

  const onSubmit = async () => {
    await submitForm();
    navigate("/home");
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "55ch" },
      }}
      noValidate
      autoComplete="off"
    >
      {Object.keys(inputs).map((name) => {
        const input = inputs[name];
        return (
          <div key={input.id}>
            <TextField
              name={name}
              required={input.required}
              id={input.id}
              label={input.label}
              value={input.value}
              onChange={handleChange}
              type={input.type}
              endAdornment={
                input.endAdornment ? (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {input.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ) : null
              }
            />
          </div>
        );
      })}
      <Button variant="outlined" onClick={onSubmit}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
