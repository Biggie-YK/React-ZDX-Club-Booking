import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Collapse } from "bootstrap";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(true);
  const navDatas = [
    {
      url: "/knowledge",
      title: "命理知識",
    },
    {
      url: "/about",
      title: "命理師介紹",
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
      url: "/appointment-management",
      title: "登入/註冊",
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

  function handleCollapse(state) {
    setShowMenu(state);
    if (state) {
      navCollapse.current.hide();
    } else {
      navCollapse.current.show();
    }
  }

  return (
    <nav className="nav navbar position-relative py-0">
      <div className="container border-bottom border-black-400 py-md-40 py-3">
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
              backgroundImage: `url(assets/images/index/nav-bg.png)`,
            }}
            id="nav-toggle"
            ref={menuBtnRef}
            onClick={() => handleCollapse(false)}
          >
            <img src="assets/images/nav/nav-mb/menu.png" alt="menu button" />
          </button>
          <button
            type="button"
            role="button"
            style={{
              backgroundImage: `url(assets/images/index/nav-bg.png)`,
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

        <ul className="list-unstyled d-md-flex d-none px-106 align-items-center justify-content-between w-100">
          {navDatas.map((data, i) => {
            return (
              <li key={i} className="py-3 px-4">
                <Link to={data.url} className="text-dark text-decoration-none">
                  {data.img ? <img src={data.img} /> : data.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="nav-collapse collapse w-100 py-4 shadow position-absolute left-0 border-top border-black-400"
        id="collapseExample"
        style={{
          backgroundImage: `url(assets/images/index/nav-bg.png)`,
        }}
        ref={navCollapse}
      >
        <div
          className="card card-body p-0 border-0"
          style={{ backgroundImage: "url(assets/images/index/nav-bg.png)" }}
        >
          <ul className="list-unstyled text-center">
            {navDatas.map((data, i) => {
              return (
                <div key={i}>
                  {data.title ? (
                    <li className="py-3">
                      <Link
                        className="text-dark text-decoration-none"
                        to={data.url}
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
          </ul>
        </div>
      </div>
    </nav>
  );
}
