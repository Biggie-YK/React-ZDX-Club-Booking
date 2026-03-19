import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Carousel } from "bootstrap";

export default function ServiceCarousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!carouselRef.current) return;
    new Carousel(carouselRef.current);
    carouselRef.current.addEventListener("slid.bs.carousel", (e) => {
      setCarouselIndex(e.to);
    });
  }, []);

  return (
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
          className="carousel slide mb-4 mb-md-0"
          data-bs-ride="carousel"
          ref={carouselRef}
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active bg-position-left
                "
              style={{
                backgroundImage: "url(assets/images/index/banner-1.png)",
              }}
            >
              <div className=" d-flex align-items-center h-100 ">
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

        <ul className="my-indicators list-unstyled mb-0 d-lg-none  align-items-end row ">
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
  );
}
