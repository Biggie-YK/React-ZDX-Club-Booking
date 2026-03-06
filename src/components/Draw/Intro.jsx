export default function Intro() {
  return (
    <section className="intro   position-relative">
      <div className="intro-jp d-flex  border-primary">
        <div className="me-md-36">
          <img
            className="intro-jp-img object-fit-cover"
            src="assets/images/draw/intro-jp.png"
            alt="日本神社巫女"
          />
          <div className="intro-jp-text py-md-36 py-3 px-4">
            <p className="mb-4">
              御神籤(日語：御神籤∕おみくじomikuji)，也稱神籤，是日本傳統神社、佛寺提供用來祈願、占卜個人運勢的求籤活動。
            </p>
            <p>
              參加這一活動者通常要先向寺社支付較少的的賽錢(香火錢)，稱為
              「初穂料」，隨後在寺社提供的抽籤盒中隨機抽取籤紙。籤紙上會以漢字書寫「吉」、「凶」等占卜結果，並附有漢詩或和歌以及現代日語解說。時至今日，為了服務外國人遊客，也有著名寺社會提供用英語書寫的籤紙。
            </p>
          </div>
        </div>
        <div className="intro-title fw-bold text-primary ms-4 d-none d-lg-block">
          日本
        </div>
        <div className="intro-title fw-bold text-primary  align-items-center ms-4 d-none d-lg-flex">
          臺灣
        </div>
      </div>
      <div className="intro-tw d-flex  border-top border-primary  justify-content-md-end justify-content-center pt-5">
        <div>
          <img
            className="intro-jp-img object-fit-cover"
            src="assets/images/draw/intro-tw.png"
            alt="日本神社巫女"
          />
          <div className="intro-tw-text py-36 px-4 border-primary">
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
  );
}
