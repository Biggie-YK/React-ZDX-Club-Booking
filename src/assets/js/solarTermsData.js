// 24 節氣對應資料
const solarTermsData = {
  立春: {
    text: "一年開始，五行屬木，適合立下新計劃，命理上為陽氣漸升，萬物生發之始。",
    season: 1,
  },
  雨水: {
    text: "水氣上升，五行屬水木交融，適合清理舊事，招財氣，洗滌晦氣。",
    season: 1,
  },
  驚蟄: {
    text: "雷動萬物醒，命格中藏機運，適合採取行動、開創、轉職。",
    season: 1,
  },
  春分: { text: "陰陽平衡，日夜均等，適合修身養性，調整身心平衡。", season: 1 },
  清明: {
    text: "祖先祭祀時節，五行土氣活絡，宜祈福求和，重視家族關係。",
    season: 1,
  },
  穀雨: { text: "五行木轉旺，水潤萬物，利學業、考試、創作靈感。", season: 1 },

  立夏: {
    text: "火氣漸旺，命理中屬陽盛，適合表現自己，提升社交與人氣。",
    season: 2,
  },
  小滿: { text: "萬物小成，命理上為能量積聚期，宜穩健、不可躁進。", season: 2 },
  芒種: {
    text: "五行火中藏金，適合種下未來的計畫與關係，利於求財。",
    season: 2,
  },
  夏至: {
    text: "陽極之日，五行火最盛，易浮躁，命理建議內斂觀察，不宜大動作。",
    season: 2,
  },
  小暑: {
    text: "屬火金交會，命理中利於突破困境，但注意爭執與情緒。",
    season: 2,
  },
  大暑: {
    text: "火氣最烈，命理上需防口舌是非，宜靜不宜動，適合修心養性。",
    season: 2,
  },

  立秋: {
    text: "金氣始生，屬收斂之氣，命理利於收心、結束拖延已久的事務。",
    season: 3,
  },
  處暑: {
    text: "暑氣漸退，命理上進入轉化期，適合重新規劃、內省反思。",
    season: 3,
  },
  白露: { text: "屬金氣成形，命理利於清理舊習慣、釐清人際關係。", season: 3 },
  秋分: {
    text: "陰陽再次平衡，五行金旺，利決策與分辨事物真假好壞。",
    season: 3,
  },
  寒露: { text: "金轉寒水，命理上為養精蓄銳期，宜低調、藏鋒不露。", season: 3 },
  霜降: {
    text: "陰氣漸重，命理提醒注意身體與情緒，適合祈安與收斂花費。",
    season: 3,
  },

  立冬: { text: "水氣萌動，萬物收藏，命理上宜規劃儲備、充實實力。", season: 4 },
  小雪: {
    text: "屬水中帶土，命理上象徵潛力與機會蘊藏，適合靜待時機。",
    season: 4,
  },
  大雪: {
    text: "陰氣極盛，命理提醒防負能量，宜修行靜坐、調氣養神。",
    season: 4,
  },
  冬至: {
    text: "陽氣初生，命理上利於種下願望與新目標，開始籌劃未來。",
    season: 4,
  },
  小寒: { text: "水氣重，命理上多阻力，建議守成、避高風險決策。", season: 4 },
  大寒: {
    text: "一年最寒，命理上是轉運臨界點，宜閉關、整理資源、等待開春。",
    season: 4,
  },
};

const seasonImages = {
  1: `https://github.com/YoKingX7/ZDX-Club-Booking/blob/main/assets/images/knowledge/season-1.png?raw=true`,
  2: `https://github.com/YoKingX7/ZDX-Club-Booking/blob/main/assets/images/knowledge/season-2.png?raw=true`,
  3: `https://github.com/YoKingX7/ZDX-Club-Booking/blob/main/assets/images/knowledge/season-3.png?raw=true`,
  4: `https://github.com/YoKingX7/ZDX-Club-Booking/blob/main/assets/images/knowledge/season-4.png?raw=true`,
};

// 更新節氣內容的函數
function updateTermContent(termName) {
  const termData = solarTermsData[termName];

  if (termData) {
    // 更新標題
    const termTitle = document.getElementById("term-title");
    if (termTitle) {
      termTitle.textContent = termName;
    }

    // 更新描述
    const termDescription = document.getElementById("term-description");
    if (termDescription) {
      termDescription.textContent = termData.text;
    }

    // 更新背景圖
    const contentElement = document.getElementById("solar-term-content");
    if (contentElement) {
      // 添加除錯資訊
      console.log("Setting background image:", seasonImages[termData.season]);
      contentElement.style.backgroundImage = `url('${
        seasonImages[termData.season]
      }')`;
    }
  }
}

// 等待 DOM 載入完成
document.addEventListener("DOMContentLoaded", function () {
  // 綁定節氣按鈕的點擊事件
  document.querySelectorAll(".sel-item").forEach((button) => {
    button.addEventListener("click", function () {
      // 移除所有 active 狀態
      document.querySelectorAll(".sel-item").forEach((item) => {
        item.classList.remove("active");
      });

      // 添加 active 狀態到當前按鈕
      this.classList.add("active");

      // 更新內容
      const termName = this.textContent.trim();
      updateTermContent(termName);
    });
  });
});
