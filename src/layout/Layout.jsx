import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router";
import bg from "../../public/assets/images/index/nav-bg.png";

export default function Layout() {
  const location = useLocation();
  const hideFooterPaths = ["/login", "/register", "/admin-dashboard"]; // 不顯示 footer 的路徑
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <Nav />
        <Outlet />
        {!hideFooterPaths.includes(location.pathname) && <Footer />}
      </div>
    </>
  );
}
