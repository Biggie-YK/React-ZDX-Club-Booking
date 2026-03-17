import "../assets/scss/pages/_services.scss";
import Button from "../components/Button/button";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import servicesData from "../api/servicesData";
import ItemList from "../components/Services/ItemList";

export default function Services() {
  const navigate = useNavigate();

  const [servicesId, setServicesId] = useState(0);

  const onHandleServices = (id) => {
    setServicesId(id);
  };

  return (
    <>
      <header className="py-40 py-md-80">
        <div className="container">
          <div className="row align-items-center mb-40 mb-md-4">
            <div className="col-md-7">
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
                <Button
                  text="立即預約專屬命盤解析"
                  className="btn-bg-primary-500"
                  onClick={() => navigate("/reserve")}
                />
              </div>
            </div>
            <div className="col-md-5 px-3">
              <div className="services-header-image d-flex mb-40 mb-md-0">
                <img
                  className="img-fluid"
                  src="assets/images/services/services-header.png"
                  alt="豬大仙"
                />
              </div>
              <div className="px-32 d-block d-md-none">
                <Button
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
                <li className="col-md-4 right-border">
                  看懂你的命格結構與人生優勢配置
                </li>
                <li className="col-md-4 right-border">
                  掌握流年高低起伏，避免錯誤時機
                </li>
                <li className="col-md-4">
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
            服務細節說明
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
            {servicesData.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="pt-40 pt-md-80 pb-80"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                  onClick={() => onHandleServices(index)}
                >
                  <div className="services-detail-card">
                    <div className="fs-5 fs-md-2 fw-bold lh-base lh-md-sm px-12 mb-3">
                      {item.title}
                    </div>
                    <div className="fs-6 lh-base text-start text-md-center px-12 pb-64">
                      {item.description}
                    </div>
                    <Button
                      text={servicesData[index].brnContent}
                      className="btn-bg-black-950 fs-6 fs-md-5"
                      onClick={() => navigate("/reserve")}
                    />
                  </div>
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
              {servicesData[servicesId].title}
            </div>
            <div className="fs-6 fs-md-4 fw-bold">你是否也有這樣的感覺?</div>
          </div>
          <ul className="row g-0 g-md-4 fs-6 fs-md-5 text-center mb-0 mb-md-4">
            {servicesData[servicesId].contentData.csard.map((item, index) => (
              <li
                key={index}
                className="col-md-4 py-0 py-md-3 px-1 px-md-3 my-3"
              >
                <div className="border border-secondary-200 py-30 py-md-36 px-5 px-md-60">
                  {item}
                </div>
              </li>
            ))}
          </ul>
          <div className="p-0 p-md-3">
            <div className="p-1 border border-secondary-400 border-4">
              <div className="highlight-box fs-6 fs-md-4 text-center text-secondary-400 fw-bold py-28 py-md-30 px-20 px-md-30 border border-secondary-400">
                {servicesData[servicesId].contentData.highlightBox}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-content pt-40 pb-0 py-md-80 border-top border-black-600">
        <div className="container">
          {/* 獲得 */}
          <div className="row justify-content-center">
            <div className="col-md-4 px-0">
              <div className="dot-title">
                <div className="fs-4 fs-md-2 fw-bold lh-base lh-md-sm py-0 py-md-3 px-4 px-md-32">
                  你將獲得什麼?
                </div>
              </div>
            </div>
            <div className="col-md-6 py-2 py-md-40 px-4 px-md-0">
              {servicesData[servicesId].contentData.get.map((item, index) => (
                <div key={index} className="mb-32 mb-md-40">
                  <div className="title fs-5 fs-md-4 fw-bold text-secondary-400 mb-2 mb-md-3">
                    {item.getTitle}
                  </div>
                  <ItemList Items={item.getList} />
                </div>
              ))}
            </div>
          </div>

          {/* 所需資料 */}
          <div className="row justify-content-center border-top border-black-400 py-40">
            <div className="col-md-4 px-0">
              <div className="dot-title">
                <div className="fs-4 fs-md-2 fw-bold lh-base lh-md-sm py-12 py-md-3 px-4 px-md-32 mb-0">
                  {servicesData[servicesId].title.split("|")[0].trim()}
                  <div className="fs-5 fw-bold text-secondary-400 py-0 py-md-2">
                    所需資料
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 py-2 py-md-40 px-4 px-md-0">
              <div className="mb-0 mb-md-40 fs-6">
                <div className="title fs-6 text-black-800 mb-3">
                  {
                    servicesData[servicesId].contentData.needData[0]
                      .needDataTitle
                  }
                </div>
                <div className="text-b">
                  <ItemList
                    Items={
                      servicesData[servicesId].contentData.needData[0]
                        .needDataList
                    }
                  />
                </div>
                <div className="remark mt-3 mb-0">
                  {servicesData[servicesId].contentData.needData[0].remark}
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center border-top border-black-400 pt-40 pb-0 py-md-40">
            <div className="col-md-4 px-0">
              <div className="dot-title">
                <div className="fs-4 fs-md-2 fw-bold lh-base lh-md-sm py-12 py-md-3 px-4 px-md-32 mb-0">
                  服務流程說明
                </div>
              </div>
            </div>
            <div className="col-md-6 py-3 py-md-40 px-4 px-md-0">
              <div className="mb-40 fs-6 text-black-600">
                <div className="mb-4 mb-md-48">
                  {servicesData[servicesId].contentData.steps.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="d-flex flex-column flex-md-row mb-32"
                      >
                        <div className="fs-6 fs-md-1 fw-bold lh-1 text-secondary-200 pe-36 mb-3">
                          Step{item.id}
                        </div>
                        <div>
                          <div className="fs-5 fw-bold text-secondary-400">
                            {item.title}
                          </div>
                          <ItemList Items={item.items} />
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div className="d-flex flex-column align-items-center align-items-md-start">
                <Button
                  text={servicesData[servicesId].brnContent}
                  className="btn-bg-primary-500 mb-36 d-block"
                  onClick={() => navigate("/reserve")}
                />
                <div className="text-nowrap fs-6 fs-md-5 fw-bold text-secondary-400">
                  {servicesData[servicesId].footerContent}
                </div>

                <div className="text-black-600">名額有限，採預約制</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
