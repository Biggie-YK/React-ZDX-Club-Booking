import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";

export default function Login() {
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

  // login api
  const API_URL = import.meta.env.VITE_API_URL;
  const loginUrl = `${API_URL}/login`;
  const loginApi = async (data) => {
    console.log(`登入資料 data:`, data);
    console.log(loginUrl);
    try {
      const response = await axios.post(loginUrl, data);
      console.log(`登入成功: ${response.data.user.email}`);
      const userId = response.data.user.id;
      // 使用 js-cookie 寫入
      Cookies.set("userId", userId, {
        expires: 1 / 24,
        path: "/",
        sameSite: "lax",
      });
      const token = response.data.accessToken;
      Cookies.set("token", token, {
        expires: 1 / 24,
        path: "/",
        sameSite: "lax",
      });
      // 設定 axios 預設 header
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      console.log(`userId 已寫入 cookie：${Cookies.get("userId")}`);
      console.log(`Token 已寫入 cookie：${Cookies.get("token")}`);
      navigate("/");
    } catch (error) {
      console.error(error.response);
    }
  };

  return (
    <>
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
                <form className="" onSubmit={handleSubmit(loginApi)}>
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
    </>
  );
}
