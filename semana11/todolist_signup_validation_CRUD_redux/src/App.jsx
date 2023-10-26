import { Provider } from "react-redux";
import { SignUpPage } from "./pages";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <SignUpPage />
    </Provider>
  );
}
