import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function CommentSwiper() {

  return (
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

        <div className="d-none d-md-block">
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
                <div className="card-title fw-bold mb-4">Ken(設計師，33歲)</div>
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
  );
}
