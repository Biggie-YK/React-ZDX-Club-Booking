import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router";

export default function Banner() {
  return (
    <header
      className="header  py-md-160 py-80  position-relative "
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
          <Link
            to="/reserve"
            className="btn-inside-border py-3 d-block text-center"
          >
            立即探索您專屬的服務
          </Link>
        </button>
      </div>
    </header>
  );
}
