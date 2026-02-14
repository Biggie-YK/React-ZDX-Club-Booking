import Nzh from "nzh";

export default function OtherPicks() {
  const picks = [
    ...Array(50)
      .keys()
      .map((n) => {
        return n + 1;
      }),
  ];

  return (
    <>
      <div className="picks">
        <div className="container py-80">
          <div className="row py-3 ">
            <div className="col-5">
              <h6 className=" mt-4 mb-0 fw-bold text-primary text-end ">
                線上服務
              </h6>
            </div>
            <div className="col-7">
              <h1 className="mb-0 fw-bold">解籤</h1>
            </div>
          </div>
          <div className="mb-40 pt-3">
            <div className="row">
              <div className="col-5">
                <div className="position-relative">
                  <p className="text-end">本站採用籤詩為雷雨師一百首</p>
                  <img
                    className="picks-img object-fit-cover position-absolute top-0"
                    src="../assets/images/other-picks/picks-box.png"
                    alt="籤箱"
                  />
                </div>
              </div>
              <div className="col-7">
                <div className="d-flex flex-wrap">
                  {picks.map((n, i) => {
                    return (
                      <div key={i} className="picks-box px-12 me-20 mb-3">
                        <div className="picks-box-pick text-center ">
                          第{Nzh.hk.encodeS(n)}首
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-2"></div>
            <div className="col-7">
              <div className="d-flex flex-wrap justify-content-end">
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
            <div className="col-3">
              <img
                className="picks-again-img py-3"
                src="../assets/images/other-picks/more-picks.png"
                alt="再抽一次"
              />
              <div
                className="picks-again-btn border border-secondary
                        px-2
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
