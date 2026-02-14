import { Routes, Route, useLocation } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import AppointmentManagement from "./pages/AppointmentManagement";
import Knowledge from "./pages/Knowledge";
import Reserve from "./pages/Reserve";
import Nav from "./layout/Nav";
import Footer from "./layout/Footer";
import Draw from "./pages/Draw";
import OtherPicks from "./pages/OtherPicks";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/admin/AdminDashboard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  const location = useLocation();
  const hideFooterPaths = ["/login", "/register", "/admin-dashboard"]; // 不顯示 footer 的路徑

  return (
    <>
      <div
        style={{ backgroundImage: "url(../assets/images/index/nav-bg.png)" }}
      >
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/appointment-management"
            element={<AppointmentManagement />}
          ></Route>
          <Route path="/knowledge" element={<Knowledge />}></Route>
          <Route path="/reserve" element={<Reserve />}></Route>
          <Route path="/draw" element={<Draw />}></Route>
          <Route path="/other-picks" element={<OtherPicks />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
        </Routes>
        {!hideFooterPaths.includes(location.pathname) && <Footer />}
      </div>
    </>
  );
}

export default App;
