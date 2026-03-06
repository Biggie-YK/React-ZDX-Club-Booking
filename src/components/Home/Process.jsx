export default function Process() {
  return (
    <section className="py-md-80 py-40   position-relative overflow-x-clip ">
      {/* <!-- overflow-x-hidden會連y軸部分都隱藏 clip不會 --> */}
      <img
        className="tree-deco opacity-50 position-absolute d-none d-md-block"
        src="assets/images/index/tree-bg.png"
        alt="tree"
      />
      <div className="container">
        <div className="d-md-flex d-block align-items-end position-relative mb-md-40 mb-4">
          <img
            className="position-absolute"
            src="assets/images/index/title-deco.png"
            alt="round-deco "
          />
          <h2 className="ps-md-32 pt-30 pt-md-0 mb-0 me-12 fs-md-2 fs-4">
            預約服務流程
          </h2>
          <p className="mb-0">快速預約，一點就通，開始屬於你的探索</p>
        </div>

        <ul className="step card-list list-unstyled row mb-md-40 mb-4 g-4">
          <li className="col-md-3 col-6">
            <div className="card bg-transparent border-0 ">
              <h1 className="fs-md-40 fs-4 text-primary text-center mb-md-3 mb-1">
                1
              </h1>
              <div
                className="card-title step-item py-md-80 text-center mb-0
              rounded-circle d-flex flex-column justify-content-center align-items-center"
                style={{
                  backgroundImage: "url(assets/images/index/step-1.png)",
                }}
              >
                <img
                  className="mb-md-4 mb-12 card-title-icon"
                  src="assets/images/index/step-1-icon.png"
                  alt="step-1-icon"
                />
                <h2 className="text-white mb-0 fs-md-2 fs-5">登入 or Mail</h2>
              </div>
              <div className="card-body d-none d-md-block">
                <div className="d-flex justify-content-center mb-3">
                  <div className="card-deco border border-primary"></div>
                </div>
                <p className="px-48 text-center mb-0 fs-7">
                  想更快速管理預約紀錄？建議註冊會員帳號；若使用
                  Email預約，無需註冊也能完成，但請記得查收確認信。
                </p>
              </div>
            </div>
          </li>
          <li className="col-md-3 col-6">
            <div className="card bg-transparent border-0 ">
              <h1 className="fs-md-40 fs-4 text-primary text-center mb-md-3 mb-1">
                2
              </h1>
              <div
                className="card-title step-item py-md-80 text-center mb-0
              rounded-circle d-flex flex-column justify-content-center align-items-center"
                style={{
                  backgroundImage: "url(assets/images/index/step-2.png)",
                }}
              >
                <img
                  className="mb-md-4 mb-12 card-title-icon"
                  src="assets/images/index/step-2-icon.png"
                  alt="step-2-icon"
                />
                <h2 className="text-white mb-0 fs-md-2 fs-5">選擇命理師</h2>
              </div>
              <div className="card-body d-none d-md-block">
                <div className="d-flex justify-content-center mb-3">
                  <div className="card-deco border border-primary"></div>
                </div>
                <p className="px-48 text-center mb-0 fs-7">
                  想更快速管理預約紀錄？建議註冊會員帳號；若使用
                  Email預約，無需註冊也能完成，但請記得查收確認信。
                </p>
              </div>
            </div>
          </li>
          <li className="col-md-3 col-6">
            <div className="card bg-transparent border-0 ">
              <h1 className="fs-md-40 fs-4 text-primary text-center mb-md-3 mb-1">
                3
              </h1>
              <div
                className="card-title step-item py-md-80 text-center mb-0
              rounded-circle d-flex flex-column justify-content-center align-items-center"
                style={{
                  backgroundImage: "url(assets/images/index/step-3.png)",
                }}
              >
                <img
                  className="mb-md-4 mb-12 card-title-icon"
                  src="assets/images/index/step-3-icon.png"
                  alt="step-3-icon"
                />
                <h2 className="text-white mb-0 fs-md-2 fs-5">選擇服務/時段</h2>
              </div>
              <div className="card-body d-none d-md-block">
                <div className="d-flex justify-content-center mb-3">
                  <div className="card-deco border border-primary"></div>
                </div>
                <p className="px-48 text-center mb-0 fs-7">
                  想更快速管理預約紀錄？建議註冊會員帳號；若使用
                  Email預約，無需註冊也能完成，但請記得查收確認信。
                </p>
              </div>
            </div>
          </li>
          <li className="col-md-3 col-6">
            <div className="card bg-transparent border-0 ">
              <h1 className="fs-md-40 fs-4 text-primary text-center mb-md-3 mb-1">
                4
              </h1>
              <div
                className="card-title step-item py-md-80 text-center mb-0
              rounded-circle d-flex flex-column justify-content-center align-items-center"
                style={{
                  backgroundImage: "url(assets/images/index/step-4.png)",
                }}
              >
                <img
                  className="mb-md-4 mb-12 card-title-icon"
                  src="assets/images/index/step-4-icon.png"
                  alt="step-4-icon"
                />
                <h2 className="text-white mb-0 fs-md-2 fs-5">登入 or Mail</h2>
              </div>
              <div className="card-body d-none d-md-block">
                <div className="d-flex justify-content-center mb-3">
                  <div className="card-deco border border-primary"></div>
                </div>
                <p className="px-48 text-center mb-0 fs-7">
                  想更快速管理預約紀錄？建議註冊會員帳號；若使用
                  Email預約，無需註冊也能完成，但請記得查收確認信。
                </p>
              </div>
            </div>
          </li>
        </ul>

        <div className="warning">
          <div className="warning-bg py-md-98 py-3  position-relative ">
            <img
              className="position-absolute warning-bg-img z-1 opacity-50 start-0 d-none d-md-block"
              src="assets/images/index/warning-bg.png"
              alt="warning-bg"
            />
            <div className="position-relative z-2">
              <p className="mb-md-3 mb-0 fs-7 fs-md-6 ">預約注意事項：</p>
              <p className="mb-md-3 mb-0 fs-7 fs-md-6 ">
                1. 請確認填寫的 Email 正確,預約完成後將寄送確認信至您的信箱。
              </p>
              <p className="mb-md-3 mb-0 fs-7 fs-md-6 ">
                2. 若使用 Email 預約(免註冊),務必點擊信件中的連結完成確認。
              </p>
              <p>3. 命理師每次服務名額有限,請準時參與,避免影響他人權益。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
