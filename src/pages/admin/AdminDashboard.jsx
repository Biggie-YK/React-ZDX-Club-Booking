import "../../assets/scss/pages/_admin-dashboard.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../components/AdminDashboard/Dashboard";
import Users from "../../components/AdminDashboard/Users";
import Bookings from "../../components/AdminDashboard/Bookings";

import { fetchAllData, checkIsAuth, userLogout } from "../../api/api";

export default function AdminDashboard() {
  const [adminInfo, setAdminInfo] = useState(null);
  const [datas, setDatas] = useState({
    bookings: [],
    users: [],
    posts: [],
    services: [],
  });
  const [loading, setLoading] = useState(true);
  const [mainContent, setMainContent] = useState("dashboard"); // dashboard

  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginAndRole = async () => {
      const [authStatus, user] = await checkIsAuth();
      if (!authStatus || user.role !== "admin") {
        alert("您尚未登入或沒有權限訪問此頁面，請先登入以繼續使用預約功能。");
        navigate("/login");
      } else {
        setAdminInfo(user);
      }
    };
    checkLoginAndRole();

    const fetchData = async () => {
      const result = await fetchAllData();
      setDatas(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <div>載入中...</div>;

  return (
    <>
      <div className="d-flex">
        {/* <!-- Sidebar --> */}
        <div className="sidebar fw-bold text-neutral-50 bg-neutral-800">
          <div className="p-3 border-bottom h4">
            <i className="bi bi-speedometer2 me-2"></i> 後台管理
          </div>

          <div className="h6 fw-bold sidebar-item d-flex justify-content-between align-items-center">
            <div>
              <i className="bi bi-person-circle me-2"></i> {adminInfo?.name}
            </div>
            <button
              type="button"
              className="btn btn-neutral-600 text-neutral-200 btn-sm"
              onClick={() => {
                userLogout();
                navigate("/login");
              }}
            >
              登出
            </button>
          </div>

          <div
            className="sidebar-item"
            onClick={() => setMainContent("dashboard")}
          >
            <i className="bi bi-house me-2"></i> 儀表板
          </div>
          <div className="sidebar-item" onClick={() => setMainContent("users")}>
            <i className="bi bi-people me-2"></i> 會員管理
          </div>
          <div
            className="sidebar-item"
            onClick={() => setMainContent("bookings")}
          >
            <i className="bi bi-box me-2"></i> 預約管理
          </div>
        </div>

        {/* <!-- Main --> */}
        <div className="flex-grow-1">
          {/* <!-- 主畫面 --> */}
          <div className="content bg-background-beige p-4">
            <div className="row g-4">
              {mainContent === "dashboard" && <Dashboard datas={datas} />}
              {mainContent === "users" && <Users users={datas.users} />}
              {mainContent === "bookings" && (
                <Bookings bookings={datas.bookings} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
