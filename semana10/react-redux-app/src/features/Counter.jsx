// Import hooks from 'react-redux' for interacting with the Redux store.
// useSelector allows you to extract data from the Redux store state.
// useDispatch returns a reference to the dispatch function from the Redux store.
import { useDispatch, useSelector } from "react-redux";

// Import the action creators and selector from the counter slice.
import { decrement, increment, selectCount } from "./counterSlice";

// Define the Counter component.
function Counter() {
  // Use the useSelector hook to get the current count value from the Redux store.
  const count = useSelector(selectCount);

  // Use the useDispatch hook to get the dispatch function.
  const dispatch = useDispatch();

  // Return the JSX for the Counter component.
  return (
    <div>
      <div>
        {/* When the "-" button is clicked, dispatch the decrement action to reduce the count. */}
        <button onClick={() => dispatch(decrement())}>-</button>

        {/* Display the current count value. */}
        <span>{count}</span>

        {/* When the "+" button is clicked, dispatch the increment action to increase the count. */}
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
}

// Export the Counter component for use in other parts of the app.
export default Counter;
