import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // 檢查 Caps Lock 狀態
  const [capsLockOn, setCapsLockOn] = useState(false);
  const checkCapsLock = (e) => {
    const isCapsLock = e.getModifierState && e.getModifierState("CapsLock");
    setCapsLockOn(isCapsLock);
  };

  // register api
  const API_URL = import.meta.env.VITE_API_URL;
  const registerUrl = `${API_URL}/register`;
  const registerApi = async (data) => {
    console.log("註冊 API URL:", registerUrl);
    console.log("註冊資料:", data);
    try {
      const response = await axios.post(registerUrl, {
        name: data.name,
        email: data.email,
        password: data.password,
        role: "user",
        remark: "使用者",
      });
      console.log("註冊 API 回應:", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const password = watch("password");

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow">
            <div className="card-body p-4 bg-neutral-100">
              <div className="km-section-title pt-4 pt-md-32 ps-12 ps-md-32 mb-40">
                <p className="text-start fs-4 fs-md-2 lh-base lh-md-sm fw-bold lh-sm text-black-950">
                  會員註冊
                </p>
              </div>
              <form onSubmit={handleSubmit(registerApi)}>
                {/* 姓名欄位 */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    姓名 <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? "input-error" : ""} ${errors.name ? "is-invalid" : ""}`}
                    id="name"
                    placeholder="請輸入您的姓名"
                    {...register("name", {
                      required: "姓名為必填欄位",
                      minLength: {
                        value: 2,
                        message: "姓名至少需要 2 個字元",
                      },
                      maxLength: {
                        value: 50,
                        message: "姓名不能超過 50 個字元",
                      },
                    })}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">
                      {errors.name.message}
                    </div>
                  )}
                </div>

                {/* Email 欄位 */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "input-error" : ""} ${errors.email ? "is-invalid" : ""}`}
                    id="email"
                    placeholder="example@email.com"
                    {...register("email", {
                      required: "Email 為必填欄位",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "請輸入有效的 Email 格式",
                      },
                    })}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                {/* 密碼欄位 */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    密碼 <span className="text-danger me-2">*</span>
                    {capsLockOn && (
                      <span className="text-danger text-start">
                        ⚠️ 大寫鎖定已開啟
                      </span>
                    )}
                  </label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? "input-error" : ""} ${errors.password ? "is-invalid" : ""}`}
                    id="password"
                    onKeyDown={checkCapsLock}
                    onKeyUp={checkCapsLock}
                    onFocus={checkCapsLock}
                    placeholder="請輸入密碼"
                    {...register("password", {
                      required: "密碼為必填欄位",
                      minLength: {
                        value: 4,
                        message: "密碼至少需要 4 個字元",
                      },
                      pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]/,
                        message: "密碼必須包含英文字母和數字",
                      },
                    })}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password.message}
                    </div>
                  )}
                  <div className="form-text">
                    密碼至少 4 個字元，需包含英文和數字
                  </div>
                </div>

                {/* 確認密碼欄位 */}
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    確認密碼 <span className="text-danger me-2">*</span>
                    {capsLockOn && (
                      <span className="text-danger text-start">
                        ⚠️ 大寫鎖定已開啟
                      </span>
                    )}
                  </label>
                  <input
                    type="password"
                    className={`form-control ${errors.confirmPassword ? "input-error" : ""} ${errors.confirmPassword ? "is-invalid" : ""}`}
                    id="confirmPassword"
                    onKeyDown={checkCapsLock}
                    onKeyUp={checkCapsLock}
                    onFocus={checkCapsLock}
                    placeholder="請再次輸入密碼"
                    {...register("confirmPassword", {
                      required: "請確認密碼",
                      validate: (value) =>
                        value === password || "兩次輸入的密碼不一致",
                    })}
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {errors.confirmPassword.message}
                    </div>
                  )}
                </div>

                {/* 提交按鈕 */}
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary btn-lg">
                    註冊
                  </button>
                </div>

                {/* 登入連結 */}
                <div className="text-center mt-3">
                  <p className="mb-0">
                    已經有帳戶了？{" "}
                    <a href="/#/login" className="text-decoration-none">
                      立即登入
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
