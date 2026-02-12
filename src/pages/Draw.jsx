import { Modal } from "bootstrap";
import Swal from "sweetalert2";
import "animate.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useRef, useState } from "react";
import picks from "../assets/picks.json";

export default function Draw() {
  const [successCount, setSuccessCount] = useState(0);
  const resultsTextRef = useRef(null);
  const drawModal = useRef(null);
  const [hasDrawPicks, setHasDrawPicks] = useState(false);
  const [pickNum, setPickNum] = useState(0);
  const results = [
    {
      url: "https://lottie.host/26747bda-1d8f-4126-bc34-8f8d91293586/Qwc2ZB1vku.lottie",
      text: "聖筊",
    },
    {
      url: "https://lottie.host/5cf67520-0482-4983-a632-7f4a469edc8b/fA2qfqMmUx.lottie",
      text: "蓋筊",
    },
    {
      url: "https://lottie.host/5c9f1d53-0676-4afc-b59b-91f01d307ca4/h9ipvPpd2W.lottie",
      text: "笑筊",
    },
  ];
  const [result, setResult] = useState(results[0]);
  const [showText, setShowText] = useState(false);
  const [imgKey, setImgKey] = useState(0);
  const [textKey, setTextKey] = useState(-1);
  useEffect(() => {
    drawModal.current = new Modal(drawModal.current);
  }, []);

  function handleDrawPicks(isSecondRound) {
    setShowText(false);
    const i = 0;
    // const i = Math.floor(Math.random() * 3);
    setResult(results[i]);
    setImgKey((prev) => prev + 1);
    if (isSecondRound) {
      if (i === 0) {
        setSuccessCount((prev) => prev + 1);
      }
    }
  }

  function handleOpenModal() {
    drawModal.current.show();
    handleDrawPicks(false);
  }

  function handleComplete() {
    setTextKey((prev) => prev - 1);
    setShowText(true);
  }
  function handleAnimationEnd() {
    if (successCount > 0 && successCount < 3) {
      Swal.fire({
        title: `目前已求得聖筊：${successCount}`,
        icon: "warning",
        confirmButtonColor: "rgba(134, 102, 84, 1)",
        confirmButtonText: "繼續擲杯",
      }).then((result) => {
        if (result.isConfirmed) {
          handleDrawPicks(true);
        }
      });
    } else if (successCount === 3) {
      Swal.fire({
        title: `目前已求得聖筊：${successCount}`,
        icon: "success",
        confirmButtonColor: "rgba(134, 102, 84, 1)",
        confirmButtonText: "前往解籤",
      }).then((result) => {
        if (result.isConfirmed) {
          setHasDrawPicks(true);
        }
      });
    } else {
      if (result.text === "聖筊") {
        Swal.fire({
          title: "聖筊 已可求籤",
          icon: "success",
          confirmButtonColor: "rgba(134, 102, 84, 1)",
          confirmButtonText: "開始求籤",
        }).then((result) => {
          if (result.isConfirmed) {
            const i = Math.floor(Math.random() * 100 + 1);
            setPickNum(i);
            Swal.fire({
              title: `求得籤詩 第${i}首`,
              text: "您必須擲出3次聖筊,方能解籤",
              icon: "info",
              confirmButtonColor: "rgba(134, 102, 84, 1)",
              confirmButtonText: "確認賜籤",
            }).then((result) => {
              if (result.isConfirmed) {
                handleDrawPicks(true);
              }
            });
          }
        });
      } else {
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
        });
      }
    }
  }
  // useEffect(() => {
  //   if (successCount > 0) {
  //     Swal.fire({
  //       title: `目前已求得聖筊：${successCount + 1}`,
  //       icon: "success",
  //       confirmButtonColor: "rgba(134, 102, 84, 1)",
  //       confirmButtonText: "繼續擲杯",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         handleDrawPicks(true);
  //       }
  //     });
  //   }
  // }, [successCount]);

  return (
    <>
      <div className="container">
        <section className="draw py-80">
          <div className="row py-3 ">
            <div className="col-5">
              <h6 className=" mt-4 mb-0 fw-bold text-primary text-end ">
                線上服務
              </h6>
            </div>
            <div className="col-7">
              <h1 className="mb-0 fw-bold">線上求籤</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-3 ">
              <div className="border border-secondary-200 position-relative">
                <h3 className="text-primary position-absolute draw-hint fw-bold">
                  求籤指引
                </h3>
                <img
                  className="sign-tube-img"
                  src="../assets/images/draw/sign-tube.png"
                  alt="籤筒"
                />
              </div>
            </div>
            <div className="col-7">
              <div className="pt-4">
                <p className="mb-12"> 請先靜下心來，在心中默念想詢問的事情。</p>
                <p className="mb-12">
                  準備好後點擊求籤，系統將隨機抽出一支籤詩，作為指引與參考，請以平常心閱讀。
                </p>
                <p className="mb-12">
                  抽出籤號後，需連續擲出三個聖筊，方可進行解籤。
                  <br />
                </p>
                <p className="mb-12">若未達三個，請重新擲筊以示確認。</p>
              </div>
              <div
                className="draw-btn border border-secondary-200 d-flex justify-content-center position-relative"
                onClick={handleOpenModal}
              >
                <div
                  className="draw-btn-box py-2 border border-primary position-absolute text-center
                "
                >
                  <div className="border border-primary py-2">
                    <h3 className="text-primary  draw-btn-label fw-bold">
                      擲筊
                    </h3>
                  </div>
                </div>
                <img
                  className="draw-btn-img object-fit-cover"
                  src="../assets/images/draw/draw-btn.png"
                  alt="手拿筊"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="intro   position-relative">
          <div className="intro-jp d-flex  border-bottom border-primary">
            <div className="me-36">
              <img
                className="intro-jp-img object-fit-cover"
                src="../assets/images/draw/intro-jp.png"
                alt="日本神社巫女"
              />
              <div className="intro-jp-text py-36 px-4">
                <p className="mb-4">
                  御神籤(日語：御神籤∕おみくじomikuji)，也稱神籤，是日本傳統神社、佛寺提供用來祈願、占卜個人運勢的求籤活動。
                </p>
                <p>
                  參加這一活動者通常要先向寺社支付較少的的賽錢(香火錢)，稱為
                  「初穂料」，隨後在寺社提供的抽籤盒中隨機抽取籤紙。籤紙上會以漢字書寫「吉」、「凶」等占卜結果，並附有漢詩或和歌以及現代日語解說。時至今日，為了服務外國人遊客，也有著名寺社會提供用英語書寫的籤紙。
                </p>
              </div>
            </div>
            <div className="intro-title fw-bold text-primary ms-4">日本</div>
            <div className="intro-title fw-bold text-primary d-flex align-items-center ms-4">
              臺灣
            </div>
          </div>
          <div className="intro-tw d-flex  border-top border-primary position-absolute justify-content-end pt-5">
            <div>
              <img
                className="intro-jp-img object-fit-cover"
                src="../assets/images/draw/intro-tw.png"
                alt="日本神社巫女"
              />
              <div className="intro-jp-text py-36 px-4">
                <p className="mb-4">
                  在福建、辜灣、潮汕地區，籤筒供人直接抽取一支籤條，閩、臺、潮等地的聖籤長約40至50公分，寬3公分，厚約0.5公分，一般為竹片或木片削成，放於籤筒內，抽籤者應從籤筒抽取一支聖籤。
                </p>
                <p>
                  而抽出聖籤後，聖籤上所刻或寫的干支號碼就是籤詩的首別號碼。抽取籤條之後，祈福問事者必須確定此聖籤為「神佛欽定」。確定方式即為擲筊。呈現一正一反的聖筊即可以認定此籤為神佛認定，若非，則必須將此聖籤放置籤筒，重新再抽。有些人的抽籤方法，把笑筊忽略不計，只看成是神靈喜笑，就重新擲。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="notice py-80">
          <div className="d-flex ">
            <img
              className="notice-img me-4"
              src="../assets/images/draw/notice.png"
              alt="豬大仙要你注意"
            />
            <div className="notice-hints w-100">
              <div className="p-4 ">
                <h2 className="pb-36 mb-0 border-bottom border-secondary">
                  求籤時，須留意
                </h2>
                <ul className="pt-36">
                  <li>
                    <div
                      className="d-flex align-items-center 
                    justify-content-between mb-2
                    "
                    >
                      <h4 className="ps-12 py-3 mb-0">
                        一事一籤，避免反覆求問
                      </h4>
                      <img src="../assets/images/index/btn-social.png" alt="" />
                    </div>
                    <p className="ps-12 notice-hints-words mb-4">
                      多次求籤容易讓心情更加混亂，也可能讓原本的提醒失去意義。抽到籤後，建議先理解籤意、冷靜思考，再決定後續行動。
                    </p>
                  </li>
                  <li>
                    <div
                      className="d-flex align-items-center 
                    justify-content-between mb-2
                    "
                    >
                      <h4 className="ps-12 py-3 mb-0">勿在不適當時機抽籤</h4>
                      <img src="../assets/images/index/btn-social.png" alt="" />
                    </div>
                    <p className="ps-12 notice-hints-words mb-4">
                      請避免在情緒不穩、疲倦、醉酒或精神緊張時求籤。籤意易受心境影響，建議先靜心再求，這樣更容易領會籤詩提醒的意義。
                    </p>
                  </li>
                  <li>
                    <div
                      className="d-flex align-items-center 
                    justify-content-between mb-2
                    "
                    >
                      <h4 className="ps-12 py-3 mb-0">勿以籤詩代替重要決策</h4>
                      <img src="../assets/images/index/btn-social.png" alt="" />
                    </div>
                    <p className="ps-12 notice-hints-words mb-4">
                      籤詩之意，在於提醒與啟發,並非具體指令。凡涉及醫療診斷、法律判斷、重大投資、財務規劃、生涯抉擇等重要事項，皆不宜僅憑籤詩內容作為決策依據。
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="modal draw-modal" tabIndex="-1" ref={drawModal}>
          <div className="modal-dialog modal-lg-plus modal-dialog-centered">
            {!hasDrawPicks ? (
              <div
                className="modal-content position-relative px-5"
                style={{
                  background: "url(../assets/images/index/nav-bg.png)",
                }}
              >
                <div className="d-flex">
                  <DotLottieReact
                    key={imgKey}
                    src={result.url}
                    autoplay
                    className="draw-modal-yes-img"
                    fit="cover"
                    dotLottieRefCallback={(dotLottie) => {
                      if (!dotLottie) return;
                      dotLottie.addEventListener("complete", handleComplete);
                    }}
                  />
                  {showText && (
                    <h2
                      key={textKey}
                      className="draw-modal-title position-absolute
                    text-primary animate__animated animate__fadeIn"
                      ref={resultsTextRef}
                      onAnimationEnd={handleAnimationEnd}
                    >
                      {result.text}
                    </h2>
                  )}

                  <button
                    className="draw-modal-close border-0  bg-transparent"
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <img
                      src="../assets/images/draw/icon-close.png"
                      alt="關視窗按鈕"
                    />
                  </button>
                </div>
              </div>
            ) : (
              <div
                className="modal-content position-relative px-5"
                style={{
                  background: "url(../assets/images/index/nav-bg.png)",
                }}
              >
                <div className="pt-5">
                  <div className="pt-64 d-flex">
                    <h2 className="draw-modal-title vertical-text m-0 text-primary me-4">
                      解籤
                    </h2>
                    <div className="w-100 px-40">
                      <h2 className="text-primary mb-40 fw-bold">
                        第{pickNum}籤
                      </h2>
                      <p className="fs-1 fw-bold mb-40">
                        {picks[pickNum - 1]["籤詩"]}
                      </p>
                      <p className="pick-explain mb-40 fw-bold">
                        {picks[pickNum - 1]["中文解析"]}
                      </p>
                      <p className="lh-1 mb-40">尚有其餘疑問，欲再請示？</p>

                      <div className="d-flex px-80 justify-content-between align-items-center">
                        <div className="draw-modal-again-btn">
                          <img
                            className="draw-modal-again-img"
                            src="../assets/images/draw/draw-again.png"
                            alt="再抽一次？"
                          />
                          <div
                            className="border border-secondary
                        px-2
                        "
                          >
                            <div
                              className="border border-secondary 
                          text-center
                          "
                            >
                              再次求籤
                            </div>
                          </div>
                        </div>
                        <h2 className="text-primary">或者</h2>
                        <div className="draw-modal-again-btn">
                          <img
                            className="draw-modal-again-img"
                            src="../assets/images/draw/others.png"
                            alt="再抽一次？"
                          />
                          <div
                            className="border border-secondary
                        px-2
                        "
                          >
                            <div
                              className="border border-secondary 
                          text-center
                          "
                            >
                              想了解其他籤詩?
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
