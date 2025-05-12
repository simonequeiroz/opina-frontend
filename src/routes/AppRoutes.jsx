import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Upload from "../../opina-backend/src/routes/Upload"; // ✅ Aqui está o novo import

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} /> {/* ✅ Nova rota */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
