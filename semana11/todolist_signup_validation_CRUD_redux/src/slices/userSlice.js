import { createSlice } from "@reduxjs/toolkit";

// Define a slice of the Redux store for user data
export const userSlice = createSlice({
  // Name of the slice, used as a prefix for generated action types
  name: "user",

  // Initial state of the slice
  // Try to get the user data from local storage, if it exists
  initialState: {
    data: JSON.parse(localStorage.getItem("user")),
  },

  // Reducers specify how the state changes in response to actions
  reducers: {
    // Action to save user data
    saveUser: (state, action) => {
      // Update the state with the new user data
      state.data = action.payload;

      // Also save the user data to local storage
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

// Export the generated actions from the slice
export const { saveUser } = userSlice.actions;

// Export the reducer function to handle state updates
export default userSlice.reducer;
