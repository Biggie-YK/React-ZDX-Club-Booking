import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import AppointmentManagement from "./pages/AppointmentManagement";
import Knowledge from "./pages/Knowledge";
import Reserve from "./pages/Reserve";
import Nav from "./layout/Nav";
import Footer from "./layout/Footer";
import Draw from "./pages/Draw";
import OtherPicks from "./pages/OtherPicks";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
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
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
