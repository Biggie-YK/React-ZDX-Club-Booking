import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Banner from "../components/Home/Banner";
import ServiceCarousel from "../components/Home/serviceCarousel";
import CommentSwiper from "../components/Home/CommentSwiper";
import HomeCalender from "../components/Home/HomeCalender";
import QAcontents from "../components/Home/QAcontents";
import Process from "../components/Home/Process";

export default function Home() {
  return (
    <>
      <Banner />

      <ServiceCarousel />

      <CommentSwiper />

      <Process />

      <HomeCalender />

      <QAcontents />
    </>
  );
}
