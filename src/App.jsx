import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Private from "./routes/private";
import Public from "./routes/public";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Public />} />
          <Route index element={<h1>Browse</h1>} />
          <Route path="product-list" element={<h1>Product List</h1>} />
          <Route path="login" element={<Login />} />
          
          <Route path="/" element={<Private />} />
          <Route path="dashboard" element={<h1> Dashboard </h1>} />
          <Route path="product-add" element={<h1>Product Add</h1>} />
          <Route path="checkout" element={<h1>Check-out</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
