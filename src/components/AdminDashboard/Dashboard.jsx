
export default function Dashboard({ datas }) {
  const { users, bookings, posts, services } = datas;

  const dashboardData = [
    {
      id: 1,
      title: "預約",
      count: bookings?.length || 0,
      icon: "bi-calendar-check",
      color: "primary",
    },
    {
      id: 2,
      title: "會員",
      count: users?.length || 0,
      icon: "bi-people",
      color: "success",
    },
    {
      id: 3,
      title: "文章",
      count: posts?.length || 0,
      icon: "bi-file-text",
      color: "info",
    },
    {
      id: 4,
      title: "服務",
      count: services?.length || 0,
      icon: "bi-gear",
      color: "warning",
    },
  ];

  return (
    <>
      {dashboardData.map((item) => (
        <div className="col-md-3" key={item.id}>
          <div className={`card shadow-sm border-${item.color}`}>
            <div className="card-body bg-neutral-50">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="text-muted">{item.title}</h6>
                  <h3 className={`text-${item.color} mb-0`}>{item.count}</h3>
                </div>
                <i
                  className={`bi ${item.icon} fs-1 text-${item.color} opacity-50`}
                ></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
