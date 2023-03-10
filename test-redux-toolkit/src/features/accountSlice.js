import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk(
  "account/register",
  async (request) => {
    return await fetch("http://127.0.0.1:8000/api/auth/register", request).then(
      (response) => response.json()
    );
  }
);

export const login = createAsyncThunk("account/register", async (request) => {
  return await fetch("http://127.0.0.1:8000/api/auth/login", request).then(
    (response) => response.json()
  );
});

const accountSlice = createSlice({
  name: "account",
  initialState: {
    account: [],
    token: "",
  },
  extraReducers: {
    [register.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.account = payload.user;
      console.log(state.account);
      console.log(state.token);
    },
    [login.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.account = payload.user;
      console.log(state.account);
      console.log(state.token);
    },
  },
});

export default accountSlice.reducer;
