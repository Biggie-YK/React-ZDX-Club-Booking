import "../assets/scss/pages/_services.scss";
import Bbutton from "../components/Button/button";
import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Services() {
  const navigate = useNavigate();
  const services = [
    {
      title: "紫微命盤精解 | 人生底層設定解析",
      description: "適合對象：人生迷惘期、方向不明、想重新定位自己的人",
      image: "assets/images/services/services-title-bg-1.png",
    },
    {
      title: "流年運勢分析 | 掌握關鍵年份",
      description:
        "你會知道：哪一年適合轉職、投資、創業，哪一年應避免風險與重大變動。",
      image: "assets/images/services/services-title-bg-2.png",
    },
    {
      title: "姻緣與感情合盤 | 看清關係走向",
      description: "適合對象：曖昧、交往中、婚前評估、關係反覆者",
      image: "assets/images/services/services-title-bg-3.png",
    },
  ];
  const data = {
    服務名稱: "紫微命盤精解",
    所需資料: {
      注意事項: "為確保解析準確，請於預約後提供以下資訊",
      項目: [
        "出生年月日 (西元)",
        "出生時間 (請盡量精確，誤差不超過30分鐘)",
        "出生地 (國家/城市)",
        "目前最關心的 1 ~ 3 個人生議題 (如：職涯、方向、角色定位等)",
      ],
      隱私說明: "所有資料僅用於命盤分析，並嚴格保密。",
    },
    服務流程說明: [
      {
        步驟: "Step 1",
        標題: "預約與資料提交",
        內容: ["點擊下方按鈕完成預約", "填寫基本資料與關注議題"],
      },
      {
        步驟: "Step 2",
        標題: "專業命盤建構與分析",
        內容: [
          "依你提供的資料排製專屬紫微命盤",
          "進行結構層級的性格與人生定位解析",
        ],
      },
      {
        步驟: "Step 3",
        標題: "一對一深度解說 (線上/實體)",
        內容: [
          "逐項說明你的命盤重點",
          "協助你理解自身模式如何影響現實選擇",
          "回答你關於方向與定位的問題",
        ],
      },
      {
        步驟: "Step 4",
        標題: "後續整理與參考重點",
        內容: ["提供重點整理 (文字或重點摘要)", "讓你在未來做決策時可反覆參考"],
      },
    ],
  };

  return (
    <>
      <header className="py-40 py-md-80">
        <div className="container">
          <div className="row align-items-center mb-40 mb-md-4">
            <div className="col-md-7 col-12">
              <div className="dot-title px-md-32 px-12 px-md-3 py-2 py-md-3 mb-0 mb-md-4">
                <p className="fs-5 fs-md-2 lh-base fw-bold lh-sm text-black-950">
                  當人生走到關鍵交叉口
                  <br />
                  你需要的是「對的時間」與「清楚的方向」
                </p>
              </div>
              <div className="mb-32 mb-md-40">
                <p className="px-12 px-md-32 fs-6 fs-md-5 lh-base">
                  透過紫微斗數×八字流年解析
                  <br />
                  協助你在事業、財運、感情與重大決策上，做出不後悔的選擇
                </p>
              </div>
              <div className="px-32 d-none d-md-block">
                <Bbutton
                  text="立即預約專屬命盤解析"
                  className="btn-bg-primary-500"
                  onClick={() => navigate("/reserve")}
                />
              </div>
            </div>
            <div className="col-md-5 col-12 px-3">
              <div className="services-header-image d-flex mb-40 mb-md-0">
                <img
                  className="img-fluid"
                  src="assets/images/services/services-header.png"
                  alt="豬大仙"
                />
              </div>
              <div className="px-32 d-block d-md-none">
                <Bbutton
                  text="立即預約專屬命盤解析"
                  className="btn-bg-primary-500"
                  onClick={() => navigate("/reserve")}
                />
              </div>
            </div>
          </div>
          <div className="header-bottom px-0 py-1">
            <div className="inner-header-bottom">
              {/* 手機版 Swiper */}
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                className="d-block d-md-none"
              >
                <SwiperSlide>
                  <div className="w-100 py-1 fs-6 text-center text-primary-500 fw-bold left-border right-border">
                    看懂你的命格結構與人生優勢配置
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-100 py-1 fs-6 text-center text-primary-500 fw-bold left-border right-border">
                    掌握流年高低起伏，避免錯誤時機
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-100 py-1 fs-6 text-center text-primary-500 fw-bold left-border right-border">
                    在結婚、創業、轉職等關鍵時刻，提前佈局
                  </div>
                </SwiperSlide>
              </Swiper>

              {/* 電腦版列表 */}
              <ul className="row fs-6 fs-md-5 text-center text-primary-500 fw-bold py-3 d-none d-md-flex">
                <li className="col-md-4 col-12 right-border">
                  看懂你的命格結構與人生優勢配置
                </li>
                <li className="col-md-4 col-12 right-border">
                  掌握流年高低起伏，避免錯誤時機
                </li>
                <li className="col-md-4 col-12">
                  在結婚、創業、轉職等關鍵時刻，提前佈局
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <section className="services-details py-40 py-md-80">
        <div className="container text-center">
          <div className="fs-4 fs-md-2 fw-bold lh-sm mb-36 mb-md-40">
            服務細節說明{" "}
          </div>

          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div
                  className="pt-40 pt-md-80 pb-80"
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                >
                  <div className="services-detail-card">
                    <div className="fs-5 fs-md-2 fw-bold lh-base lh-md-sm px-12 mb-3">
                      {service.title}
                    </div>
                    <div className="fs-6 lh-base text-start text-md-center px-12 pb-64">
                      {service.description}
                    </div>
                    <Bbutton
                      text="立即探索您專屬的服務"
                      className="btn-bg-black-950 fs-6 fs-md-5"
                      onClick={() => navigate("/reserve")}
                    />
                  </div>{" "}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="intro-header py-md-80 py-40">
        <div className="container">
          <div className="services-content-title text-center mb-36 mb-md-40">
            <div className="fs-5 fs-md-2 fw-bold lh-base lh-md-sm px-12 mb-3">
              紫微命盤精解 | 人生底層設定解析
            </div>
            <div className="fs-6 fs-md-4 fw-bold">你是否也有這樣的感覺?</div>
          </div>
          <ul className="row g-0 g-md-4 fs-6 fs-md-5 text-center mb-0 mb-md-4">
            <li className="col-12 col-md-4 py-0 py-md-3 px-1 px-md-3 my-3">
              <div className="border border-secondary-200 py-30 py-md-36 px-5 px-md-60">
                已經很努力，卻始終卡在某些模式裡反覆循環
              </div>
            </li>
            <li className="col-12 col-md-4 py-0 py-md-3 px-1 px-md-3 my-3">
              <div className="border border-secondary-200 py-30 py-md-36 px-5 px-md-60">
                嘗試過不同方向，但每一條路都走得很耗能
              </div>
            </li>
            <li className="col-12 col-md-4 py-0 py-md-3 px-1 px-md-3 my-3">
              <div className="border border-secondary-200 py-30 py-md-36 px-5 px-md-60">
                表面看起來沒問題，內在卻越來越不確定自己是誰、要往哪裡去
              </div>
            </li>
          </ul>
          <div className="p-0 p-md-3">
            <div className="p-1 border border-secondary-400 border-4">
              <div className="highlight-box fs-6 fs-md-4 text-center text-secondary-400 fw-bold py-28 py-md-30 px-20 px-md-30 border border-secondary-400">
                多數人的困境，並不是不夠努力，而是沒有理解自己的人生底層設定。
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="chk services-content py-40 py-md-80">
        <div className="container">
          <div className="chk row d-flex justify-content-center">
            <div className="chk col-4 px-0">
              <div className="dot-title">
                <div className="fs-2 fw-bold lh-sm py-3 px-32">
                  你將獲得什麼?
                </div>
              </div>
            </div>
            <div className="chk col-6 py-40 px-0">
              <div className="title fs-4 fw-bold text-secondary-400 mb-3">
                性格與行為模式解析
              </div>
              <ul className="px-2 lh-lg">
                <li className="mb-0">
                  <i className="bi bi-dot"></i>
                  你的核心性格結構與內在動機
                </li>
                <li className="mb-0">
                  <i className="bi bi-dot"></i>
                  面對責任、關係、工作時的自動反應模式
                </li>
                <li className="mb-0">
                  <i className="bi bi-dot"></i>
                  不適合長期投入、容易内耗的方向
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
