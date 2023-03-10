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
import { createUser } from "./features/userSlice";
import { useSelector, useDispatch } from "react-redux";

function CreateUsers() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.user.errors);
  const status = useSelector((state) => state.user.status);

  useEffect(() => {
    if (status === "failed") alert(JSON.stringify(errors));
  }, [errors, status]);

  const handleSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: username,
        email: email,
      }),
    };
    dispatch(createUser(requestOptions));
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
            defaultValue={email}
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
            defaultValue={email}
            inputProps={{
              min: 1,
              style: { textAlign: "center" },
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormHelperText>
            <div align="center"> Insert email </div>
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <Button
          color="primary"
          variant="contained"
          onClick={(e) => handleSubmit()}
        >
          Create User
        </Button>
      </Grid>
      <Grid item xs={12} align="center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button color="secondary" variant="contained" to="/">
            Back
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default CreateUsers;
