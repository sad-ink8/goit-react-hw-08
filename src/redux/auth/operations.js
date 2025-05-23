import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://connections-api.goit.global",
});

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeAuthHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    removeAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || error.message
    );
  }
});

export const refresh = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const savedToken = thunkAPI.getState().auth.token;

  if (!savedToken) {
    return thunkAPI.rejectWithValue("Unable to fetch user: No token");
  }

  try {
    setAuthHeader(savedToken);
    const response = await axios.get("/users/current");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || error.message
    );
  }
});
