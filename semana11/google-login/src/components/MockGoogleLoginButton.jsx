function MockGoogleLoginButton(props) {
  const handleMockLogin = () => {
    // Simulate the data you'd get from a real Google login
    const mockUserData = {
      id: "mockGoogleId12345",
      name: "Mock User",
      email: "mockuser@example.com",
      imageUrl: "https://example.com/mock-image.jpg",
    };

    // Pass this mock data to the parent component or wherever you handle the login
    props.onUserLogin(mockUserData);
  };

  return <button onClick={handleMockLogin}>Mock Google Login</button>;
}

export default MockGoogleLoginButton;
