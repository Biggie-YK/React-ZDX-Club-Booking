import { Link } from "react-router";

export default function Nav() {
  return (
    <nav className="nav navbar position-relative py-0">
      <div className="container border-bottom border-black-400 py-md-40 py-3">
        <div className="d-flex d-md-none justify-content-between px-12 w-100">
          <Link to="/">
            <img
              className="logo-mb d-block"
              src="../assets/images/nav/nav-mb/logo-mb.png"
              alt="pig logo"
            />
          </Link>

          <button
            className="border-0 p-2"
            type="button"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            style={{
              backgroundImage: "url(../assets/images/index/nav-bg.png)",
            }}
            id="nav-toggle"
            // onClick="switchBtn('show')"
          >
            <img src="../assets/images/nav/nav-mb/menu.png" alt="menu button" />
          </button>
          <button
            className="border-0 p-2"
            type="button"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            style={{
              backgroundImage: "url(../assets/images/index/nav-bg.png)",
            }}
            id="nav-close"
            // onClick="switchBtn('close')"
          >
            <img
              src="../assets/images/nav/nav-mb/close-btn.png"
              alt="menu button"
            />
          </button>
        </div>

        <ul className="list-unstyled d-md-flex d-none px-106 align-items-center justify-content-between w-100">
          <li className="py-3 px-4">
            <Link to="/knowledge" className="text-dark text-decoration-none">
              命理知識
            </Link>
          </li>
          <li className="py-3 px-4">
            <Link to="/about" className="text-dark text-decoration-none">
              命理師介紹
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="../assets/images/nav/logo.png" alt="首頁連結
              (圖掛了還沒修)" />
            </Link>
          </li>
          <li className="py-3 px-4">
            <Link to='/reserve' className="text-dark text-decoration-none">
              {" "}
              立即預約{" "}
            </Link>
          </li>
          <li className="py-3 px-4 <%= login ===false?'d-block':'d-none' %>">
            <Link
              to="/appointment-management"
              className="text-dark text-decoration-none"
            >
              登入/註冊
            </Link>
          </li>
          {/* <li className="dropdown <%= login ===true?'d-block':'d-none' %>">
            <button
              type="button"
              className="py-3 px-4 border-0 bg-transparent text-decoration-none"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="../assets/images/nav/user.png" alt="icon-user" />
              <span>使用者姓名</span>
              <img
                src="../assets/images/nav/angle-small-down.png"
                alt="angle-small-down"
              />
            </button>
            <ul
              className="dropdown-menu member-menu mt-0 py-0 border-0"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a className="dropdown-item py-3 text-center" href="#">
                  預約查詢
                </a>
              </li>
              <li>
                <a className="dropdown-item py-3 text-center" href="#">
                  會員中心
                </a>
              </li>
              <li>
                <a className="dropdown-item py-3 text-center" href="#">
                  修改密碼
                </a>
              </li>
            </ul>
          </li> */}
        </ul>
      </div>
      <div
        className="nav-collapse collapse w-100 py-4 shadow position-absolute left-0 border-top border-black-400"
        id="collapseExample"
        style={{ backgroundImage: "url(../assets/images/index/nav-bg.png)" }}
      >
        <div
          className="card card-body p-0 border-0"
          style={{ backgroundImage: "url(../assets/images/index/nav-bg.png)" }}
        >
          <ul className="list-unstyled text-center">
            <li className="py-3">
              <a
                href="knowledge.html"
                className="text-dark text-decoration-none"
              >
                命理知識
              </a>
            </li>
            <li className="py-3">
              <a
                href="../pages/about.html"
                className="text-dark text-decoration-none"
              >
                命理師介紹
              </a>
            </li>
            <li className="py-3">
              <a href="reserve.html" className="text-dark text-decoration-none">
                {" "}
                立即預約{" "}
              </a>
            </li>
            <li className="py-3 <%= login ===false?'d-block':'d-none' %>">
              <a
                href="appointment-management.html"
                className="text-dark text-decoration-none"
              >
                登入/註冊
              </a>
            </li>
            <li className="dropdown <%= login ===true?'d-block':'d-none' %>">
              <button
                type="button"
                className="py-3 px-4 border-0 bg-transparent text-decoration-none"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="../assets/images/nav/user.png" alt="icon-user" />
                <span>使用者姓名</span>
                <img
                  src="../assets/images/nav/angle-small-down.png"
                  alt="angle-small-down"
                />
              </button>
              <ul
                className="dropdown-menu member-menu mt-0 py-0 border-0 w-100 px-4"
                style={{
                  backgroundImage: "url('../assets/images/index/nav-bg.png')",
                }}
                aria-labelledby="dropdownMenuButton1"
              >
                <li className="border-top border-1 border-black-400">
                  <a className="dropdown-item py-3 text-center" href="#">
                    預約查詢
                  </a>
                </li>
                <li>
                  <a className="dropdown-item py-3 text-center" href="#">
                    會員中心
                  </a>
                </li>
                <li>
                  <a className="dropdown-item py-3 text-center" href="#">
                    修改密碼
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* <script>
  const navToggle = document.getElementById('nav-toggle')
  const closeBtn = document.getElementById('nav-close')
  closeBtn.style.display = 'none'
  function switchBtn(item) {
    if (item === 'show') {
      navToggle.style.display = 'none'
      closeBtn.style.display = 'block'
    } else {
      navToggle.style.display = 'block'
      closeBtn.style.display = 'none'
    }
  }
</script> */}
    </nav>
  );
}
