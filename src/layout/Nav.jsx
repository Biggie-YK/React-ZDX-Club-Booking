import { use, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Collapse } from "bootstrap";
import bg from "../../public/assets/images/index/nav-bg.png";
import { checkIsAuth } from "../api/api.js";

export default function Nav() {
  const location = useLocation();

  const DownNavRef = useRef(null);
  const navBg =
    "https://biggie-yk.github.io/React-ZDX-Club-Booking/assets/images/index/nav-bg.png";
  const [showMenu, setShowMenu] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  const navDatas = [
    {
      url: "/knowledge",
      title: "命理知識",
    },
    {
      url: "/services",
      title: "服務內容",
    },
    {
      url: "/",
      img: `assets/images/nav/nav-mb/logo-mb.png`,
    },
    {
      url: "/reserve",
      title: "立即預約",
    },
    {
      url: "/login",
      title: isAuth ? "個人頁面" : "登入/註冊",
    },
  ];
  const DownNavData = [
    {
      url: "/draw",
      title: "線上求籤",
    },
    {
      url: "/knowledge-article",
      title: "命理文章",
    },
  ];
  const menuBtnRef = useRef(null);
  const closeBtnRef = useRef(null);
  const navCollapse = useRef(null);

  useEffect(() => {
    navCollapse.current = new Collapse(navCollapse.current, {
      toggle: false,
    });
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      const [authStatus] = await checkIsAuth();
      setIsAuth(authStatus);
    };
    checkAuth();
  }, [location.pathname]);

  useEffect(() => {
    DownNavRef.current = new Collapse(DownNavRef.current, {
      toggle: false,
    });
  }, []);

  function handleCollapse(state) {
    setShowMenu(state);
    if (state) {
      navCollapse.current.hide();
    } else {
      navCollapse.current.show();
    }
  }

  function handleDownNavShow() {
    DownNavRef.current.show();
  }
  function handleDownNavHide() {
    DownNavRef.current.hide();
  }

  return (
    <nav
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="nav navbar 
      position-sticky top-0 
       py-0"
      onMouseEnter={handleDownNavShow}
      onMouseLeave={handleDownNavHide}
    >
      <div className="container border-bottom border-black-400 py-md-40 py-3 ">
        <div className="d-flex d-md-none justify-content-between px-12 w-100">
          <Link to="/">
            <img
              className="logo-mb d-block"
              src="assets/images/nav/nav-mb/logo-mb.png"
              alt="pig logo"
            />
          </Link>

          <button
            className={`border-0 p-2 ${showMenu ? "d-block" : "d-none"}`}
            type="button"
            role="button"
            style={{
              backgroundImage: `url(${navBg})`,
            }}
            id="nav-toggle"
            ref={menuBtnRef}
            onClick={() => handleCollapse(false)}
          >
            <img src="assets/images/nav/nav-mb/menu.png" alt="menu button" />
          </button>
          {/* 手機版關閉導覽列按鈕 */}
          <button
            type="button"
            role="button"
            style={{
              backgroundImage: `url(${navBg})`,
            }}
            id="nav-close"
            ref={closeBtnRef}
            className={`border-0 p-2 ${!showMenu ? "d-block" : "d-none"}`}
            onClick={() => handleCollapse(true)}
          >
            <img
              src="assets/images/nav/nav-mb/close-btn.png"
              alt="menu button"
            />
          </button>
        </div>

        {/* 電腦版導覽列上半部 */}
        <ul
          className="list-unstyled d-md-flex d-none  align-items-center justify-content-between w-100
         mb-3 nav-tabs border-0"
        >
          {navDatas.map((data, i) => {
            return (
              <li key={i} className=" py-3 px-4">
                <NavLink
                  to={data.url}
                  className="nav-link border-0 text-decoration-none"
                >
                  {data.img ? <img src={data.img} /> : data.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        {/* 電腦版導覽列下半部 */}
        <ul
          className="list-unstyled  px-106  w-100  downNav collapse nav-tabs border-0"
          ref={DownNavRef}
        >
          {DownNavData.map((data, i) => {
            return (
              <li key={i} className="  px-4  ">
                <NavLink
                  to={data.url}
                  className="nav-link text-decoration-none border-0  "
                >
                  {data.img ? <img src={data.img} /> : data.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="nav-collapse collapse w-100 py-4 shadow position-absolute left-0 border-top border-black-400"
        id="collapseExample"
        style={{
          backgroundImage: `url(${navBg})`,
        }}
        ref={navCollapse}
      >
        <div
          className="card card-body p-0 border-0"
          style={{ backgroundImage: `url(${navBg})` }}
        >
          {/* 手機版導覽列 */}
          <ul className="list-unstyled text-center">
            {navDatas.map((data, i) => {
              return (
                <div key={i}>
                  {data.title ? (
                    <li className="py-3">
                      <Link
                        className="text-dark text-decoration-none"
                        to={data.url}
                        onClick={() => handleCollapse(true)}
                      >
                        {data.title}
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
            {DownNavData.map((data, i) => {
              return (
                <li key={i} className="py-3  px-4  ">
                  <Link
                    to={data.url}
                    className="text-dark text-decoration-none  "
                    onClick={() => handleCollapse(true)}
                  >
                    {data.img ? <img src={data.img} /> : data.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
