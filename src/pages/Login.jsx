import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { checkIsAuth, userLogin } from "../api/api.js";
import UserAuthCard from "../components/UserAuthCard";

export default function Login() {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState(null);

  const checkAuth = async () => {
    const [authStatus, user] = await checkIsAuth();
    console.log("登入狀態:", authStatus, "使用者資料:", user);
    if (authStatus) {
      setIsAuth(authStatus);
      setUserData(user);
    } else {
      alert("您尚未登入，請先登入以繼續使用預約功能。");
    }
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
      const loginResult = await userLogin(formData);
      if (loginResult.success) {
        checkAuth();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {isAuth ? (
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
                        還沒有帳戶？
                        <Link to="/register" className="text-decoration-none">
                          立即註冊
                        </Link>
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
