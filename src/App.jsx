import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Quiz from "./pages/Quiz.jsx";

export default function App() {
  const location = useLocation();

  const hideNavbarRoutes = ["/", "/register"];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Header />}
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz/:category" element={<Quiz />} />
      </Routes>
    </>
  );
}
