import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/Login";
import SingUp from "./components/SingUp";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/signup" element={<SingUp />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="nav" element={<Nav />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
