import { useState } from "react";

export default function QAcontents() {
  const QAcontent = [
    {
      ask: "不想註冊帳號，可以直接預約嗎？",
      ans: "可以的！我們提供「Email預約」功能，只需填寫基本資料與信箱，即可完成預約並收到確認信。建議留意信件並點擊確認連結，預約才會成立喔！",
    },
    {
      ask: "沒有收到預約確認信怎麼辦？",
      ans: "請先檢查垃圾郵件或廣告信件匣。若仍未收到，可能是信箱填寫錯誤，建議重新預約或聯繫我們的客服信箱協助處理。",
    },
    {
      ask: "預約後可以修改時間或更換命理師嗎？",
      ans: "可以。 請於預約時間24小時前透過會員中心或聯絡我們，提出修改需求，我們將協助重新安排。",
    },
  ];
  const [collapseOpen, setCollapseOpen] = useState([true, true, true]);

  return (
    <section className="QA py-md-80 py-40 position-relative">
      <img
        className="position-absolute waves-bg d-none d-md-block"
        src="assets/images/index/waves-bg.png"
        alt="waves-bg"
      />
      <div className="container">
        <div className="QA-title d-md-flex d-block align-items-end position-relative mb-md-40 mb-4 ">
          <img
            className="position-absolute"
            src="assets/images/index/title-deco.png"
            alt="round-deco "
          />
          <h2 className="ps-md-32 pt-30 pt-md-0 mb-0 me-12 fs-md-2 fs-4">
            常見問答集
          </h2>
        </div>

        <div className="QA-content">
          <ul className="list-unstyled">
            {[
              QAcontent.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="py-md-48 py-4 border-bottom border-black-300">
                      <div className="d-flex justify-content-between mb-md-36 mb-4">
                        <div className="d-flex align-items-center">
                          <img
                            className="Q-icon me-md-4 me-3"
                            src="assets/images/index/Q-icon.png"
                            alt="Q-icon"
                          />
                          <p className="mb-0">{item.ask}</p>
                        </div>
                        <button
                          type="button"
                          className="border-0 bg-transparent"
                          data-bs-toggle="collapse"
                        >
                          <img
                            src="assets/images/index/btn-social.png"
                            alt="btn-close"
                            onClick={() => {
                              setCollapseOpen((prev) =>
                                prev.map((item, i) => {
                                  return i === index ? !item : item;
                                }),
                              );
                            }}
                          />
                        </button>
                      </div>
                      <div
                        id="QA1"
                        className={`accordion-collapse collapse ${collapseOpen[index] ? "show" : ""}`}
                        aria-labelledby="headingOne"
                      >
                        <div className="d-flex">
                          <img
                            className="A-icon me-md-4 me-3"
                            src="assets/images/index/A-icon.png"
                            alt="A-icon"
                          />
                          <p className="mb-0">{item.ans}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              }),
            ]}
          </ul>
        </div>
      </div>
    </section>
  );
}
