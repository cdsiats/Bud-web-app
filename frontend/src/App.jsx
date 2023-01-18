import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
