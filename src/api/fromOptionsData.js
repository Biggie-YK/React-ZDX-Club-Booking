  export const timeOptions = [
    { value: "1", label: "上午9:00" },
    { value: "2", label: "上午10:00" },
    { value: "3", label: "上午11:00" },
    { value: "4", label: "下午15:00" },
    { value: "5", label: "下午16:00" },
    { value: "6", label: "下午17:00" },
    { value: "7", label: "晚上19:00" },
    { value: "8", label: "晚上20:00" },
    { value: "9", label: "晚上21:00" },
  ];

  export const serviceOptions = [
    {
      id: "card1",
      value: "紫微命盤",
      title: "紫微命盤",
      price: "$5,000 - $8,000",
      image: "assets/images/reserve/service.png",
      alt: "紫微命盤",
    },
    {
      id: "card2",
      value: "擇日開運",
      title: "擇日開運",
      price: "$4,000 - $7,000",
      image: "assets/images/reserve/service2.png",
      alt: "擇日開運",
    },
    {
      id: "card3",
      value: "小流年運勢分析",
      title: "小流年運勢分析",
      price: "$3,000 - $6,000",
      image: "assets/images/reserve/service3.jpg",
      alt: "小流年運勢分析",
    },
    {
      id: "card4",
      value: "因緣與感情合盤",
      title: "因緣與感情合盤",
      price: "$5,000 - $9,000",
      image: "assets/images/reserve/service4.png",
      alt: "因緣與感情合盤",
    },
  ];

export const statusOptions = [  
  { value: "pending", label: "待處理/待審核" },
  { value: "confirmed", label: "已確認" },
  { value: "cancelled", label: "已取消" },
  { value: "completed", label: "已完成" },
  { value: "expired", label: "已逾期" },
];

export default {
  timeOptions,
  serviceOptions,
  statusOptions,
};