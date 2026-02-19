import Nzh from "nzh";
import { Link } from "react-router";
import ShowPicksModal from "../components/ShowPickModal";
import { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";

export default function OtherPicks() {
  const [pickNum, setPickNum] = useState(1);
  const picksModalRef = useRef(null);
  const picks = [
    ...Array(50)
      .keys()
      .map((n) => {
        return n + 1;
      }),
  ];
  useEffect(() => {
    picksModalRef.current = new Modal(picksModalRef.current);
  }, []);
  function handleOpenModal(n) {
    setPickNum(n);
    picksModalRef.current.show();
  }

  return (
    <>
      <div className="picks">
        <div className="container py-md-80 py-40">
          <div className="d-flex justify-content-between ">
            <div
              className=" w-100
            "
            >
              <div className="row row-cols-1">
                <div className="col-md-5 col-12">
                  <h6 className=" mt-md-4 mb-md-0 mb-4 fw-bold text-primary text-md-end ">
                    線上服務
                  </h6>
                </div>
                <div className="col-md-7 col-12">
                  <h1 className="mb-md-0 mb-4 fw-bold fs-2 fs-md-1">解籤</h1>
                  <p className=" d-md-none">本站採用籤詩為雷雨師一百首</p>
                </div>
              </div>
            </div>
            <img
              className="d-md-none mobile-img-other object-fit-cover"
              src="../assets/images/draw/others.png"
              alt="其他籤"
            />
          </div>
          <div className="mb-40 pt-3">
            <div className="row">
              <div className="col-5 d-none d-md-block">
                <div className="position-relative">
                  <p className="text-end">本站採用籤詩為雷雨師一百首</p>
                  <img
                    className="picks-img object-fit-cover position-absolute top-0"
                    src="../assets/images/other-picks/picks-box.png"
                    alt="籤箱"
                  />
                </div>
              </div>
              <div className="col-md-7 col-12">
                <div className="d-flex flex-wrap picks-zone justify-content-center overflow-auto py-3 py-md-0">
                  {picks.map((n, i) => {
                    return (
                      <div
                        key={i}
                        className="picks-box px-12 me-20 mb-3"
                        onClick={() => handleOpenModal(n)}
                      >
                        <div className="picks-box-pick text-center ">
                          第{Nzh.hk.encodeS(n)}首
                        </div>
                      </div>
                    );
                  })}
                  {picks.map((n, i) => {
                    return (
                      <div
                        key={i}
                        className="picks-box px-12 me-20 mb-3 d-md-none d-block"
                      >
                        <div className="picks-box-pick text-center ">
                          第{Nzh.hk.encodeS(n + 50)}首
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-2 d-none d-md-block"></div>
            <div className="col-7 d-none d-md-block">
              <div className="d-md-flex flex-wrap justify-content-end">
                {picks.map((n, i) => {
                  return (
                    <div key={i} className="picks-box px-12 me-20 mb-3">
                      <div className="picks-box-pick text-center ">
                        第{Nzh.hk.encodeS(n + 50)}首
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-3 col-12 ">
              <Link
                className="d-flex  align-items-center d-md-block text-decoration-none text-dark fw-bold"
                to="/draw"
              >
                <img
                  className="picks-again-img py-3 me-3 me-md-0"
                  src="../assets/images/other-picks/more-picks.png"
                  alt="再抽一次"
                />

                <div
                  className="picks-again-btn border border-secondary
                        px-2 flex-fill
                        "
                >
                  <div
                    className="border border-secondary 
                           h-100 fw-bold d-flex align-items-center justify-content-center
                           fs-4
                          "
                  >
                    再次求籤
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ShowPicksModal pickNum={pickNum} picksModalRef={picksModalRef} />
    </>
  );
}
