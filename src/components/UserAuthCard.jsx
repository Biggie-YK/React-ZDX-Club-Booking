import { Link } from "react-router";
import { userLogout } from "../api/api";

export default function UserAuthCard({ userData, pageInfo }) {
  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow">
              <div className="card-body p-4 bg-neutral-100">
                <div className="km-section-title pt-4 pt-md-32 ps-12 ps-md-32 mb-40">
                  <p className="text-start fs-4 fs-md-2 lh-base lh-md-sm fw-bold lh-sm text-black-950">
                    歡迎 {userData?.name}{" "}
                    {pageInfo === "login" ? "蒞臨！！！" : "註冊成功"}！
                  </p>
                </div>
                <div className="d-flex flex-column gap-2 mb-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-person-circle me-2 fs-5"></i>
                    <span className="fw-semibold me-2">姓名：</span>
                    <span>{userData?.name}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-envelope-fill me-2 fs-5"></i>
                    <span className="fw-semibold me-2">Email：</span>
                    <span className="text-break">{userData?.email}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-shield-check me-2 fs-5"></i>
                    <span className="fw-semibold me-2">身份：</span>
                    <span className="badge bg-primary">{userData?.role}</span>
                  </div>
                  {userData?.uid && (
                    <div className="d-flex align-items-center">
                      <i className="bi bi-key-fill me-2 fs-5"></i>
                      <span className="fw-semibold me-2">UID：</span>
                      <span className="text-muted small">{userData?.uid}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="d-flex gap-3 justify-content-center p-3 bg-neutral-1050">
                {/* <a href="/#/" className="btn btn-primary">
                  回到首頁
                </a> */}

                <Link to="/" className="btn btn-primary">
                  回到首頁
                </Link>

                <Link to="/reserve" className="btn btn-primary">
                  立即預約
                </Link>
                <button
                  onClick={() => {
                    userLogout();
                  }}
                  className="btn btn-secondary"
                >
                  登出
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
