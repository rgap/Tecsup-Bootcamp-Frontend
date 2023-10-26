import { useState } from "react";
import MockGoogleLoginButton from "./components/MockGoogleLoginButton";

function App() {
  const [user, setUser] = useState(null);

  const handleUserLogin = (userData) => {
    setUser(userData);
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <img src={user.imageUrl} alt={user.name} />
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <MockGoogleLoginButton onUserLogin={handleUserLogin} />
      )}
    </div>
  );
}

export default App;
