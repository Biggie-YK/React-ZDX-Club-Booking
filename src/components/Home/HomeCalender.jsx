import { useState } from "react";
import { jueQiImg } from "../../../htmlPages/Farmer-Calendar/sixtyJiaziDays";
import { Lunar } from "lunar-javascript";
import FarmerCalender from "../FarmerCalender";
import { Oval } from "react-loader-spinner";

export default function HomeCalender() {
  const [date, setDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  const lunar = Lunar.fromDate(date);
  const jueQi = lunar.getPrevJieQi()._p.name;
  const jueQiStr =
    `${lunar.getPrevJieQi()._p.name}(國曆)${lunar.getPrevJieQi().getSolar().toYmd()}~${lunar.getNextJieQi().getSolar().toYmd()}`.replace(
      /-/g,
      "/",
    );
  const lunarDetail = {
    year: lunar.getYearInGanZhiByLiChun(),
    month: lunar.getMonthInChinese(),
    day: lunar.getDayInChinese(),
    dayChongDesc: lunar.getDayChongDesc(),
    dayYi: lunar.getDayYi(),
    dayJi: lunar.getDayJi(),
    daySha: lunar.getDaySha(),
    jueQi: jueQi,
    jueQiStr: jueQiStr,
  };

  return (
    <section className="lunar-calendar bg-transparent">
      <div className="d-block d-md-flex ">
        <div className=" me-md-60 lunar-calendar-white ">
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
          <FarmerCalender setDate={setDate} setIsLoading={setIsLoading} />
        </div>
        {isLoading ? (
          <div className="lunar-calendar-oval d-flex w-50 justify-content-center align-items-center">
            <Oval
              visible={true}
              height="300"
              width="300"
              secondaryColor="#866654"
              color="#DDBEA9"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <div className="flex-fill">
            <div
              className="solar-term py-md-64 p-4 position-relative  mb-4 "
              style={{
                backgroundImage: `url(${jueQiImg[lunarDetail?.jueQi]})`,
              }}
            >
              <h2 className="fs-lg-80 fs-3 solar-term-title d-inline-block p-md-4 p-3 text-nowrap">
                {lunarDetail.jueQi}
              </h2>
            </div>
            <div className="detail  pt-36  pb-md-0 pb-40 ">
              <div className="d-flex mb-md-40 mb-4 flex-wrap flex-lg-nowrap">
                <div className="me-md-40 me-12">
                  <div className="py-2 year  fs-7 text-center text-primary">
                    {date.getFullYear()}
                  </div>
                  <div className="border border-primary py-md-1 py-2 px-4 text-center text-primary">
                    <h6 className="mb-2 fs-40">{date.getDate()}</h6>
                    <h6 className="mb-0 fs-5">{date.getMonth() + 1}月</h6>
                  </div>
                  <p className="text-white text-nowrap mb-0 fs-7 bg-primary text-center py-2 px-3">
                    民國{date.getFullYear() - 1911}年
                  </p>
                </div>
                <ul className="list-unstyled flex-fill">
                  <li>
                    <p className="fs-7 p-md-4 py-md-3 p-3 mb-0 border-bottom border-black-300">
                      國曆：{date.getFullYear()}年{date.getMonth() + 1}月
                      {date.getDate()}日
                    </p>
                  </li>
                  <li>
                    <p className="fs-7 p-md-4 py-md-3 p-3 mb-0 border-bottom border-black-300">
                      農曆：{lunarDetail?.year}年{lunarDetail?.month}月
                      {lunarDetail?.day}
                    </p>
                  </li>
                  <li>
                    <p className="fs-7 p-md-4 py-md-3 p-3 mb-0 border-bottom border-black-300">
                      節氣：{lunarDetail?.jueQiStr}
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
                      {lunarDetail?.dayChongDesc}
                    </span>
                  </div>
                </li>
                <li>
                  <div className="d-flex p-4 align-items-center border border-primary">
                    <h5 className="fs-md-48 fs-2 mb-0 text-primary me-md-2 me-3">
                      宜
                    </h5>
                    <div className="d-flex flex-wrap   ">
                      {lunarDetail?.dayYi?.map((item, i) => {
                        return (
                          <span className="fs-7 px-2 py-1" key={i}>
                            {item}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex p-4 align-items-center border border-primary">
                    <h5 className="fs-md-48 fs-2 mb-0 text-primary me-md-2 me-3">
                      煞
                    </h5>
                    <span className="fs-7 px-2 py-1">
                      {lunarDetail?.daySha}方
                    </span>
                  </div>
                </li>
                <li>
                  <div className="d-flex p-4 align-items-center border border-primary">
                    <h5 className="fs-md-48 fs-2 mb-0 text-primary me-md-2 me-3">
                      忌
                    </h5>
                    <div className="d-flex flex-wrap text-nowrap ">
                      {lunarDetail?.dayJi?.map((item, i) => {
                        return (
                          <span className="fs-7 px-2 py-1" key={i}>
                            {item}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
