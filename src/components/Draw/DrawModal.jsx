import { useRef, useState, useEffect } from "react";
import Swal from "sweetalert2";
import Nzh from "nzh";
import picks from "../../assets/picks.json";
import { useNavigate } from "react-router";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Modal } from "bootstrap";

export default function DrawModal() {
  const results = [
    {
      url: "https://lottie.host/26747bda-1d8f-4126-bc34-8f8d91293586/Qwc2ZB1vku.lottie",
      text: "聖筊",
      weight: 90,
    },
    {
      url: "https://lottie.host/5cf67520-0482-4983-a632-7f4a469edc8b/fA2qfqMmUx.lottie",
      text: "蓋筊",
      weight: 5,
    },
    {
      url: "https://lottie.host/5c9f1d53-0676-4afc-b59b-91f01d307ca4/h9ipvPpd2W.lottie",
      text: "笑筊",
      weight: 5,
    },
  ];
  const drawModal = useRef(null);
  const nextActionRef = useRef(null);
  const resultsTextRef = useRef(null);
  const [hasThreeSuccess, setHasThreeSuccess] = useState(false);
  const [showText, setShowText] = useState(false);
  const [result, setResult] = useState(results[0]);
  const [imgKey, setImgKey] = useState(0);
  const [successCount, setSuccessCount] = useState(0);
  const [pickNum, setPickNum] = useState(0);
  const [textKey, setTextKey] = useState(-1);
  const navigate = useNavigate();
  const modalInstance = useRef(null);

useEffect(() => {
  if (!drawModal.current) return;

  modalInstance.current = Modal.getOrCreateInstance(drawModal.current, {
    backdrop: "static",
  });

  return () => {
    modalInstance.current?.dispose();
  };
}, []);

  function handleOtherPicks() {
    modalInstance.current.hide();
    navigate("/other-picks");
  }

  function handleDrawAgain() {
    setSuccessCount(0);
    setHasThreeSuccess(false);
    handleTossingBlocks(false);
  }

  function handleCloseModal() {
    modalInstance.current.hide();
  }

  function handleAnimationEnd() {
    if (nextActionRef.current) {
      nextActionRef.current();
      nextActionRef.current = null;
    }
  }

  function getRandom(range) {
    return Math.floor(Math.random() * range);
  }

  function handleDrawPicks() {
    const i = getRandom(100) + 1;
    setPickNum(i);
    Swal.fire({
      title: `求得籤詩 第${Nzh.hk.encodeS(i)}首`,
      text: "您必須擲出3次聖筊,方能解籤",
      icon: "info",
      confirmButtonColor: "rgba(134, 102, 84, 1)",
      confirmButtonText: "確認賜籤",
    }).then((result) => {
      if (result.isConfirmed) {
        handleTossingBlocks(true);
      }
    });
  }

  function getRandomByWeight(items) {
    const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);

    const random = Math.random() * totalWeight;

    let comulative = 0;

    for (const item of items) {
      comulative += item.weight;

      if (random < comulative) {
        return item;
      }
    }
  }

  function handleTossingBlocks(isSecondRound) {
    setShowText(false);

    const result = getRandomByWeight(results);
    setResult(result);
    setImgKey((prev) => prev + 1);

    if (!isSecondRound) {
      nextActionRef.current =
        result.text === "聖筊"
          ? () => handleShowAlert("canDraw")
          : () => handleShowAlert("retry");
      return;
    }

    if (result.text === "聖筊") {
      setSuccessCount((prev) => {
        const next = prev + 1;

        if (next === 3) {
          nextActionRef.current = () => handleShowAlert("showResult", next);
        } else {
          nextActionRef.current = () => handleShowAlert("continue", next);
        }
      });
    } else {
      setSuccessCount(0);
      nextActionRef.current = () => handleShowAlert("restart");
    }
  }

  function handleShowAlert(state, successCount) {
    switch (state) {
      case "canDraw":
        Swal.fire({
          title: "聖筊 已可求籤",
          icon: "success",
          confirmButtonColor: "rgba(134, 102, 84, 1)",
          confirmButtonText: "開始求籤",
        }).then((result) => {
          if (result.isConfirmed) {
            handleDrawPicks();
          }
        });
        break;

      case "retry":
        Swal.fire({
          title: "請再擲一次",
          icon: "error",
          confirmButtonColor: "rgba(134, 102, 84, 1)",
          confirmButtonText: "擲杯",
        }).then((result) => {
          if (result.isConfirmed) {
            handleTossingBlocks(false);
          }
        });
        break;

      case "showResult":
        Swal.fire({
          title: `目前已求得聖筊：${successCount}`,
          icon: "success",
          confirmButtonColor: "rgba(134, 102, 84, 1)",
          confirmButtonText: "前往解籤",
        }).then((result) => {
          if (result.isConfirmed) {
            setHasThreeSuccess(true);
          }
        });
        break;
      case "continue":
        Swal.fire({
          title: `目前已求得聖筊：${successCount}`,
          icon: "warning",
          confirmButtonColor: "rgba(134, 102, 84, 1)",
          confirmButtonText: "繼續擲杯",
        }).then((result) => {
          if (result.isConfirmed) {
            handleTossingBlocks(true);
          }
        });
        break;
      case "restart":
        Swal.fire({
          title: "請重新求籤",
          icon: "error",
          confirmButtonColor: "rgba(134, 102, 84, 1)",
          confirmButtonText: "開始求籤",
        }).then((result) => {
          if (result.isConfirmed) {
            handleDrawPicks();
          }
        });
        break;

      default:
        break;
    }
  }
  function handleComplete() {
    setTextKey((prev) => prev - 1);
    setShowText(true);
  }

  return (
    <div className="modal draw-modal" tabIndex="-1" ref={drawModal}>
      <div className="d-none">{successCount}</div>
      <div
        className="modal-dialog modal-lg-plus 
          modal-dialog-centered"
      >
        {!hasThreeSuccess ? (
          <div
            className="modal-content position-relative px-5"
            style={{
              background: "url(assets/images/index/nav-bg.png)",
            }}
          >
            <div className="draw-modal-inside">
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
                  className="draw-modal-title text-md-end text-center
                    text-primary animate__animated animate__fadeIn"
                  ref={resultsTextRef}
                  onAnimationEnd={handleAnimationEnd}
                >
                  {result.text}
                </h2>
              )}
            </div>
          </div>
        ) : (
          <div
            className="modal-content position-relative px-5"
            style={{
              background: "url(assets/images/index/nav-bg.png)",
            }}
          >
            <div className="pt-5">
              <div className="d-flex position-relative">
                <i
                  className="bi bi-x-circle display-1 position-absolute end-0 text-primary cursor-pointer"
                  onClick={handleCloseModal}
                />
              </div>
              <div className="pt-64 d-md-flex">
                <h2 className="answer-title vertical-md-text m-md-0 mb-3 fw-bold text-center text-primary me-4">
                  解籤
                </h2>
                <div className="w-100 px-md-40">
                  <h2 className="text-primary mb-40  fw-bold text-center fs-20 fs-md-2 text-md-start">
                    第{Nzh.hk.encodeS(pickNum)}籤
                  </h2>
                  <p className="fs-md-1 fs-20 fw-bold mb-40 text-center text-md-start">
                    {picks[pickNum - 1]["籤詩"]}
                  </p>
                  <p className="pick-explain mb-40 text-center text-md-start">
                    {picks[pickNum - 1]["中文解析"]}
                  </p>
                  <p className="lh-1 mb-40 text-center text-md-start">
                    尚有其餘疑問，欲再請示？
                  </p>

                  <div className="d-flex px-md-80 flex-column flex-md-row justify-content-between align-items-center">
                    <div
                      className=" d-flex d-md-block align-items-center cursor-pointer"
                      onClick={handleDrawAgain}
                    >
                      <img
                        className="draw-modal-again-img object-fit-cover"
                        src="assets/images/draw/draw-again.png"
                        alt="再抽一次？"
                      />
                      <div
                        className="draw-modal-again-btn border border-secondary
                        px-2 ms-3 ms-md-0
                        "
                      >
                        <div
                          className="border border-secondary 
                          text-center  py-1
                          "
                        >
                          再次求籤
                        </div>
                      </div>
                    </div>
                    <h2 className="text-primary fs-4 fs-md-2 text-center">
                      或者
                    </h2>
                    <div
                      className="d-flex d-md-block flex-row-reverse align-items-center cursor-pointer"
                      onClick={handleOtherPicks}
                    >
                      <img
                        className="draw-modal-again-img"
                        src="assets/images/draw/others.png"
                        alt="其他籤詩？"
                      />
                      <div
                        className="border border-secondary
                        px-2 draw-modal-again-btn 
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
  );
}
