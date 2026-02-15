import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/scss/pages/_knowledge.scss";
import KnowledgeArticle from "../components/KnowledgeArticle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Knowledge() {
  // 初始化 AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // 動畫持續時間 (ms)
      once: false, // 動畫是否只執行一次
      mirror: true, // 向上滾動時是否重複動畫
    });

    // 重新整理 AOS (當內容動態變化時)
    AOS.refresh();
  }, []);

  // 添加狀態管理
  const [activeTerm, setActiveTerm] = useState("立春");
  const [termContent, setTermContent] = useState({
    title: "立春",
    text: "一年開始,五行屬木,適合立下新計劃,命理上為陽氣漸升,萬物生發之始。",
    season: 1,
  });

  // 節氣按鈕 function
  const handleTermClick = (term) => {
    setActiveTerm(term.title);
    setTermContent(term);
  };

  const solarTermsData = [
    {
      id: 1,
      title: "立春",
      text: "一年開始，五行屬木，適合立下新計劃，命理上為陽氣漸升，萬物生發之始。",
      season: 1,
    },
    {
      id: 2,
      title: "雨水",
      text: "水氣上升，五行屬水木交融，適合清理舊事，招財氣，洗滌晦氣。",
      season: 1,
    },
    {
      id: 3,
      title: "驚蟄",
      text: "雷動萬物醒，命格中藏機運，適合採取行動、開創、轉職。",
      season: 1,
    },
    {
      id: 4,
      title: "春分",
      text: "陰陽平衡，日夜均等，適合修身養性，調整身心平衡。",
      season: 1,
    },
    {
      id: 5,
      title: "清明",
      text: "祖先祭祀時節，五行土氣活絡，宜祈福求和，重視家族關係。",
      season: 1,
    },
    {
      id: 6,
      title: "穀雨",
      text: "五行木轉旺，水潤萬物，利學業、考試、創作靈感。",
      season: 1,
    },
    {
      id: 7,
      title: "立夏",
      text: "火氣漸旺，命理中屬陽盛，適合表現自己，提升社交與人氣。",
      season: 2,
    },
    {
      id: 8,
      title: "小滿",
      text: "萬物小成，命理上為能量積聚期，宜穩健、不可躁進。",
      season: 2,
    },
    {
      id: 9,
      title: "芒種",
      text: "五行火中藏金，適合種下未來的計畫與關係，利於求財。",
      season: 2,
    },
    {
      id: 10,
      title: "夏至",
      text: "陽極之日，五行火最盛，易浮躁，命理建議內斂觀察，不宜大動作。",
      season: 2,
    },
    {
      id: 11,
      title: "小暑",
      text: "屬火金交會，命理中利於突破困境，但注意爭執與情緒。",
      season: 2,
    },
    {
      id: 12,
      title: "大暑",
      text: "火氣最烈，命理上需防口舌是非，宜靜不宜動，適合修心養性。",
      season: 2,
    },

    {
      id: 13,
      title: "立秋",
      text: "金氣始生，屬收斂之氣，命理利於收心、結束拖延已久的事務。",
      season: 3,
    },
    {
      id: 14,
      title: "處暑",
      text: "暑氣漸退，命理上進入轉化期，適合重新規劃、內省反思。",
      season: 3,
    },
    {
      id: 15,
      title: "白露",
      text: "屬金氣成形，命理利於清理舊習慣、釐清人際關係。",
      season: 3,
    },
    {
      id: 16,
      title: "秋分",
      text: "陰陽再次平衡，五行金旺，利決策與分辨事物真假好壞。",
      season: 3,
    },
    {
      id: 17,
      title: "寒露",
      text: "金轉寒水，命理上為養精蓄銳期，宜低調、藏鋒不露。",
      season: 3,
    },
    {
      id: 18,
      title: "霜降",
      text: "陰氣漸重，命理提醒注意身體與情緒，適合祈安與收斂花費。",
      season: 3,
    },

    {
      id: 19,
      title: "立冬",
      text: "水氣萌動，萬物收藏，命理上宜規劃儲備、充實實力。",
      season: 4,
    },
    {
      id: 20,
      title: "小雪",
      text: "屬水中帶土，命理上象徵潛力與機會蘊藏，適合靜待時機。",
      season: 4,
    },
    {
      id: 21,
      title: "大雪",
      text: "陰氣極盛，命理提醒防負能量，宜修行靜坐、調氣養神。",
      season: 4,
    },
    {
      id: 22,
      title: "冬至",
      text: "陽氣初生，命理上利於種下願望與新目標，開始籌劃未來。",
      season: 4,
    },
    {
      id: 23,
      title: "小寒",
      text: "水氣重，命理上多阻力，建議守成、避高風險決策。",
      season: 4,
    },
    {
      id: 24,
      title: "大寒",
      text: "一年最寒，命理上是轉運臨界點，宜閉關、整理資源、等待開春。",
      season: 4,
    },
  ];

  const seasonImages = {
    1: `https://github.com/YoKingX7/ZDX-Club-Booking/blob/main/assets/images/knowledge/season-1.png?raw=true`,
    2: `https://github.com/YoKingX7/ZDX-Club-Booking/blob/main/assets/images/knowledge/season-2.png?raw=true`,
    3: `https://github.com/YoKingX7/ZDX-Club-Booking/blob/main/assets/images/knowledge/season-3.png?raw=true`,
    4: `https://github.com/YoKingX7/ZDX-Club-Booking/blob/main/assets/images/knowledge/season-4.png?raw=true`,
  };

  return (
    <>
      <header className="km-header-bg py-80 position-relative">
        <div
          className="position-absolute w-100 h-100 top-0 "
          style={{ opacity: 0.15 }}
        >
          <DotLottieReact
            src="https://lottie.host/08657889-c1e5-4d0b-8844-c01b6a963497/cPEKyYNdRW.lottie"
            autoplay
            className="position-absolute w-100 h-100 top-0"
          />
        </div>

        <div className="container text-black-800">
          <h1 className="fs-md-48 fs-2 text-md-start text-center mb-md-5 mb-32 fw-bold lh-sm text-black-800">
            命理知識
          </h1>
          <p className="fs-md-5 fs-6 text-md-start text-center">
            節氣循環，不只影響四季。
            <br />
            天時流轉，也牽動命運節奏。
            <br />
            一年24節氣，寫下你的命理故事。
          </p>
        </div>
      </header>

      {/* 24節氣區塊 */}
      <section className="py-40 py-md-80">
        <div className="container">
          <div className="km-section-title pt-4 pt-md-32 ps-12 ps-md-32 mb-40">
            <p className="fs-4 fs-md-2 lh-base lh-md-sm fw-bold lh-sm text-black-950">
              跟著豬大仙，
              <br />
              探索節氣與命理的神秘連結
            </p>
          </div>
          <div
            className="km-solar-terms row d-flex flex-md-row flex-column-reverse align-items-center"
            data-aos="flip-up"
            data-aos-anchor-placement="center-bottom"
          >
            {/* 左側內容區 */}
            <div
              className="content col-md-5 px-48 px-md-64 py-40 py-md-80"
              id="solar-term-content"
              style={{
                backgroundImage: `url('${seasonImages[termContent.season]}')`,
              }}
            >
              <p
                id="term-title"
                className="fs-2 fs-md-80 fw-bold lh-sm text-black-800 mb-32"
              >
                {termContent.title}
              </p>
              <p id="term-description" className="fs-6 fs-md-4">
                {termContent.text}
              </p>
            </div>
            {/* 右側選擇區 */}
            <div className="col-md-7 selections">
              <div className="d-flex align-items-center justify-content-between p-2 p-md-3 mb-2 mb-md-32 bg-sp">
                <div className="sel-title fs-3 fs-md-48 px-md-4 py-2 lh-1 text-center">
                  春
                </div>
                <ol className="sel-items p-0 mb-0 d-flex justify-content-start align-items-center gap-2 gap-md-3 flex-wrap flex-md-nowrap">
                  {solarTermsData
                    .filter((term) => term.season === 1)
                    .map((term) => (
                      <li
                        key={term.id}
                        type="button"
                        className={`fs-5 fs-md-4 sel-item text-center py-1 py-md-2 bg-white ${
                          activeTerm === term.title ? "active" : "opacity-50"
                        }`}
                        onClick={() => handleTermClick(term)}
                      >
                        {term.title}
                      </li>
                    ))}
                </ol>
              </div>
              <div className="d-flex align-items-center justify-content-between p-2 p-md-3 mb-2 mb-md-32 bg-su">
                <div className="sel-title fs-3 fs-md-48 px-md-4 py-2 lh-1 text-center">
                  夏
                </div>
                <ol className="sel-items p-0 mb-0 d-flex justify-content-start align-items-center gap-2 gap-md-3 flex-wrap flex-md-nowrap">
                  {solarTermsData
                    .filter((term) => term.season === 2)
                    .map((term) => (
                      <li
                        key={term.id}
                        type="button"
                        className={`fs-5 fs-md-4 sel-item text-center py-1 py-md-2 bg-white ${
                          activeTerm === term.title ? "active" : "opacity-50"
                        }`}
                        onClick={() => handleTermClick(term)}
                      >
                        {term.title}
                      </li>
                    ))}
                </ol>
              </div>
              <div className="d-flex align-items-center justify-content-between p-2 p-md-3 mb-2 mb-md-32 bg-fa">
                <div className="sel-title fs-3 fs-md-48 px-md-4 py-2 lh-1 text-center">
                  秋
                </div>
                <ol className="sel-items p-0 mb-0 d-flex justify-content-start align-items-center gap-2 gap-md-3 flex-wrap flex-md-nowrap">
                  {solarTermsData
                    .filter((term) => term.season === 3)
                    .map((term) => (
                      <li
                        key={term.id}
                        type="button"
                        className={`fs-5 fs-md-4 sel-item text-center py-1 py-md-2 bg-white ${
                          activeTerm === term.title ? "active" : "opacity-50"
                        }`}
                        onClick={() => handleTermClick(term)}
                      >
                        {term.title}
                      </li>
                    ))}
                </ol>
              </div>
              <div className="d-flex align-items-center justify-content-between p-2 p-md-3 mb-2 mb-md-32 bg-wi">
                <div className="sel-title fs-3 fs-md-48 px-md-4 py-2 lh-1 text-center">
                  冬
                </div>
                <ol className="sel-items p-0 mb-0 d-flex justify-content-start align-items-center gap-2 gap-md-3 flex-wrap flex-md-nowrap">
                  {solarTermsData
                    .filter((term) => term.season === 4)
                    .map((term) => (
                      <li
                        key={term.id}
                        type="button"
                        className={`fs-5 fs-md-4 sel-item text-center py-1 py-md-2 bg-white ${
                          activeTerm === term.title ? "active" : "opacity-50"
                        }`}
                        onClick={() => handleTermClick(term)}
                      >
                        {term.title}
                      </li>
                    ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 人生圖譜 */}
      <section className="timeline py-40 py-md-80">
        <div className="container">
          <div className="km-section-title pt-4 pt-md-32 ps-12 ps-md-32 mb-40">
            <p className="fs-4 fs-md-2 lh-base lh-md-sm fw-bold lh-sm text-black-950">
              節氣人生圖譜，看見時序中的自己
            </p>
            <p className="">
              透過二十四節氣，映照人生階段的節奏與智慧，感受自然與內在的同频共振。
            </p>
          </div>
          <ol className="timeline-items px-0">
            <li className="timeline-item d-md-row d-flex align-items-center justify-content-start justify-content-md-end">
              <div className="timeline-tag fs-md-2 fs-4 fw-bold lh-sm text-black-800 col-md-2 d-flex justify-content-center">
                <p className="tag-line d-flex justify-content-center align-items-center mb-0">
                  嬰
                </p>
              </div>
              <div
                className="timeline-card col col-md-5"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <div className="timeline-content py-3 py-md-36 ps-36 ps-md-48 pe-3 pe-md-4 d-flex justify-content-between align-items-center gap-md-3 gap-1">
                  <div className="timeline-text">
                    <p className="fs-5 fs-md-2 lh-base lh-sm fw-bold text-black-800 mb-0">
                      嬰兒期
                    </p>
                    <p className="fs-6 fs-md-5 fw-bold text-primary mb-0">
                      立春| 雨水 | 驚蟄
                    </p>
                    <p className="text-black-600 mb-0">
                      萬物初生，人生開端，學會感受世界。
                    </p>
                  </div>
                  <div className="timeline-img-div">
                    <img
                      className="timeline-img"
                      src="assets/images/knowledge/life-stage-1.png"
                      alt="嬰兒期"
                    />
                  </div>
                </div>
              </div>
            </li>

            <li className="timeline-item d-md-row d-flex flex-md-row-reverse align-items-center justify-content-start justify-content-md-end">
              <div className="timeline-tag fs-md-2 fs-4 fw-bold lh-sm text-black-800 col-md-2 d-flex justify-content-center">
                <p className="tag-line d-flex justify-content-center align-items-center mb-0">
                  青
                </p>
              </div>
              <div
                className="timeline-card col col-md-5"
                data-aos="fade-right"
                data-aos-anchor-placement="bottom-bottom"
              >
                <div className="timeline-content py-3 py-md-36 ps-36 ps-md-48 pe-3 pe-md-4 d-flex justify-content-between align-items-center gap-md-3 gap-1">
                  <div className="timeline-text">
                    <p className="fs-5 fs-md-2 lh-base lh-sm fw-bold text-black-800 mb-0">
                      青年期
                    </p>
                    <p className="fs-6 fs-md-5 fw-bold text-primary mb-0">
                      春分 | 清明 | 穀雨 | 立夏
                    </p>
                    <p className="text-black-600 mb-0">
                      陽氣漸旺，意志堅定，發展自我。
                    </p>
                  </div>
                  <div className="timeline-img-div">
                    <img
                      className="timeline-img"
                      src="assets/images/knowledge/life-stage-2.png"
                      alt="青年期"
                    />
                  </div>
                </div>
              </div>
            </li>

            <li className="timeline-item d-md-row d-flex align-items-center justify-content-start justify-content-md-end">
              <div className="timeline-tag fs-md-2 fs-4 fw-bold lh-sm text-black-800 col-md-2 d-flex justify-content-center">
                <p className="tag-line d-flex justify-content-center align-items-center mb-0">
                  壯
                </p>
              </div>
              <div
                className="timeline-card col col-md-5"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <div className="timeline-content py-3 py-md-36 ps-36 ps-md-48 pe-3 pe-md-4 d-flex justify-content-between align-items-center gap-md-3 gap-1">
                  <div className="timeline-text">
                    <p className="fs-5 fs-md-2 lh-base lh-sm fw-bold text-black-800 mb-0">
                      壯年期
                    </p>
                    <p className="fs-6 fs-md-5 fw-bold text-primary mb-0">
                      小滿 | 芒種 | 夏至 | 小暑
                    </p>
                    <p className="text-black-600 mb-0">
                      成就與挑戰並存，收與放皆須智慧。
                    </p>
                  </div>
                  <div className="timeline-img-div">
                    <img
                      className="timeline-img"
                      src="assets/images/knowledge/life-stage-3.png"
                      alt="壯年期"
                    />
                  </div>
                </div>
              </div>
            </li>

            <li className="timeline-item d-md-row d-flex flex-md-row-reverse align-items-center justify-content-start justify-content-md-end">
              <div className="timeline-tag fs-md-2 fs-4 fw-bold lh-sm text-black-800 col-md-2 d-flex justify-content-center">
                <p className="tag-line d-flex justify-content-center align-items-center mb-0">
                  成
                </p>
              </div>
              <div
                className="timeline-card col col-md-5"
                data-aos="fade-right"
                data-aos-anchor-placement="bottom-bottom"
              >
                <div className="timeline-content py-3 py-md-36 ps-36 ps-md-48 pe-3 pe-md-4 d-flex justify-content-between align-items-center gap-md-3 gap-1">
                  <div className="timeline-text">
                    <p className="fs-5 fs-md-2 lh-base lh-sm fw-bold text-black-800 mb-0">
                      成熟期
                    </p>
                    <p className="fs-6 fs-md-5 fw-bold text-primary mb-0">
                      大暑 | 立秋 | 處暑 | 白露
                    </p>
                    <p className="text-black-600 mb-0">
                      經歷高峰後的整理期，迎向內在穩定。
                    </p>
                  </div>
                  <div className="timeline-img-div">
                    <img
                      className="timeline-img"
                      src="assets/images/knowledge/life-stage-4.png"
                      alt="成熟期"
                    />
                  </div>
                </div>
              </div>
            </li>

            <li className="timeline-item d-md-row d-flex align-items-center justify-content-start justify-content-md-end">
              <div className="timeline-tag fs-md-2 fs-4 fw-bold lh-sm text-black-800 col-md-2 d-flex justify-content-center">
                <p className="tag-line d-flex justify-content-center align-items-center mb-0">
                  晚
                </p>
              </div>
              <div
                className="timeline-card col col-md-5"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              >
                <div className="timeline-content py-3 py-md-36 ps-36 ps-md-48 pe-3 pe-md-4 d-flex justify-content-between align-items-center gap-md-3 gap-1">
                  <div className="timeline-text">
                    <p className="fs-5 fs-md-2 lh-base lh-sm fw-bold text-black-800 mb-0">
                      晚年期
                    </p>
                    <p className="fs-6 fs-md-5 fw-bold text-primary mb-0">
                      秋分 寒露 | 霜降 | 立冬
                    </p>
                    <p className="text-black-600 mb-0">
                      外放轉為內省，智慧與慈悲的階段。
                    </p>
                  </div>
                  <div className="timeline-img-div">
                    <img
                      className="timeline-img"
                      src="assets/images/knowledge/life-stage-5.png"
                      alt="晚年期"
                    />
                  </div>
                </div>
              </div>
            </li>

            <li className="timeline-item d-md-row d-flex flex-md-row-reverse align-items-center justify-content-start justify-content-md-end">
              <div className="timeline-tag fs-md-2 fs-4 fw-bold lh-sm text-black-800 col-md-2 d-flex justify-content-center">
                <p className="tag d-flex justify-content-center align-items-center mb-0">
                  歸
                </p>
              </div>
              <div
                className="timeline-card col col-md-5"
                data-aos="fade-right"
                data-aos-anchor-placement="bottom-bottom"
              >
                <div className="timeline-content py-3 py-md-36 ps-36 ps-md-48 pe-3 pe-md-4 d-flex justify-content-between align-items-center gap-md-3 gap-1">
                  <div className="timeline-text">
                    <p className="fs-5 fs-md-2 lh-base lh-sm fw-bold text-black-800 mb-0">
                      歸藏期
                    </p>
                    <p className="fs-6 fs-md-5 fw-bold text-primary mb-0">
                      小雪|大雪|冬至|小寒|大寒
                    </p>
                    <p className="text-black-600 mb-0">
                      潛藏與準備的時節，為下一次的誕生儲備能量。
                    </p>
                  </div>
                  <div className="timeline-img-div">
                    <img
                      className="timeline-img"
                      src="assets/images/knowledge/life-stage-6.png"
                      alt="歸藏期"
                    />
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* 命理隨手記 */}

      <KnowledgeArticle />
    </>
  );
}
