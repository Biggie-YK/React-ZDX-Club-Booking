import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { checkIsAuth, userLogin } from "../api/api.js";
import UserAuthCard from "../components/UserAuthCard";


export default function Login() {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState(null);
  const checkAuth = async () => {
    const [authStatus, user] = await checkIsAuth();
    setIsAuth(authStatus);
    setUserData(user);
  };

  // 使用 useEffect 檢查登入狀態
  useEffect(() => {
    checkAuth();
  }, []);

  // react hook form 相關設定
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 檢查 Caps Lock 狀態
  const [capsLockOn, setCapsLockOn] = useState(false);
  const checkCapsLock = (e) => {
    const isCapsLock = e.getModifierState && e.getModifierState("CapsLock");
    setCapsLockOn(isCapsLock);
  };

  // 處理表單提交
  const onSubmit = async (formData) => {
    try {
      await userLogin(formData);
      checkAuth();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {isAuth ? (
        // <div className="container py-5">
        //   <div className="row justify-content-center">
        //     <div className="col-md-6 col-lg-5">
        //       <div className="card shadow">
        //         <div className="card-body p-4 bg-neutral-100">
        //           <div className="km-section-title pt-4 pt-md-32 ps-12 ps-md-32 mb-40">
        //             <p className="text-start fs-4 fs-md-2 lh-base lh-md-sm fw-bold lh-sm text-black-950">
        //               歡迎 {userData?.name} 蒞臨！！！
        //             </p>
        //           </div>
        //           <div className="d-flex flex-column gap-2 mb-4">
        //             <div className="d-flex align-items-center">
        //               <i className="bi bi-person-circle me-2 fs-5"></i>
        //               <span className="fw-semibold me-2">姓名：</span>
        //               <span>{userData?.name}</span>
        //             </div>
        //             <div className="d-flex align-items-center">
        //               <i className="bi bi-envelope-fill me-2 fs-5"></i>
        //               <span className="fw-semibold me-2">Email：</span>
        //               <span className="text-break">{userData?.email}</span>
        //             </div>
        //             <div className="d-flex align-items-center">
        //               <i className="bi bi-shield-check me-2 fs-5"></i>
        //               <span className="fw-semibold me-2">身份：</span>
        //               <span className="badge bg-primary">{userData?.role}</span>
        //             </div>
        //             {userData?.uid && (
        //               <div className="d-flex align-items-center">
        //                 <i className="bi bi-key-fill me-2 fs-5"></i>
        //                 <span className="fw-semibold me-2">UID：</span>
        //                 <span className="text-muted small">
        //                   {userData?.uid}
        //                 </span>
        //               </div>
        //             )}
        //           </div>
        //         </div>
        //         <div className="d-flex gap-3 justify-content-center p-3 bg-neutral-1050">
        //           <a href="/#/" className="btn btn-primary">
        //             回到首頁
        //           </a>
        //           <button
        //             onClick={() => {
        //               handleLogout();
        //               setIsAuth(false);
        //               setUserData(null);
        //             }}
        //             className="btn btn-secondary"
        //           >
        //             登出
        //           </button>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <UserAuthCard userData={userData} pageInfo="login" />
      ) : (
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card shadow">
                <div className="card-body p-4 bg-neutral-100">
                  <div className="km-section-title pt-4 pt-md-32 ps-12 ps-md-32 mb-40">
                    <p className="text-start fs-4 fs-md-2 lh-base lh-md-sm fw-bold lh-sm text-black-950">
                      會員登入
                    </p>
                  </div>
                  <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className={`form-control pe-5 ${errors.email ? "input-error" : ""}`}
                        id="floatingInput"
                        placeholder="請輸入電子郵件"
                        {...register("email", { required: true })}
                      />
                      <label htmlFor="floatingInput">
                        {errors.email && (
                          <span className="fs-6 text-danger me-2">*必填</span>
                        )}
                        電子郵件
                      </label>
                    </div>
                    <div className="form-floating mb-4">
                      <input
                        type="password"
                        className={`form-control pe-5 ${errors.password ? "input-error" : ""}`}
                        id="floatingPassword"
                        placeholder="請輸入密碼"
                        onKeyDown={checkCapsLock}
                        onKeyUp={checkCapsLock}
                        onFocus={checkCapsLock}
                        {...register("password", { required: true })}
                      />
                      <label htmlFor="floatingPassword">
                        {errors.password && (
                          <span className="fs-6 text-danger me-2">*必填</span>
                        )}
                        密碼
                      </label>
                      {capsLockOn && (
                        <div className="text-danger text-start mt-1 ">
                          ⚠️ 大寫鎖定已開啟
                        </div>
                      )}
                    </div>
                    <button
                      id="add-user-btn"
                      type="submit"
                      className="btn btn-primary w-100 p-2 fs-5"
                    >
                      登入
                    </button>
                    <div className="text-center mt-3">
                      <p className="mb-0">
                        還沒有帳戶？{" "}
                        <a href="/#/register" className="text-decoration-none">
                          立即註冊
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
