import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import "bootstrap-icons/font/bootstrap-icons.css";
import { createBooking, checkIsAuth } from "../api/api.js";

import { timeOptions, serviceOptions } from "../api/fromOptionsData.js";

export default function Reserve() {
  const [isAuth, setIsAuth] = useState(true);
  const [userData, setUserData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // 檢查是否已登入
  useEffect(() => {
    const checkAuth = async () => {
      const [authStatus, userData] = await checkIsAuth();
      setIsAuth(authStatus);
      setUserData(userData);
    };
    checkAuth();
  }, []);

  // API 串接
  const onSubmit = async (data) => {
    try {
      // 若已登入且有 userData，將 userId 加入表單資料
      const bookingData = userData?.userId
        ? { ...data, userId: userData.userId }
        : data;

      await createBooking(bookingData);
      alert("預約成功！我們將盡快與您聯繫確認細節。");
      navigate("/");
    } catch (error) {
      alert("預約失敗，請稍後再試。");
      console.error("預約失敗:", error);
    }
  };

  return (
    <>
      <header className="pt-md-80">
        <div className="container ps-md-80 py-40">
          <div className="row align-items-center">
            <div className="col-md-6  col-12">
              <div className=" mx-24 position-relative  py-55">
                <img
                  className="position-absolute align-items-center"
                  src="assets/images/reserve/title-deco.png"
                  alt="reserve-dot"
                />
                <h1 className="text-black-950 px-4 pt-33 pb-64 fs-2 lh-sm fw-bold ">
                  預約諮詢
                </h1>
                <div className="reserve-section px-64">
                  <p className="reserve-text text-primary-500 fs-3 lh-sm fw-bold pb-4">
                    豬大仙
                  </p>
                  <p className="pb-12 text-black-600">
                    紫微命盤、開運、運勢分析、姻緣感情
                  </p>
                  <p className="pb-40">擅長結合心理學解釋命盤，語氣溫和實用</p>
                  <p className="fs-4 black-600">嗨囉！很高興為您服務~</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className=" d-flex">
                <img
                  className="img-fluid"
                  src="assets/images/reserve/pig.png"
                  alt="豬大仙"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 表單 */}
      <section className="container  py-40 py-md-80">
        <div className="outside-border">
          <div className="inside-border py-md-72 py-36">
            {!isAuth && (
              <div
                className="alert alert-warning m-0 d-md-flex align-items-center justify-content-center fs-5"
                role="alert"
              >
                <div className="mb-3 m-md-3">
                  您尚未登入,登入後可享有更便利的服務體驗
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/login")}
                >
                  前往登入
                </button>
              </div>
            )}

            <form className="reserve-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="row service-list ">
                <div className="col-md-6 p-md-5">
                  <h2 className="fs-4 text-black-600 pb-4">
                    選擇服務類型 :
                    {errors.service && (
                      <span className="fs-6 text-danger">*必填</span>
                    )}
                  </h2>

                  <div className="row ">
                    {serviceOptions.map((service) => (
                      <div key={service.id} className="mb-4 col-6 col-md-12">
                        <input
                          type="radio"
                          name="service"
                          value={service.value}
                          id={service.id}
                          {...register("service", {
                            required: "請選擇服務類型",
                          })}
                        />
                        <label
                          htmlFor={service.id}
                          className="card-option py-36 flex-column flex-md-row"
                        >
                          <div className="radio-icon-wrapper position-relative">
                            <i className="bi bi-circle bi-radio-icon icon-unchecked"></i>
                            <i className="bi bi-check-circle-fill bi-radio-icon icon-checked"></i>
                          </div>
                          <img
                            src={service.image}
                            className="service-img"
                            alt={service.alt}
                          />
                          <div className="service-info d-flex flex-column">
                            <span className="title">{service.title}</span>
                            <span className="price">{service.price}</span>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>

                  {errors.service && (
                    <p className="text-danger fs-6 mt-2">
                      {errors.service.message}
                    </p>
                  )}
                </div>
                <div className="col-md-6 col-12 p-md-5 p-3">
                  <ul>
                    {/* date */}
                    <li className=" mb-4 W-540">
                      <label
                        htmlFor="date"
                        className="form-label mb-12 fs-6 pe-4"
                      >
                        選擇日期
                        {errors.date && (
                          <span className="fs-6 text-danger">*必填</span>
                        )}
                      </label>
                      <div className="position-relative ">
                        <input
                          type="date"
                          name="date"
                          id="date"
                          className={`form-control pe-5 ${errors.date ? "input-error" : ""}`}
                          placeholder="年/月/日"
                          {...register("date", { required: "請選擇日期" })}
                        />
                        <i className="bi bi-calendar4-week position-absolute top-50 end-0 translate-middle-y me-3 text-muted pointer-events-none"></i>
                      </div>
                      {errors.date && (
                        <p className="text-danger fs-6 mt-2">
                          {errors.date.message}
                        </p>
                      )}
                    </li>
                    {/* time */}
                    <li className=" mb-4 W-540">
                      <label
                        htmlFor="time"
                        className="form-label mb-12 fs-6 pe-4"
                      >
                        預約時段
                        {errors.time && (
                          <span className="fs-6 text-danger">*必填</span>
                        )}
                      </label>
                      <div className="position-relative">
                        <select
                          name="time"
                          id="time"
                          className={`form-control ${errors.time ? "input-error" : ""}`}
                          aria-label="Default select example"
                          defaultValue=""
                          {...register("time", { required: "請選擇預約時段" })}
                        >
                          <option value="" disabled>
                            請選擇時段
                          </option>
                          {timeOptions.map((item) => (
                            <option key={item.value} value={item.value}>
                              {item.label}
                            </option>
                          ))}
                        </select>

                        <i className="bi bi-chevron-down position-absolute top-50 end-0 translate-middle-y me-3 text-muted pointer-events-none"></i>
                      </div>

                      {errors.time && (
                        <p className="text-danger fs-6 mt-2">
                          {errors.time.message}
                        </p>
                      )}
                    </li>
                    {/* name */}
                    <li className=" mb-4 W-540">
                      <label
                        htmlFor="name"
                        className={`form-label mb-12 fs-6 pe-4`}
                      >
                        姓名
                        {errors.name && (
                          <span className="fs-6 text-danger">*必填</span>
                        )}
                      </label>
                      <div className="position-relative">
                        <input
                          name="name"
                          type="text"
                          id="name"
                          value={userData ? userData.name : ""}
                          className={`form-control ${errors.name ? "input-error" : ""}`}
                          placeholder="請輸入姓名"
                          {...register("name", { required: "請輸入姓名" })}
                        />
                        <i className="bi bi-person position-absolute top-50 end-0 translate-middle-y me-3 text-muted pointer-events-none"></i>
                      </div>
                      {errors.name && (
                        <p className="text-danger fs-6 mt-2">
                          {errors.name.message}
                        </p>
                      )}
                    </li>
                    {/* phone */}
                    <li className=" mb-4 W-540">
                      <label
                        htmlFor="tel"
                        className="form-label mb-12 fs-6 pe-4"
                      >
                        聯絡電話
                        {errors.phone && (
                          <span className="fs-6 text-danger">*必填</span>
                        )}
                      </label>
                      <div className="position-relative">
                        <input
                          name="phone"
                          type="tel"
                          id="tel"
                          className={`form-control ${errors.phone ? "input-error" : ""}`}
                          {...register("phone", {
                            required: "請輸入聯絡電話",
                            pattern: {
                              value: /^(09\d{8}|0\d{1,2}-?\d{6,8})$/,
                              message:
                                "請輸入有效的電話格式 (手機: 0912345678 或 市話: 02-12345678)",
                            },
                            validate: {
                              isMobileOrLandline: (value) => {
                                if (/^09\d{8}$/.test(value)) return true;
                                if (/^0\d{1,2}-?\d{6,8}$/.test(value))
                                  return true;
                                return "手機格式: 0912345678 或 市話格式: 02-12345678";
                              },
                            },
                          })}
                          placeholder="手機: 0912345678 或 市話: 02-12345678"
                        />
                        <i className="bi bi-phone position-absolute top-50 end-0 translate-middle-y me-3 text-muted pointer-events-none"></i>
                      </div>
                      {errors.phone && (
                        <p className="text-danger fs-6 mt-2">
                          {errors.phone.message}
                        </p>
                      )}
                    </li>
                    {/* email */}
                    <li className=" mb-4 W-540">
                      <label
                        htmlFor="email"
                        className="form-label mb-12 fs-6 pe-4"
                      >
                        電子郵件
                        {errors.email && (
                          <span className="fs-6 text-danger">*必填</span>
                        )}
                      </label>
                      <div className="position-relative">
                        <input
                          name="email"
                          type="email"
                          id="email"
                          className={`form-control ${errors.email ? "input-error" : ""}`}
                          placeholder="example@gmail.com"
                          value={userData ? userData.email : ""}
                          {...register("email", { required: "請輸入電子郵件" })}
                        />
                        <i className="bi bi-envelope position-absolute top-50 end-0 translate-middle-y me-3 text-muted pointer-events-none"></i>
                      </div>
                      {errors.email && (
                        <p className="text-danger fs-6 mt-2">
                          {errors.email.message}
                        </p>
                      )}
                    </li>
                    {/* comment */}
                    <li className=" mb-4 W-540">
                      <label htmlFor="comment" className="mb-12">
                        想告訴豬大仙...
                      </label>
                      <div>
                        <textarea
                          name="comment"
                          id="comment"
                          className="form-control mb-4"
                          rows="4"
                          placeholder="請輸入訊息"
                          {...register("comment")}
                        ></textarea>
                      </div>
                    </li>
                    {/* agreement */}
                    <div className="d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="agreement"
                        id="agreement"
                        className={`form-check-input ${errors.agreement ? "input-error" : ""}`}
                        {...register("agreement", {
                          required: "請同意隱私權條款",
                        })}
                      />
                      <p className="">我同意</p>

                      {/* Button trigger modal */}
                      <button
                        type="button"
                        className="btn btn-primary btn-modals "
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        隱私權條款
                      </button>

                      {/* <Modal */}
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                隱私權條款
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <p className="fw-bold">
                                為保障您的個人資料與隱私權，本網站依據個人資料保護法及相關法規訂定本隱私權條款，說明我們如何收集、使用、儲存及保護您的個人資料。請您詳細閱讀以下內容：
                              </p>
                              <p className="fw-bold">
                                一、資料的收集範圍
                                本網站於您進行預約、註冊帳號、聯繫客服或參與活動時，可能會請您提供個人資料，包括但不限於姓名、聯絡電話、電子郵件、地址及其他必要資訊。
                              </p>
                              <p className="fw-bold">
                                二、資料的使用目的
                                您所提供的個人資料僅用於以下目的：
                                處理預約或訂單相關事宜 提供客戶服務與售後支援
                                傳送與服務有關的通知（如行程提醒、變更通知等）
                                改善本網站服務品質
                              </p>
                              <p className="fw-bold">
                                三、資料保護措施
                                本網站採取合理的技術與管理措施來保護您的個人資料，防止資料遺失、竄改、洩漏或遭不當使用。
                              </p>
                              <p className="fw-bold">
                                四、資料提供與第三方共用
                                除非經您同意或依法律規定，本網站不會將您的個人資料提供給任何第三方或用於收集目的以外的用途。
                              </p>
                              <p className="fw-bold">
                                五、使用者權利
                                您有權隨時查詢、閱覽、請求複製、更正、停止使用或刪除您的個人資料。如有需要，請與我們的客服聯繫。
                              </p>
                              <p className="fw-bold">
                                六、條款修訂
                                本網站有權隨時修改本條款。修改後的條款將公告於網站上，不另行個別通知。建議您定期查閱。
                                若您使用本網站，即表示您已閱讀、瞭解並同意本隱私權條款之所有內容。
                              </p>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>與</p>
                      {/* Button trigger modal */}
                      <button
                        type="button"
                        className="btn btn-primary btn-modals"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                      >
                        預約須知
                      </button>

                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="exampleModal2"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                預約須知
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <p className="fw-bold">
                                為確保您獲得最完整、準確的命理分析，請您在預約前詳讀以下說明，並確認您已瞭解並同意本預約須知內容。
                              </p>
                              <p className="fw-bold">
                                一、預約方式與資料準備
                                本命理服務採線上預約制，請提前預約並提供必要資訊。
                                為進行準確分析，您需於預約時提供下列資訊（部分服務項目適用）：
                                姓名（本名） 性別 出生年月日（國曆或農曆）
                                出生時間（精確至分鐘，如不詳請備註） 出生地點
                              </p>
                              <p className="fw-bold">
                                二、預約確認與諮詢方式
                                完成預約後，系統將寄發確認通知至您的電子郵件或LINE。
                                命理諮詢可選擇實體面談、LINE
                                通話、Zoom、或其他線上形式，請於預約時備註。
                                若您預約的是錄音分析或文字報告服務，將依照約定時間寄送報告內容。
                              </p>
                              <p className="fw-bold">
                                三、取消與更改預約規定 請於諮詢日前至少 48 小時
                                通知取消或更改預約。
                                若臨時取消或未出席，將視為一次服務已完成，恕不退費。
                                若遇不可抗力之情形（如重大事故、天災），可另行協調補約。
                              </p>
                              <p className="fw-bold">
                                四、付款方式與退款說明
                                本服務採預付制，請於預約後三日內完成付款，方完成預約流程。
                                繳費後如欲取消，將酌收 30%
                                手續費，並於七日內退還餘額。
                                若已開始分析作業，恕不接受退款。
                              </p>
                              <p className="fw-bold">
                                五、其他注意事項
                                諮詢期間請保持安靜環境，避免干擾或第三者旁聽（除非經雙方同意）。
                                本命理分析僅供參考與建議，無法保證特定結果，請自行判斷並負責後續決定。
                                本服務將嚴格保密您的個人資料與諮詢內容。
                              </p>
                              <p className="fw-bold">
                                若您完成預約，即表示您已閱讀並同意以上預約須知條款。如有其他問題，歡迎聯繫我們。
                              </p>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {errors.agreement && (
                      <p className="text-danger fs-6 my-0">
                        {errors.agreement.message}
                      </p>
                    )}
                  </ul>
                </div>
              </div>
              {/* 回上頁、送出按扭 */}
              <div className="d-flex flex-column flex-md-row justify-content-md-center align-items-center">
                <button className="me-md-36 mb-md-0 mb-3 btn-outside bg-transparent">
                  <div className="btn-inside">回上一步</div>
                </button>
                <button type="submit" className="btn-outside submitBtn">
                  <div className="btn-inside send-btn-bg ">送出預約</div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 注意事項 */}
      <section className="container py-40">
        <div className="row flex-md-nowrap">
          {/* 注意事項 */}
          <div className="col-12 col-md-8  image-bg p-md-5 me-lg-3 mb-4 mb-md-0">
            <img
              className="list-bg img-fluid d-none d-md-block "
              src="assets/images/reserve/memo-bg1.png"
              alt="memo-bg1"
            />
            <div className="content ">
              <div className="position-relative pt-4 mb-40">
                <img
                  className="position-absolute top-0 "
                  src="assets/images/reserve/title-deco.png"
                  alt="title-deco"
                />
                <h2 className="fs-2 fw-bold ps-32 mb-0">注意事項</h2>
              </div>
              <ul className="mb-0 ps-3 ps-md-5">
                <li className="mb-28 fs-4 list-style ">
                  所有資料僅供本次命理諮詢使用，嚴格保密不外洩。
                </li>
                <li className="mb-28 fs-4 list-style">
                  若您臨時需更改或取消預約，請提前一天通知。
                </li>
                <li className="mb-28 fs-4 list-style">
                  預約成功後會發送確認通知，請妥善留意相關訊息。
                </li>
                <li className=" fs-4 list-style">
                  如有任何疑問或未收到回覆，可主動聯繫客服協助處理。
                </li>
              </ul>
            </div>
          </div>
          {/* 需要協助 */}
          <div className="col-12 col-md-4  image-bg p-md-5">
            <img
              className="list-bg img-fluid d-none d-md-block"
              src="assets/images/reserve/memo-bg2.png"
              alt="memo-bg2"
            />
            <div className="content ">
              <div className="position-relative mb-80 pt-4">
                <img
                  className="position-absolute top-0 "
                  src="assets/images/reserve/title-deco.png"
                  alt="title-deco"
                />
                <h2 className="fs-2 fw-bold ps-32 mb-0">需要協助</h2>
              </div>
              <button className="btn-outside  bg-transparent w-100 w-md-auto">
                <div className="btn-inside">看更多常見問題</div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
