import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SearchService from "@services/search.service";
import { toast } from "react-toastify";
import { SUCCESS_CODES } from "@config/sucessCode";

export interface UserState {
  data: any;
  error: string;
  loading: boolean;
}

export const initialState: UserState = {
  data: {},
  error: "",
  loading: false,
};

export const serach = createAsyncThunk(
  "weather/find",
  async (params: any, { rejectWithValue, dispatch }) => {
    try {
      const response: any = await SearchService.search(params);
      console.log("response", response);
      
      if (SUCCESS_CODES.includes(response.status) && response?.data) {
        toast.success("Weather fetched successfully");
        return response.data;
      } else {
        toast.error(
          response?.response?.statusText ||
            "Failed to get weather data. Please try again later."
        );
        return rejectWithValue(
          response?.response?.statusText ||
            "Failed to get weather data. Please try again later."
        );
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
      return rejectWithValue(err.message || "Something went wrong");
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearError(state) {
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(serach.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(serach.fulfilled, (state, action) => {
      state.data = action.payload || {};
      state.error = "";
      state.loading = false;
    });
    builder.addCase(serach.rejected, (state, action) => {
      state.data = {};
      state.error = (action?.payload as string) || "";
      state.loading = false;
    });
  },
});

export const { clearError } = searchSlice.actions;
export default searchSlice.reducer;
