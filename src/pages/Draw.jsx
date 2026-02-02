export default function Draw() {
  return (
    <>
      <div className="container">
        <section className="draw py-80">
          <div className="d-flex py-3 justify-content-center">
            <h6 className="me-4 mt-4 mb-0 fw-bold text-primary">線上服務</h6>
            <h1 className="mb-0 fw-bold">線上求籤</h1>
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
              <div className="draw-btn border border-secondary-200 d-flex justify-content-center position-relative">
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

        <section className="intro py-80">
          <div className="intro-jp">
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
        </section>
      </div>
    </>
  );
}
