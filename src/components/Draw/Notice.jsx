import { useState } from "react";

export default function Notice() {
  const [collapseOpen, setCollapseOpen] = useState([true, true, true]);

   const hints = [
     {
       title: "一事一籤，避免反覆求問",
       content:
         "多次求籤容易讓心情更加混亂，也可能讓原本的提醒失去意義。抽到籤後，建議先理解籤意、冷靜思考，再決定後續行動。",
     },
     {
       title: "勿在不適當時機抽籤",
       content:
         "請避免在情緒不穩、疲倦、醉酒或精神緊張時求籤。籤意易受心境影響，建議先靜心再求，這樣更容易領會籤詩提醒的意義。",
     },
     {
       title: "勿以籤詩代替重要決策",
       content:
         "籤詩之意，在於提醒與啟發,並非具體指令。凡涉及醫療診斷、法律判斷、重大投資、財務規劃、生涯抉擇等重要事項，皆不宜僅憑籤詩內容作為決策依據。",
     },
   ];

  return (
    <section className="notice py-md-80 py-40">
      <div className="d-flex  flex-column flex-md-row align-items-center">
        <img
          className="notice-img me-md-4 "
          src="assets/images/draw/notice.png"
          alt="豬大仙要你注意"
        />
        <div
          className="notice-hints w-100
            "
        >
          <div className="p-md-4 ">
            <h2
              className="pb-md-36 pb-4 mb-0 border-bottom border-secondary text-center text-md-start
                fs-4 fs-md-2
                "
            >
              求籤時，須留意
            </h2>
            <ul className="pt-md-36 pt-4">
              {hints.map((hint, index) => {
                return (
                  <li key={index}>
                    <div
                      className="d-flex align-items-center 
                    justify-content-between mb-2
                    "
                    >
                      <h4 className="ps-12 py-3 mb-0">{hint.title}</h4>
                      <img
                        src="assets/images/index/btn-social.png"
                        alt=""
                        onClick={() => {
                          setCollapseOpen((prev) =>
                            prev.map((item, i) => {
                              return i === index ? !item : item;
                            }),
                          );
                        }}
                      />
                    </div>
                    <p
                      className={`ps-4 pe-5 ps-md-12 notice-hints-words mb-4 accordion-collapse collapse ${collapseOpen[index] ? "show" : ""}`}
                    >
                      {hint.content}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
