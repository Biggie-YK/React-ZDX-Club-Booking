import "../../assets/scss/pages/_admin-dashboard.scss";
import { useState, useEffect } from "react";
import Dashboard from "../../components/AdminDashboard/Dashboard";
import Users from "../../components/AdminDashboard/Users";
import Bookings from "../../components/AdminDashboard/Bookings";

import { fetchAllData } from "../../api/api";

export default function AdminDashboard() {
  const [datas, setDatas] = useState({});
  const [loading, setLoading] = useState(true);
  const [mainContent, setMainContent] = useState("bookings"); // dashboard

  useEffect(() => {
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
          <h4 className="p-3 border-bottom">
            <i className="bi bi-speedometer2"></i> 後台管理
          </h4>

          <div
            className="sidebar-item"
            onClick={() => setMainContent("dashboard")}
          >
            <i className="bi bi-house"></i> 儀表板
          </div>
          <div className="sidebar-item" onClick={() => setMainContent("users")}>
            <i className="bi bi-people"></i> 會員管理
          </div>
          <div
            className="sidebar-item"
            onClick={() => setMainContent("bookings")}
          >
            <i className="bi bi-box"></i> 預約管理
          </div>
          {/* <div
            className="sidebar-item"
            onClick={() => setMainContent("services")}
          >
            <i className="bi bi-file-earmark-text"></i> 服務管理
          </div>
          <div
            className="sidebar-item"
            onClick={() => setMainContent("articles")}
          >
            <i className="bi bi-gear"></i> 文章管理
          </div> */}
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
