export default function Footer() {
  return (
    <footer className="footer">
      <div className="container px-0 px-md-12">
        <div className="py-md-40 pt-40 pb-4 border-bottom  d-flex  align-items-center gap-4 px-md-4 border-black-400">
          <div className="footer-border-up-1 border border-black-400 d-none d-md-block"></div>
          <picture className="mx-auto">
            <source
              className="footer-logo logo-mb"
              srcSet='assets/images/nav/logo.png'
              media="(min-width: 768px)"
            />
            <img
              className="logo-mb  d-block"
              src='assets/images/nav/nav-mb/logo-mb.png'
              alt="pig-logo"
            />
          </picture>
          <div className="footer-border-up-2 border border-black-400 d-none d-md-block"></div>
        </div>
        <div className="d-flex flex-md-row flex-column py-md-40 pt-4 column-gap-4 ">
          <div className="footer-item  d-flex justify-content-center mb-4">
            <div className="w-50">
              <h5 className="fw-bold mb-md-28 mb-3 text-center">關於我們</h5>
              <ul className="list-unstyled mb-0">
                <li className="text-center mb-md-20 mb-3">FAQ</li>
                <li className="text-center mb-md-20 mb-3">顧客服務</li>
                <li className="text-center ">聯絡我們</li>
              </ul>
            </div>
            <div className="w-50">
              <h5 className="fw-bold   mb-md-28 mb-3 text-center">其它</h5>
              <ul className="list-unstyled mb-0">
                <li className="text-center mb-md-20 mb-3">預約服務流程</li>
                <li className="text-center mb-md-20 mb-3">網站地圖</li>
                <li className="text-center mb-md-20 mb-3">預約查詢</li>
                <li className="text-center mb-md-20 mb-3">
                  <a className="text-decoration-none" href="/#/admin-dashboard">
                    後台管理
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-center">
            <p className="text-center text-primary fw-bold mb-12">
              尋找答案的你，值得一場溫暖的命理對話。
            </p>
            <p className="text-center text-primary fw-bold mb-32">
              立即預約，給自己新的視野。
            </p>
            <p className="text-center  fs-7 mb-12">
              09:00~22:00 / Mon-Sun (每月15號公休)
            </p>
            <p className="text-center fs-7 mb-md-32 mb-0">
              service@pigdaxian-service.com
            </p>
            <h6 className="fs-7 mb-2 text-center fw-normal d-none d-md-block">
              付款方式
            </h6>
            <img
              className="d-none d-md-block mx-auto"
              src='assets/images/footer/pay.png'
              alt="pay"
            />
          </div>
          <div className="px-36 flex-fill d-none d-md-block">
            <p className="text-primary mb-12">訂閱電子報</p>
            <div className="d-flex align-items-center mb-2">
              <div className=" border-end-0 p-11 ps-2 border border-primary">
                <img
                  className="ic-mail"
                  src='assets/images/footer/ic_mail.png'
                  alt="icon mail"
                />
              </div>
              <input
                className="input-email border border-start-0 border-primary w-100 bg-transparent py-12 "
                type="email"
                placeholder="Enter Email"
              />
            </div>
            <button type="button" className="btn btn-primary rounded-0 mb-36">
              立即探索您專屬的服務
            </button>
            <ul className="list-unstyled d-flex gap-20">
              <li className="p-2 footer-icon ">
                <a href="#">
                  <img src='assets/images/footer/ic-fb.png' alt="icon fb" />
                </a>
              </li>
              <li className="p-2 footer-icon ">
                <a href="#">
                  <img
                    src='assets/images/footer/ic-line.png'
                    alt="icon line"
                  />
                </a>
              </li>
              <li className="p-2 footer-icon ">
                <a href="#">
                  <img
                    src='assets/images/footer/ic-youtube.png'
                    alt="icon fb"
                  />
                </a>
              </li>
              <li className="p-2 footer-icon ">
                <a href="#">
                  <img src='assets/images/footer/ic-ig.png' alt="icon fb" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-md-4 py-4 ">
          <div className="border border-black-400"></div>
        </div>
        <div className="d-flex flex-md-row flex-column flex-column-reverse p-md-4 px-12  align-items-center justify-content-between">
          <p className="mb-0">豬大仙的命理探險家俱樂部 版權所有</p>

          <div className="w-100 mb-4 d-md-none">
            <div className="d-flex w-100 align-items-center">
              <div className="py-3 text-center w-50 me-2">隱私權保護政策</div>
              <div className=" border border-primary footer-deco-mb"></div>
              <div className="ms-2 py-3 text-center w-50">免責聲明</div>
            </div>
            <div className="d-flex w-100 align-items-center">
              <div className="py-3 text-center w-50 me-2">網站使用條款</div>
              <div className=" border border-primary footer-deco-mb"></div>
              <div className="ms-2 py-3 text-center w-50">防詐騙聲明</div>
            </div>
          </div>

          <ul className="d-none mb-0 d-md-flex list-unstyled align-items-center">
            <li className="px-2 py-1">隱私權保護政策</li>
            <li className="d-flex px-2">
              <div className=" border border-primary footer-deco"></div>
            </li>
            <li className="px-2 py-1">免責聲明</li>
            <li className="d-flex px-2">
              <div className=" border border-primary footer-deco"></div>
            </li>
            <li className="px-2 py-1">網站使用條款</li>
            <li className="d-flex px-2">
              <div className=" border border-primary footer-deco"></div>
            </li>
            <li className="px-2 py-1">防詐騙聲明</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
