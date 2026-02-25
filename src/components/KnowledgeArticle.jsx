import { useState } from "react";

export default function KnowledgeArticle() {
  const articles = [
    {
      id: 1,
      title: "立秋×天赦吉日",
      date: "2025-08-07",
      dateDisplay: "2025/08/07",
      content: (
        <>
          <div className="mb-4">
            📅 記於:西元2025年8月7日,立秋×天赦吉日
            <br />
            今早起床,天氣還沒變涼,卻莫名覺得一股「轉變的氣息」在空氣中流動。翻開黃曆,赫然發現——今天不只是立秋,還是今年難得一見的天赦日。
          </div>
          <div className="mb-4">
            🐷 豬大仙語錄:
            <br />
            「天開一扇門,秋落一片葉,當你願意改,就是時機到了。」
          </div>
          <div className="mb-4">
            🌿 天赦日是什麼?
            <br />
            天赦日是天公恩賜、赦罪的好日子,代表上天給人一次重新開始的機會。凡事想要和解、化解、修復突破困境,都可在這天啟動。
            而立秋,是節氣中的轉折點,象徵陽氣開始收斂、萬物逐漸内省,是由外向内的能量轉化。
          </div>
          <div className="mb-4">
            <div className="mb-2">🔍 命理啟示:</div>
            <div className="mb-2">
              天赦日遇上立秋,是「外放與收斂的交界」。代表一件事,可以落幕,也可以開啟新篇章。
              如果你最近正卡在某段關係、工作瓶頸,或是內心難安的狀態,這天就是最好的時機:
            </div>
            <ul>
              <li>解心結:適合與人對話、誤會澄清</li>
              <li>補破口:開始修補破裂的目標或計畫</li>
              <li>設新志:為下半年定一個明確可行的目標</li>
              <li>內力:開始作息調整、身心內省</li>
            </ul>
          </div>
          <div className="mb-4">
            🖋️ 豬大仙的建議:
            <br />
            今天,給自己一個「赦免」的儀式。
            <br />
            不論是對自己、對別人、對過去。寫一封信、燒一張紙、喝一杯茶………………
            一念放下,萬般自在。
          </div>
          <div className="mb-0">
            📌 今日行動小卡:
            <br />
            ✅ 寫下一件你想放下的事
            <br />
            ✅ 訂下立秋後的三個新習慣
            <br />✅ 抽一張命理卡/塔羅卡,作為下半年指引
          </div>
        </>
      ),
    },
    {
      id: 2,
      title: "立春×迎新啟運日",
      date: "2025-02-04",
      dateDisplay: "2025/02/04",
      content: (
        <>
          <div className="mb-4">
            📅 記於:西元2025年2月4日,立春×新歲啟始之日
            <br />
            清晨微寒,窗外第一縷陽光灑落,空氣中瀰漫著新生的氣息。翻開節氣曆,今日正值立春——一年之始,萬物復甦。
          </div>
          <div className="mb-4">
            🐷 豬大仙語錄:
            <br />
            「春風拂面,萬象更新,心有希望,事自有成。」
          </div>
          <div className="mb-4">
            🌸 立春是什麼?
            <br />
            立春是二十四節氣的第一個節氣,象徵寒冬結束、春天來臨。此時萬物開始萌芽,正是啟動新計畫、展開新生活的好時機。
          </div>
          <div className="mb-4">
            🔍 命理啟示:
            <br />
            立春是「新生與啟動的節點」。代表一切事物可在此時重新出發,無論工作、關係或自我成長,皆宜定下新目標、展開新行動:
            <ul>
              <li>立新志:為新的一年設定明確目標</li>
              <li>啟新局:開始新的計畫或挑戰</li>
              <li>養生息:調整作息,增強體力</li>
              <li>心態轉換:拋開過往,迎接新機遇</li>
            </ul>
          </div>
          <div className="mb-4">
            🖋️ 豬大仙的建議:
            <br />
            立春,是新開始的最佳時機。
            <br />
            不妨寫下今年最想實現的一件事,或是給自己一封鼓勵的信,為新的一年注入希望與行動力。
          </div>
          <div className="mb-0">
            📌 今日行動小卡:
            <br />
            ✅ 訂下今年的三個新目標
            <br />
            ✅ 每天早晨做一次深呼吸,迎接新氣象
            <br />✅ 與親友分享你的新計畫,獲得支持與鼓勵
          </div>
        </>
      ),
    },
    {
      id: 3,
      title: "春分 × 陽平陰長之時",
      date: "2025-03-20",
      dateDisplay: "2025/03/20",
      content: (
        <>
          <div className="mb-4">
            📅 記於：西元2025年3月20日，春分×晝夜等長之日
            <br />
            今晨微光灑落，空氣中瀰漫著平衡的氣息。翻開節氣曆，今日正值春分——晝夜平分，萬物和諧。
          </div>
          <div className="mb-4">
            🐷 豬大仙語錄：
            <br />
            「春分一線，陰陽調和，心靜則安，步穩則遠。」
          </div>
          <div className="mb-4">
            🌱 春分是什麼?
            <br />
            春分是二十四節氣之一，代表白天與黑夜長度相等，天地間陰陽平衡。此時萬物生長，正是調整生活、校準目標的好時機。
          </div>
          <div className="mb-4">
            🔍 命理啟示:
            <br />
            春分是「平衡與調和的節點」。象徵一切事物可在此時重新校準方向，無論工作、關係或自我成長，皆宜反思與調整：
            <ul>
              <li>調節作息：早睡早起，維持身心平衡</li>
              <li>溝通協調：與家人、同事坦誠交流，化解誤會</li>
              <li>設定目標：檢視現有計畫，微調步驟</li>
              <li>靜心冥想：每日靜坐，感受內在平和</li>
            </ul>
          </div>
          <div className="mb-4">
            🖋️ 豬大仙的建議：
            <br />
            春分，是調整與平衡的好時機。
            <br />
            不妨花點時間靜心冥想，或是與重要的人坦誠溝通，釐清彼此的想法與目標，讓關係更加和諧。
          </div>
          <div className="mb-0">
            📌 今日行動小卡：
            <br />
            ✅ 寫下你想調整的生活習慣
            <br />
            ✅ 每天靜坐5分鐘，感受內在平衡
            <br />✅ 與一位親友分享你的新目標，互相鼓勵
          </div>
        </>
      ),
    },
    {
      id: 4,
      title: "立夏×財運萌芽日",
      date: "2025-05-05",
      dateDisplay: "2025/05/05",
      content: (
        <>
          <div className="mb-4">
            📅 記於：西元2025年5月5日，立夏×萬物初長之日
            <br />
            清晨微風，陽光漸強，空氣中充滿著成長的氣息。今日正值立夏——夏季的開始，萬物繁盛。
          </div>
          <div className="mb-4">
            🐷 豬大仙語錄：
            <br />
            「夏初萌動，萬象更新，心有熱情，事自有成。」
          </div>
          <div className="mb-4">
            🔥 立夏是什麼?
            <br />
            立夏是二十四節氣之一，標誌著春天結束、夏天來臨。此時萬物生長加速，正是展現活力、積極行動的好時機。
          </div>
          <div className="mb-4">
            🔍 命理啟示:
            <br />
            立夏是「成長與行動的節點」。適合啟動新計畫、積極追夢，無論工作、關係或自我成長，皆宜主動出擊：
            <ul>
              <li>展現自信：勇於表達自我，爭取機會</li>
              <li>積極行動：落實計畫，持續努力</li>
              <li>養生保健：調整飲食，增強體力</li>
              <li>心態樂觀：保持熱情，迎接挑戰</li>
            </ul>
          </div>
          <div className="mb-4">
            🖋️ 豬大仙的建議:
            <br />
            立夏，是展現活力與行動力的好時機。
            <br />
            不妨嘗試一項新運動，或是主動聯絡一位許久未見的朋友，讓生活充滿新鮮感與熱情。
          </div>
          <div className="mb-0">
            📌 今日行動小卡:
            <br />
            ✅ 列出三件你想積極完成的事
            <br />
            ✅ 每天保持運動30分鐘，增強體力
            <br />✅ 主動關心一位親友，分享你的近況
          </div>
        </>
      ),
    },
    {
      id: 5,
      title: "夏至×陽極盛吉日",
      date: "2025-06-21",
      dateDisplay: "2025/06/21",
      content: (
        <>
          <div className="mb-4">
            📅 記於：西元2025年6月21日，夏至×陽極之日
            <br />
            今日夏至，白晝最長，陽光最盛。空氣中瀰漫著熱烈與旺盛的能量，萬物生機勃勃。
          </div>
          <div className="mb-4">
            🐷 豬大仙語錄：
            <br />
            「陽極則陰生，盛極而轉，懂得收斂，方能長久。」
          </div>
          <div className="mb-4">
            🌞 夏至是什麼?
            <br />
            夏至是二十四節氣之一，代表一年中白天最長、陽氣最旺。此時萬物達到生長高峰，也是調整步伐、預備轉變的時刻。
          </div>
          <div className="mb-4">
            🔍 命理啟示:
            <br />
            夏至是「盛極與轉化的節點」。適合檢視成果、調整方向，無論工作、關係或自我成長，皆宜適時收斂：
            <ul>
              <li>檢視進度：回顧目標，調整策略</li>
              <li>適度休息：避免過度消耗，保持精力</li>
              <li>養心安神：靜心冥想，平衡情緒</li>
              <li>預備轉變：為下半年做規劃</li>
            </ul>
          </div>
          <div className="mb-4">
            🖋️ 豬大仙的建議:
            <br />
            夏至，是檢視與調整的好時機。
            <br />
            不妨花點時間回顧上半年的成果，思考哪些地方可以微調，讓自己在下半年更有方向與動力。
          </div>
          <div className="mb-0">
            📌 今日行動小卡:
            <br />
            ✅ 寫下你今年已完成的三件事
            <br />
            ✅ 訂下下半年的一個新目標
            <br />✅ 每天靜坐5分鐘，感受內在能量
          </div>
        </>
      ),
    },
    {
      id: 6,
      title: "秋分×收斂聚財時",
      date: "2025-09-23",
      dateDisplay: "2025/09/23",
      content: (
        <>
          <div className="mb-4">
            📅 記於：西元2025年9月23日，秋分×晝夜平分之日
            <br />
            今日秋分，白天與黑夜等長，天地間充滿平衡與收斂的氣息，萬物開始由盛轉收。
          </div>
          <div className="mb-4">
            🐷 豬大仙語錄：
            <br />
            「秋分一線，收斂自省，平衡心態，安然度秋。」
          </div>
          <div className="mb-4">
            🍂 秋分是什麼?
            <br />
            秋分是二十四節氣之一，代表晝夜平分，陰陽平衡。此時萬物開始收斂，適合反思與整理。
          </div>
          <div className="mb-4">
            🔍 命理啟示:
            <br />
            秋分是「收斂與平衡的節點」。適合整理心情、調整步伐，無論工作、關係或自我成長，皆宜內省與規劃：
            <ul>
              <li>整理目標：檢視成果，調整方向</li>
              <li>養生保健：注意飲食，增強免疫力</li>
              <li>心態平衡：保持冷靜，避免焦躁</li>
              <li>預備收穫：為年底做準備</li>
            </ul>
          </div>
          <div className="mb-4">
            🖋️ 豬大仙的建議:
            <br />
            秋分，是整理與收斂的好時機。
            <br />
            不妨花點時間檢視自己的目標與成果，調整步伐，讓自己在年底前更有方向與動力。
          </div>
          <div className="mb-0">
            📌 今日行動小卡:
            <br />
            ✅ 寫下你今年已完成的三件事
            <br />
            ✅ 訂下年底前的一個新目標
            <br />✅ 每天靜坐5分鐘，感受內在平衡
          </div>
        </>
      ),
    },
    {
      id: 7,
      title: "冬至×藏鋒養勢日",
      date: "2025-12-21",
      dateDisplay: "2025/12/21",
      content: (
        <>
          <div className="mb-4">
            📅 記於：西元2025年12月22日，冬至×陰極之日
            <br />
            今日冬至，黑夜最長，陽氣漸生。天地間充滿著靜謐與新生的氣息，萬物開始蘊藏能量。
          </div>
          <div className="mb-4">
            🐷 豬大仙語錄：
            <br />
            「冬至一陽生，靜中有動，蘊藏能量，等待新生。」
          </div>
          <div className="mb-4">
            ❄️ 冬至是什麼?
            <br />
            冬至是二十四節氣之一，代表一年中黑夜最長、陽氣初生。此時萬物休養生息，適合內省與蓄力。
          </div>
          <div className="mb-4">
            🔍 命理啟示:
            <br />
            冬至是「蘊藏與新生的節點」。適合休養生息、積蓄能量，無論工作、關係或自我成長，皆宜靜心規劃：
            <ul>
              <li>養精蓄銳：調整作息，增強體力</li>
              <li>內省反思：檢視過往，規劃未來</li>
              <li>溫暖陪伴：與家人共度，增進感情</li>
              <li>預備新生：為新的一年做準備</li>
            </ul>
          </div>
          <div className="mb-4">
            🖋️ 豬大仙的建議:
            <br />
            冬至，是蘊藏能量、靜心規劃的好時機。
            <br />
            不妨給自己一段安靜的時光，回顧過去一年的成長與挑戰，並寫下新一年的願望與目標，讓心靈重新充電。
          </div>
          <div className="mb-0">
            📌 今日行動小卡:
            <br />
            ✅ 列出今年最感謝的三件事
            <br />
            ✅ 訂下新年度的三個目標
            <br />✅ 與家人共度溫馨時光，分享彼此的心願
          </div>
        </>
      ),
    },
  ];

  const [activeArticle, setActiveArticle] = useState(articles[0]);

    const handleArticleClick = (id) => {
    setActiveArticle(articles.find((article) => article.id === id));
    // 手機版點擊後關閉 dropdown
    const dropdown = document.querySelector(".dropdown-menu");
    if (dropdown && dropdown.classList.contains("show")) {
      const button = document.querySelector('[data-bs-toggle="dropdown"]');
      button?.click();
    }
  };
  console.log();

  return (
    <>
      <section className="article py-40 pt-md-160 pb-md-80 mb-40">
        <div className="container">
          <div className="km-section-title pt-4 pt-md-32 ps-12 ps-md-32 mb-md-80 mb-40">
            <p className="fs-4 fs-md-2 lh-base lh-md-sm fw-bold lh-sm text-black-950">
              豬大仙的命理隨手記
            </p>
            <p className="">紀錄命理、節氣、運勢與人生體悟的智慧手記</p>
          </div>

          <div className="row d-flex px-12 px-md-0">
            {/* 手機版顯示 */}
            <div className="dropdown mb-3 px-0 d-md-none d-block">
              <div
                className="article-nav-title btn btn-background-beige w-100 py-0 rounded-0"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="border-in px-4 py-12 d-flex justify-content-between align-items-center">
                  <div className="fs-5 text-black-800">精選文章</div>
                  <i className="bi bi-chevron-down"></i>
                </div>
              </div>

              <ul className="dropdown-menu w-100 p-12">
                {articles.map((article) => (
                  <li
                    key={article.id}
                    className="article-nav-item px-12 mb-2"
                    data-id={article.id}
                    type="button"
                    onClick={() => handleArticleClick(article.id)}
                  >
                    <div className="border-in px-4 py-12 d-flex justify-content-between">
                      <p className="km-h6 mb-0">{article.title}</p>
                      <time dateTime={article.date}>{article.dateDisplay}</time>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* 電腦版顯示 */}
            <ul className="article-nav list-unstyled text-center lh-sm text-black-800 px-64 d-none d-md-block">
              <li className="article-nav-title km-h6 px-12 mb-4">
                <div className="border-in py-12">精選文章</div>
              </li>
              {Object.entries(articles).map(([id, article]) => (
                <li
                  key={id}
                  className={`article-nav-item px-12 mb-4 ${activeArticle === parseInt(id) ? "active" : ""}`}
                  data-id={id}
                  type="button"
                  onClick={() => {
                    handleArticleClick(article.id);
                  }}
                >
                  <div className="border-in py-12">
                    <p className="km-h6 mb-0">{article.title}</p>
                    <time dateTime={article.date}>{article.dateDisplay}</time>
                  </div>
                </li>
              ))}
            </ul>

            <div className="article-content px-3 py-4 px-md-160 py-md-80 lh-lg col">
              {activeArticle.content}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
