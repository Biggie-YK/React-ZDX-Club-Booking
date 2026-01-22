import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import AppointmentManagement from "./pages/AppointmentManagement";
import Knowledge from "./pages/Knowledge";
import Reserve from "./pages/Reserve";
import Nav from "./layout/Nav";

function App() {
  return (
    <>
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
      </Routes>
    </>
  );
}

export default App;
