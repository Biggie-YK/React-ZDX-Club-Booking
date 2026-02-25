import { Carousel } from "bootstrap";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import FarmerCalender from "../components/FarmerCalender";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link, useNavigate  } from "react-router-dom";

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    const carousel = new Carousel(carouselRef.current);
    carouselRef.current.addEventListener("slid.bs.carousel", (e) => {
      setCarouselIndex(e.to);
    });
  }, []);

  return (
    <>
      <header
        className="header  py-md-160 py-80  position-relative "
        //
        style={{ backgroundImage: "url(assets/images/index/header.png)" }}
      >
        <DotLottieReact
          src="https://lottie.host/08657889-c1e5-4d0b-8844-c01b6a963497/cPEKyYNdRW.lottie"
          autoplay
          className="position-absolute w-100 h-100 top-0"
        />
        <div
          className="filter position-absolute top-0 start-0 end-0 bottom-0
            "
        ></div>
        <div className="container text-center position-relative">
          <h1 className="fs-md-40 fs-3  text-neutral-50 fw-normal mb-md-48 mb-4">
            二十四節氣中
            <br />
            看見你的節奏與命運
          </h1>
          <p className="fs-md-5 fs-6 text-neutral-50 mb-md-48 mb-4 text-center">
            用東方智慧解讀時機，
            <br className="d-block d-md-none " />
            結合命理協助你的人生選擇
          </p>

          <button
            type="button"
            className="btn bg-neutral-50 rounded-0  fs-5 py-0"
          >
            <Link to="/reserve" className="btn-inside-border py-3 d-block text-center">
              立即探索您專屬的服務
            </Link>
          </button>
        </div>
      </header>

      <section className="py-md-80 py-40 service">
        <div className="container">
          <div className="d-flex   mb-md-40 mb-4 justify-content-between">
            <div
              className="d-flex align-items-md-end align-items-start position-relative pt-30
          flex-md-row flex-column
          "
            >
              <img
                className="position-absolute top-0"
                src="assets/images/index/title-deco.png"
                alt="round-deco "
              />
              <h2 className="ps-md-32 mb-md-0 mb-12 me-12 fs-md-2 fs-4">
                熱門服務項目
              </h2>
              <p className=" mb-0">命理不神秘，熱門服務助你一步步了解自己！</p>
            </div>

            <ul className="my-indicators list-unstyled mb-0 d-md-flex d-none align-items-end ">
              {[
                ...Array(3)
                  .keys()
                  .map((_, i) => {
                    return (
                      <li key={i}>
                        <div
                          className={`my-indicator service-item w-120 me-12
                          ${carouselIndex === i ? "border-dark" : ""}
                          `}
                        ></div>
                      </li>
                    );
                  }),
              ]}
            </ul>
          </div>

          <div
            id="service-carousel"
            className="carousel slide mb-4 mb-md-0"
            data-bs-ride="carousel"
            ref={carouselRef}
          >
            <div className="carousel-inner">
              <div
                className="carousel-item active bg-position-left"
                style={{
                  backgroundImage: "url(assets/images/index/banner-1.png)",
                }}
              >
                <div className=" d-flex align-items-center h-100">
                  <div>
                    <h4 className="fs-5 fs-md-4 mb-4">紫微命盤精解</h4>
                    <p className="mb-4">
                      透過專業紫微斗數排盤，解析個人命格結構，了解內在性
                      <br className="d-none d-md-block" />
                      格與人生方向，幫助你在迷惘中找到清晰定位。
                    </p>
                    <button
                      type="button"
                      className="btn  rounded-0  fs-md-5 fs-6 py-0 px-12 border-green-200"
                      onClick={() => navigate("/reserve")}
                    >
                      <div className="btn-inside-border py-2 px-3 text-white  border-green-200">
                        立即預約
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="carousel-item "
                style={{
                  backgroundImage: "url(assets/images/index/banner-2.png)",
                }}
              >
                <div className=" d-flex align-items-center h-100">
                  <div>
                    <h4 className="fs-5 fs-md-4 mb-4">流年運勢分析</h4>
                    <p className="mb-4">
                      結合八字與流年運勢，深入剖析財運、 感情、事業等關鍵
                      <br className="d-none d-md-block" />
                      面向，掌握最佳行動時機，趨吉避凶，為人生提前佈局。
                    </p>
                    <button
                      type="button"
                      className="btn  rounded-0  fs-md-5 fs-6 py-0 px-12 border-green-200"
                      onClick={() => navigate("/reserve")}
                    >
                      <div className="btn-inside-border py-2 px-3 text-white  border-green-200">
                        立即預約
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="carousel-item "
                style={{
                  backgroundImage: "url(assets/images/index/banner-3.png)",
                }}
              >
                <div className=" d-flex align-items-center h-100">
                  <div>
                    <h4 className="fs-5 fs-md-4 mb-4">擇日開運指南</h4>
                    <p className="mb-4">
                      無論是結婚、搬家、開業，擇日都是開啟好運的第一步。
                      <br className="d-none d-md-block" />
                      根據你的八字量身規劃黃道吉日，讓每一個開始都更順
                      <br className="d-none d-md-block" />
                      利。
                    </p>
                    <button
                      type="button"
                      className="btn  rounded-0  fs-md-5 fs-6 py-0 px-12 border-green-200"
                      onClick={() => navigate("/reserve")}
                    >
                      <div className="btn-inside-border py-2 px-3 text-white  border-green-200">
                        立即預約
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul className="my-indicators list-unstyled mb-0 d-flex d-md-none  align-items-end row ">
            <li className="col">
              <div className="my-indicator service-item "></div>
            </li>
            <li className="col">
              <div className="my-indicator service-item"></div>
            </li>
            <li className="col">
              <div className="my-indicator service-item"></div>
            </li>
          </ul>
        </div>
      </section>

      <section className="comment py-md-80 py-40 position-relative  ">
        <div className="container position-relative">
          <div className="d-md-flex d-block align-items-end position-relative mb-md-40 mb-4">
            <img
              className="position-absolute"
              src="assets/images/index/title-deco.png"
              alt="round-deco "
            />
            <h2 className="ps-md-32 pt-30 pt-md-0 mb-0 me-12 fs-md-2 fs-4">
              有緣人評價
            </h2>
            <p className="mb-0">來自四面八方的肯定，是我們前進的動力</p>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            navigation
          >
            <SwiperSlide>
              <div className="card bg-transparent border-0">
                <img
                  src="assets/images/index/comment-4.png"
                  alt="women take coffee"
                />
                <div className="pt-4 text-center">
                  <img
                    className="mb-4"
                    src="assets/images/index/star4.png"
                    alt="4-stars"
                  />
                  <div className="card-title fw-bold mb-4">
                    芷涵(新婚人妻，27歲)
                  </div>
                  <p className="mb-4 mb-md-0 fs-7 fs-md-6 ">
                    幫我和另一半擇日登記結婚的服務超貼心
                    <br />
                    ，老師不只提供好日子，還附上注意事項
                    <br />
                    與祝福話語，感覺特別溫暖。
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card bg-transparent border-0">
                <img
                  src="assets/images/index/comment-1.png"
                  alt="women take coffee"
                />
                <div className="pt-4 text-center">
                  <img
                    className="mb-4"
                    src="assets/images/index/star4.png"
                    alt="4-stars"
                  />
                  <div className="card-title fw-bold mb-4">
                    Ken(設計師，33歲)
                  </div>
                  <p className="mb-4 mb-md-0 fs-7 fs-md-6 ">
                    第一次接觸紫微命盤，本來只是好奇，沒
                    <br />
                    想到看完解析後對自己的個性和人際盲點
                    <br />
                    突然豁然開朗，真的蠻有幫助！
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card bg-transparent border-0 ">
                <img
                  src="assets/images/index/comment-2.png"
                  alt="women take coffee"
                />
                <div className="pt-4 text-center">
                  <img
                    className="mb-4"
                    src="assets/images/index/full-stars.png"
                    alt="4-stars"
                  />
                  <div className="card-title fw-bold mb-4">
                    芷涵(新婚人妻，27歲)
                  </div>
                  <p className="mb-4 mb-md-0 fs-7 fs-md-6 ">
                    幫我和另一半擇日登記結婚的服務超貼心
                    <br />
                    ，老師不只提供好日子，還附上注意事項
                    <br />
                    與祝福話語，感覺特別溫暖。
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card bg-transparent border-0">
                <img
                  src="assets/images/index/comment-3.png"
                  alt="women take coffee"
                />
                <div className="pt-4 text-center">
                  <img
                    className="mb-4"
                    src="assets/images/index/full-stars.png"
                    alt="4-stars"
                  />
                  <div className="card-title fw-bold mb-4" />
                  Eric(科技業，35歲)
                </div>
                <p className="mb-4 mb-md-0 fs-7 fs-md-6 ">
                  命理服務完全不像我以前想像的老派，介
                  <br />
                  面乾淨簡單，說明也清楚易懂，非常適合
                  <br />
                  現代人使用！
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div
          id="comment-carousel"
          className="carousel slide mb-4 mb-md-0 d-md-none d-block"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item  ps-0 active swiper-slide">
              <div className="card bg-transparent border-0">
                <img
                  src="assets/images/index/comment-4.png"
                  alt="women take coffee"
                />
                <div className="pt-4 text-center">
                  <img
                    className="mb-4"
                    src="assets/images/index/star4.png"
                    alt="4-stars"
                  />
                  <div className="card-title fw-bold mb-4">
                    芷涵(新婚人妻，27歲)
                  </div>
                  <p className="mb-4 mb-md-0 fs-7 fs-md-6 ">
                    幫我和另一半擇日登記結婚的服務超貼心
                    <br />
                    ，老師不只提供好日子，還附上注意事項
                    <br />
                    與祝福話語，感覺特別溫暖。
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item  ps-0 swiper-slide">
              <div className="card bg-transparent border-0">
                <img
                  src="assets/images/index/comment-1.png"
                  alt="women take coffee"
                />
                <div className="pt-4 text-center">
                  <img
                    className="mb-4"
                    src="assets/images/index/star4.png"
                    alt="4-stars"
                  />
                  <div className="card-title fw-bold mb-4">
                    Ken(設計師，33歲)
                  </div>
                  <p className="mb-4 mb-md-0 fs-7 fs-md-6 ">
                    第一次接觸紫微命盤，本來只是好奇，沒
                    <br />
                    想到看完解析後對自己的個性和人際盲點
                    <br />
                    突然豁然開朗，真的蠻有幫助！
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item  ps-0 swiper-slide">
              <div className="card bg-transparent border-0 ">
                <img
                  src="assets/images/index/comment-2.png"
                  alt="women take coffee"
                />
                <div className="pt-4 text-center">
                  <img
                    className="mb-4"
                    src="assets/images/index/full-stars.png"
                    alt="4-stars"
                  />
                  <div className="card-title fw-bold mb-4">
                    芷涵(新婚人妻，27歲)
                  </div>
                  <p className="mb-4 mb-md-0 fs-7 fs-md-6 ">
                    幫我和另一半擇日登記結婚的服務超貼心
                    <br />
                    ，老師不只提供好日子，還附上注意事項
                    <br />
                    與祝福話語，感覺特別溫暖。
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item  ps-0 swiper-slide">
              <div className="card bg-transparent border-0">
                <img
                  src="assets/images/index/comment-3.png"
                  alt="women take coffee"
                />
                <div className="pt-4 text-center">
                  <img
                    className="mb-4"
                    src="assets/images/index/full-stars.png"
                    alt="4-stars"
                  />
                  <div className="card-title fw-bold mb-4">
                    Eric(科技業，35歲)
                  </div>
                  <p className="mb-4 mb-md-0 fs-7 fs-md-6 ">
                    命理服務完全不像我以前想像的老派，介
                    <br />
                    面乾淨簡單，說明也清楚易懂，非常適合
                    <br />
                    現代人使用！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="my-indicators list-unstyled mb-0 d-flex d-md-none  align-items-end row w-100">
          <li className="col">
            <div className="my-indicator  comment-item "></div>
          </li>
          <li className="col">
            <div className="my-indicator  comment-item"></div>
          </li>
          <li className="col">
            <div className="my-indicator  comment-item"></div>
          </li>
          <li className="col">
            <div className="my-indicator  comment-item"></div>
          </li>
        </ul>
      </section>

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
                  <h2 className="text-white mb-0 fs-md-2 fs-5">
                    選擇服務/時段
                  </h2>
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

      <section className="lunar-calendar bg-transparent">
        <div className="d-block d-md-flex ">
          <div className="me-md-60">
            <div className="d-md-flex d-block align-items-end position-relative mb-md-40 mb-4 ps-12 ps-md-0">
              <img
                className="position-absolute"
                src="assets/images/index/title-deco.png"
                alt="round-deco "
              />
              <h2 className="ps-md-32 pt-30 pt-md-0 mb-0 me-12 fs-md-2 fs-4">
                農民曆
              </h2>
              <p className="mb-0">掌握節氣脈動。每日行事宜忌一覧</p>
            </div>
            <FarmerCalender />
          </div>
          <div className="flex-fill">
            <div className="solar-term py-md-64 p-4 position-relative  mb-4">
              <h2 className="fs-lg-80 fs-3 solar-term-title d-inline-block p-md-4 p-3 text-nowrap">
                大暑
              </h2>
            </div>
            <div className="detail p-md-36 pt-36 px-12 pb-md-0 pb-40 ">
              <div className="d-flex mb-md-40 mb-4 flex-wrap flex-lg-nowrap">
                <div className="me-md-40 me-12">
                  <div className="py-2 year  fs-7 text-center text-primary">
                    2025
                  </div>
                  <div className="border border-primary py-md-1 py-2 px-4 text-center text-primary">
                    <h6 className="mb-2 fs-40">3</h6>
                    <h6 className="mb-0 fs-5">八月</h6>
                  </div>
                  <p className="text-white text-nowrap mb-0 fs-7 bg-primary text-center py-2 px-3">
                    民國114年
                  </p>
                </div>
                <ul className="list-unstyled flex-fill">
                  <li>
                    <p className="fs-7 p-md-4 py-md-3 p-3 mb-0 border-bottom border-black-300">
                      國曆：2025年08月03日
                    </p>
                  </li>
                  <li>
                    <p className="fs-7 p-md-4 py-md-3 p-3 mb-0 border-bottom border-black-300">
                      農曆：乙巳年閏六以初十
                    </p>
                  </li>
                  <li>
                    <p className="fs-7 p-md-4 py-md-3 p-3 mb-0 border-bottom border-black-300">
                      節氣：大暑 (國曆) <br className="d-md-none" />
                      2025/07/22-2025/08/06
                    </p>
                  </li>
                </ul>
              </div>

              <ul className="list-unstyled d-flex flex-column gap-3">
                <li>
                  <div className="d-flex p-4 align-items-center border border-primary flex-wrap">
                    <h5 className="fs-md-48 fs-2 mb-0 text-primary me-md-2 me-2">
                      沖
                    </h5>
                    <span className=" fs-7 ps-3 py-1 me-1">
                      屬豬(丁亥，19歲)
                    </span>
                    <span className=" fs-7 ps-3 py-1">屬豬(丁亥，79歲)</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex p-4 align-items-center border border-primary">
                    <h5 className="fs-md-48 fs-2 mb-0 text-primary me-md-2 me-3">
                      宜
                    </h5>
                    <div className="d-flex flex-wrap text-nowrap ">
                      <span className="fs-7 px-2 py-1">嫁娶</span>
                      <span className="fs-7 px-2 py-1">納采</span>
                      <span className="fs-7 px-2 py-1">訂盟</span>
                      <span className="fs-7 px-2 py-1">祭祀</span>
                      <span className="fs-7 px-2 py-1">祈福</span>
                      <span className="fs-7 px-2 py-1">求嗣</span>
                      <span className="fs-7 px-2 py-1">納采</span>
                      <span className="fs-7 px-2 py-1">裁衣</span>
                      <span className="fs-7 px-2 py-1">冠笄</span>
                      <span className="fs-7 px-2 py-1">開光</span>
                      <span className="fs-7 px-2 py-1">安床</span>
                      <span className="fs-7 px-2 py-1">作樑</span>
                      <span className="fs-7 px-2 py-1">修造</span>
                      <span className="fs-7 px-2 py-1">動土</span>
                      <span className="fs-7 px-2 py-1">作灶</span>
                      <span className="fs-7 px-2 py-1">起基</span>
                      <span className="fs-7 px-2 py-1">移徙</span>
                      <span className="fs-7 px-2 py-1">出行</span>
                      <span className="fs-7 px-2 py-1">破土</span>
                      <span className="fs-7 px-2 py-1">安葬</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex p-4 align-items-center border border-primary">
                    <h5 className="fs-md-48 fs-2 mb-0 text-primary me-md-2 me-3">
                      煞
                    </h5>
                    <span className="fs-7 px-2 py-1">東方</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex p-4 align-items-center border border-primary flex-wrap">
                    <h5 className="fs-md-48 fs-2 mb-0 text-primary me-md-2 me-3">
                      吉時
                    </h5>
                    <span className="fs-7 px-2 py-1">丑</span>
                    <span className="fs-7 px-2 py-1">卯</span>
                    <span className="fs-7 px-2 py-1">辰</span>
                    <span className="fs-7 px-2 py-1">巳</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
}
