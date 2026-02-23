import picks from "../assets/picks.json";
import Nzh from "nzh";

export default function ShowPicksModal({ pickNum, picksModalRef }) {
  return (
    <div className="modal draw-modal" tabIndex="-1" ref={picksModalRef}>
      <div className="modal-dialog modal-lg-plus modal-dialog-centered">
        <div
          className="modal-content position-relative px-5"
          style={{
            background: "url(../assets/images/index/nav-bg.png)",
          }}
        >
          <div className="pt-5">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
