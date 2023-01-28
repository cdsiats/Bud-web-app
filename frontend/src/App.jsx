import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <div>
          <Routes>
            <Route
              path="/"
              element={user ? <Home></Home> : <Navigate to="/login"></Navigate>}
            ></Route>
            <Route
              path="/login"
              element={!user ? <Login></Login> : <Navigate to="/"></Navigate>}
            ></Route>
            <Route
              path="/signup"
              element={!user ? <Signup></Signup> : <Navigate to="/"></Navigate>}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
