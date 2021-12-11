import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/Login";
import SingUp from "./components/SingUp";
import Post from "./components/Post";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/signup" element={<SingUp />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="nav" element={<Nav />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/post" element={<Post/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
