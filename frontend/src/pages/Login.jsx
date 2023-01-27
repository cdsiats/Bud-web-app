import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(username, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-500 to-main grid place-items-center shadow-lg">
      <form
        onSubmit={handleSubmit}
        className="bg-lightshade flex flex-col justify-around items-center p-10 rounded-md h-2/4 w-1/4"
      >
        <h3 className=" p-1 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
          Login
        </h3>
        <div className="w-full flex flex-col">
          <div className="flex flex-col mb-5">
            <label htmlFor="">Username:</label>
            <input
              className="w-full h-10 rounded-md focus:outline-main px-2"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Password:</label>
            <input
              className="w-full h-10 rounded-md focus:outline-main px-2"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="bg-main px-14 py-3 rounded-md text-lightshade hover:scale-105 transition ease-out duration-300"
        >
          Login
        </button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default Login;
