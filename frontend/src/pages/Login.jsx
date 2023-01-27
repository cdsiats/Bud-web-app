import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(password, username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>

      <label htmlFor="">Username:</label>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <label htmlFor="">Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
