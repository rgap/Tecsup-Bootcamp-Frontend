// Import the createSlice function from Redux Toolkit.
// This function simplifies the process of creating action creators and reducers.
import { createSlice } from "@reduxjs/toolkit";

// Define a new slice of the Redux store.
// A "slice" represents a portion of the Redux store and the logic to update that portion.
export const counterSlice = createSlice({
  // The name of the slice. This will be used as a prefix for the generated action types.
  name: "counter",

  // The initial state value for this slice.
  initialState: {
    value: 0,
  },

  // An object containing Redux "reducer" functions.
  // A reducer is a function that determines changes to an application's state.
  reducers: {
    // The "increment" reducer. When dispatched, it will increase the state value by 1.
    increment: (state) => {
      state.value += 1;
    },

    // The "decrement" reducer. When dispatched, it will decrease the state value by 1.
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Export the generated action creators for use in UI components.
// These can be dispatched to modify the state.
export const { increment, decrement } = counterSlice.actions;
/*
In Redux Toolkit, when you create a slice using createSlice(),
it automatically generates action creators for each function you
define in the reducers field. The generated action creators are
then available on the .actions property of the slice object.
*/

/*
counterSlice.actions = 
{
    increment: function(payload) { },
    decrement: function(payload) {  }
}
*/

// In the context of Redux, the payload is a convention used
// to hold the specific data associated with an action

// A selector function to get the current value from the Redux store.
// Selectors can compute derived data, allowing Redux to store the minimal possible state.
export const selectCount = (state) => state.counter.value;

// Export the reducer function to be added to the Redux store.
export default counterSlice.reducer;

/*
function reducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/increment':
      return { ...state, value: state.value + 1 };
    case 'counter/decrement':
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}
*/
