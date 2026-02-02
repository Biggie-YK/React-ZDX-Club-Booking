import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Lunar } from "lunar-javascript";
import "../assets/scss/components/farmerCalender.scss";

export default function Calendar() {
  const renderDayHeader = (arg) => {
    const days = ["日", "一", "二", "三", "四", "五", "六"];
    return days[arg.date.getDay()];
  };

  const renderDayCellContents = (arg) => {
    return { html: `<span>${arg.date.getDate()}</span>` }; // 只顯示日期數字
  };
  const renderDayCellDidMount = (info) => {
    let date = info.date;
    let lunar = Lunar.fromDate(date);

    // 設置父元素的相對定位
    info.el.style.position = "relative";

    // 農曆日期
    let lunarText = lunar.getDayInChinese();
    if (lunar.getDay() === 1) {
      lunarText = lunar.getMonthInChinese() + "月";
    }

    // 節氣
    let jieqi = lunar.getJieQi();

    // 創建顯示元素
    let lunarEl = document.createElement("div");
    lunarEl.className = jieqi ? "jieqi-text" : "lunar-text";
    lunarEl.innerText = jieqi || lunarText;

    // 添加到日期格子
    info.el.appendChild(lunarEl);
  };

  return (
    <div className="calendar">
      <FullCalendar
        plugins={[dayGridPlugin]}
        eventContent={renderEventContent}
        initialView="dayGridMonth"
        locale="zh-tw"
        firstDay={0}
        dayHeaders={true}
        dayHeaderContent={renderDayHeader}
        headerToolbar={false}
        aspectRatio={1.355}
        height="auto"
        footerToolbar={{
          left: "prev",
          center: "today",
          right: "next",
        }}
        buttonText={{
          today: "今天",
          prev: "上一月",
          next: "下一月",
        }}
        dayCellContent={renderDayCellContents}
        dayCellDidMount={renderDayCellDidMount}
      />
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
