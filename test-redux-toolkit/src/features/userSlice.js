import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
  "user/getuser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      "http://127.0.0.1:8000/get-user" + "?code=" + id
    );

    if (response.status === 404) {
      return rejectWithValue(await response.json());
    }
    return await response.json();
  }
);

export const getUsers = createAsyncThunk("user/getusers", async () => {
  return await fetch("http://127.0.0.1:8000/users").then((response) =>
    response.json()
  );
});

export const createUser = createAsyncThunk(
  "user/createuser",
  async (request, { rejectWithValue }) => {
    const response = await fetch("http://127.0.0.1:8000/user", request);
    if (response.status === 400) {
      return rejectWithValue(await response.json());
    }
    return await response.json();
  }
);

// const updateUser = createAsyncThunk('users/update', async (user, thunkApi) => {
//   const { id, ...userData } = user
//   const response = await fetch(`https://reqres.in/api/users/${id}`, {
//     method: 'PUT',
//     headers: {
//       Authorization: `Bearer ${thunkApi.extra.jwt}`,
//     },
//     body: JSON.stringify(userData),
//   })
//   if (response.status === 400) {
//     // Return the known error for future handling
//     return thunkApi.rejectWithValue((await response.json()) as MyKnownError)
//   }
//   return (await response.json()) as MyData
// })

const userSlice = createSlice({
  name: "user",
  initialState: {
    status: "",
    errors: {},
    data: [],
  },
  extraReducers: {
    [getUser.pending]: (state) => {
      state.status = "loading";
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    [getUser.rejected]: (state, { payload }) => {
      state.status = "failed";
      state.errors = payload;
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    [getUsers.rejected]: (state, { payload }) => {
      state.data = payload;
      state.status = "failed";
    },
    [createUser.pending]: (state, { payload }) => {
      console.log("pending");
      state.status = "loading";
    },
    [createUser.fulfilled]: (state, { payload }) => {
      state.data.push(payload);
      state.status = "success";
    },
    [createUser.rejected]: (state, { payload }) => {
      state.errors = payload;
      state.status = "failed";
    },
  },
});

export default userSlice.reducer;
