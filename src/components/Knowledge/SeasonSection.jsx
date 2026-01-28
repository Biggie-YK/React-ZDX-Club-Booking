import { useState } from "react";

const seasonLabels = {
  1: "春",
  2: "夏",
  3: "秋",
  4: "冬",
};

const seasonBgMap = {
  1: "season-1.png",
  2: "season-2.png",
  3: "season-3.png",
  4: "season-4.png",
};

export default function SolarTermsSection({ data }) {
  const [activeTerm, setActiveTerm] = useState(data[0]);

  return (
    <section className="py-40 py-md-80">
      <div className="container">
        {/* 標題 */}
        <div className="km-section-title pt-4 pt-md-32 ps-12 ps-md-32 mb-40">
          <p className="fs-4 fs-md-2 fw-bold text-black-950">
            跟著豬大仙，
            <br />
            探索節氣與命理的神秘連結
          </p>
        </div>

        <div className="row flex-md-row flex-column-reverse align-items-center">
          {/* 左側內容 */}
          <SolarContent term={activeTerm} />

          {/* 右側選單 */}
          <div className="col-md-7 selections">
            {[1, 2, 3, 4].map((season) => (
              <SeasonGroup
                key={season}
                season={season}
                label={seasonLabels[season]}
                items={data.filter((t) => t.season === season)}
                activeId={activeTerm.id}
                onSelect={setActiveTerm}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 左側內容
function SolarContent({ term }) {
  return (
    <div
      className="content col-md-5 px-48 px-md-64 py-40 py-md-80"
      style={{
        backgroundImage: `url('../assets/images/knowledge/${seasonBgMap[term.season]}')`,
      }}

      // background-image: url(&quot;../assets/images/knowledge/sseason-1.png&quot;);


    >
      <p className="fs-2 fs-md-80 fw-bold text-black-800 mb-32">{term.title}</p>
      <p className="fs-6 fs-md-4">{term.text}</p>
    </div>
  );
}

function SeasonGroup({ season, label, items, activeId, onSelect }) {
  return (
    <div
      className={`d-flex align-items-center justify-content-between p-3 mb-32 bg-season-${season}`}
    >
      <div className="sel-title fs-3 fs-md-48 px-md-4 py-2 text-center">
        {label}
      </div>

      <ol className="sel-items p-0 mb-0 d-flex gap-3 flex-wrap flex-md-nowrap">
        {items.map((item) => (
          <SolarItem
            key={item.id}
            item={item}
            active={item.id === activeId}
            onClick={() => onSelect(item)}
          />
        ))}
      </ol>
    </div>
  );
}

function SolarItem({ item, active, onClick }) {
  return (
    <li
      type="button"
      className={`fs-5 fs-md-4 sel-item text-center py-2 bg-white ${
        active ? "active" : "opacity-50"
      }`}
      onClick={onClick}
    >
      {item.title}
    </li>
  );
}
