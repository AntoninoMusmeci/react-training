import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import { login } from "./features/accountSlice";
import { useSelector, useDispatch } from "react-redux";

function LoginPage() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };
    dispatch(login(requestOptions));
  };

  return (
    <Grid container spaceing={1}>
      <Grid item xs={12} align="center">
        <Typography component="h4" variant="h4">
          Create a new user
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl component="fieldset">
          <TextField
            required={true}
            inputProps={{
              min: 1,
              style: { textAlign: "center" },
            }}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormHelperText>
            <div align="center"> Insert the username </div>
          </FormHelperText>
        </FormControl>
      </Grid>

      <Grid item xs={12} align="center">
        <FormControl>
          <TextField
            required={true}
            type="password"
            defaultValue={password}
            inputProps={{
              min: 1,
              style: { textAlign: "center" },
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormHelperText>
            <div align="center"> Password </div>
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <Button
          color="primary"
          variant="contained"
          onClick={(e) => handleSubmit()}
        >
          Login
        </Button>
      </Grid>
      <Grid item xs={12} align="center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button color="secondary" variant="contained" to="/">
            Home
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
