// src/pages/AppointmentManagement.jsx

import navBg from '../assets/images/index/nav-bg.png';
import titleDeco from '../assets/images/index/title-deco.png';

import iconVector from '../assets/images/appointment-management/Vector.png';
import iconRefresh from '../assets/images/appointment-management/refresh.png';
import iconAngleDown from '../assets/images/appointment-management/angle-small-down.png';
import iconEdit from '../assets/images/appointment-management/u-edit.png';

const MOCK_CUSTOMERS = [
  {
    id: 1,
    name: '劉一',
    statusText: '待確認',
    statusClass: 'calendar-yellow',
    reminderText: '已設定',
    reminderClass: 'calendar-green',
    reminderEnabled: true,
    hasDetails: false,
  },
  {
    id: 2,
    name: '陳二',
    statusText: '已完成',
    statusClass: 'calendar-green',
    reminderText: '未設定',
    reminderClass: 'calendar-red',
    reminderEnabled: false,
    hasDetails: false,
  },
  {
    id: 3,
    name: '張三',
    statusText: '已取消',
    statusClass: 'calendar-red',
    reminderText: '已設定',
    reminderClass: 'calendar-green',
    reminderEnabled: true,
    hasDetails: false,
  },
  {
    id: 4,
    name: '李四',
    statusText: '未出席',
    statusClass: 'calendar-red',
    reminderText: '未設定',
    reminderClass: 'calendar-red',
    reminderEnabled: false,
    hasDetails: false,
  },
  {
    id: 5,
    name: '王五',
    statusText: '待確認',
    statusClass: 'calendar-yellow',
    reminderText: '已設定',
    reminderClass: 'calendar-green',
    reminderEnabled: true,
    hasDetails: true,
    details: [
      ['預約編號', '5'],
      ['服務項目', '結婚擇日'],
      ['預約日期', '2025年11月2日'],
      ['聯絡電話', '0912345678'],
      ['Email', 'wangwu666@gmail.com'],
    ],
  },
];

function FilterDropdown({ label }) {
  return (
    <div className="dropdown flex-fill">
      <button
        className="btn primary-bg-01 w-100 ps-3 py-22 d-flex justify-content-between align-items-center"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {label}
        <img src={iconAngleDown} alt="angle-small-down" />
      </button>

      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-item" type="button">
            新到舊
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            舊到新
          </button>
        </li>
      </ul>
    </div>
  );
}

function CustomerCard({ customer }) {
  const switchId = `reminderSwitch-${customer.id}`;

  return (
    <div className="col">
      <div className="card h-100 rounded-0 border-black-400 bg-transparent">
        <div className="card-header ps-4 py-4 card-title-bg">
          <h3 className="mb-0 fs-4 fw-bold text-black-950">{customer.name}</h3>
        </div>

        <div className="card-body p-4">
          <div className="text-black-600 pb-20 card-content-line">
            {!customer.hasDetails ? (
              <>
                <p className="mb-20">預約編號</p>
                <p className="mb-20">服務項目</p>
                <p className="mb-20">預約日期</p>
                <p className="mb-20">聯絡電話</p>
                <p className="mb-0">Email</p>
              </>
            ) : (
              customer.details.map(([k, v]) => (
                <div className="d-flex justify-content-between" key={k}>
                  <p className={k === 'Email' ? 'mb-0' : 'mb-20'}>{k}</p>
                  <p
                    className={
                      (k === 'Email' ? 'mb-0' : 'mb-20') + ' text-primary'
                    }
                  >
                    {v}
                  </p>
                </div>
              ))
            )}
          </div>

          <div className="py-20 card-content-line">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className={`mb-0 fw-bold ${customer.statusClass}`}>
                {customer.statusText}
              </p>

              <div className="d-flex">
                <button
                  type="button"
                  className="btn rounded-1 p-2 text-black-600 d-inline-flex align-items-center"
                >
                  <img
                    src={iconEdit}
                    alt="u-edit"
                    width="16"
                    height="16"
                    className="me-2"
                  />
                  編輯
                </button>
              </div>
            </div>

            <p className="mb-0 text-black-950">備註</p>
          </div>

          <div className="pt-20 d-flex justify-content-between align-items-center me-1">
            <div>
              <p className="mb-3">提醒狀態</p>
              <div className="d-flex align-items-center">
                <p className={`mb-0 me-2 ${customer.reminderClass}`}>
                  {customer.reminderText}
                </p>
                <span
                  className={`check-on ${customer.reminderClass}`}
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="form-check form-switch switch-51">
              {/* 用 defaultChecked 避免 React 提示「受控/非受控」警告 */}
              <input
                className="form-check-input"
                type="checkbox"
                id={switchId}
                defaultChecked={customer.reminderEnabled}
              />
              <label className="form-check-label" htmlFor={switchId}></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppointmentManagement() {
  return (
    <div style={{ backgroundImage: `url(${navBg})` }}>
      <div className="container py-40 py-md-80">
        {/* PC */}
        <div className="d-none d-md-block">
          <div className="row">
            {/* administrator-functions */}
            <div className="col-3">
              <h2 className="fs-2 fw-bold mt-32 mb-36">管理員功能</h2>
              <ul>
                <li className="mb-4">
                  <button
                    type="button"
                    className="administrator-functions-border-outside btn rounded-0 fs-5 py-0 p-2"
                  >
                    <div className="py-3 administrator-functions-border-inside">
                      儀表版
                    </div>
                  </button>
                </li>

                <li className="mb-4">
                  <button
                    type="button"
                    className="administrator-functions-border-outside btn rounded-0 fs-5 py-0 p-2 active"
                  >
                    <div className="py-3 administrator-functions-border-inside">
                      預約管理
                    </div>
                  </button>
                </li>

                <li className="mb-4">
                  <button
                    type="button"
                    className="administrator-functions-border-outside btn rounded-0 fs-5 py-0 p-2"
                  >
                    <div className="py-3 administrator-functions-border-inside">
                      匯出資料
                    </div>
                  </button>
                </li>

                <li className="mb-4">
                  <button
                    type="button"
                    className="administrator-functions-border-outside btn rounded-0 fs-5 py-0 p-2"
                  >
                    <div className="py-3 administrator-functions-border-inside">
                      教學說明
                    </div>
                  </button>
                </li>

                <li className="mb-4">
                  <button
                    type="button"
                    className="administrator-functions-border-outside-signout btn rounded-0 fs-5 py-0 p-2"
                  >
                    <div className="py-3 administrator-functions-border-inside-signout">
                      登出
                    </div>
                  </button>
                </li>
              </ul>
            </div>

            {/* check-reservation-record */}
            <div className="col-9">
              <div className="pt-12 mb-40">
                <div className="position-relative pt-21">
                  <img
                    className="position-absolute top-0"
                    src={titleDeco}
                    alt="round-deco"
                  />
                  <h2 className="fs-2 fw-bold ps-32 mb-0">查詢預約紀錄</h2>
                </div>
              </div>

              <div className="check-border-outside p-1 mb-40">
                <div className="check-border-inside px-72 py-48">
                  <div className="d-flex justify-content-between mb-4">
                    <div className="width-726">
                      <form
                        className="position-relative"
                        onSubmit={(e) => e.preventDefault()}
                      >
                        <input
                          type="search"
                          className="form-control ps-3 py-22 primary-bg-01 rounded-1"
                          id="pc-search"
                          placeholder="年/月/日"
                        />
                        <img
                          src={iconVector}
                          alt="Vector"
                          className="align-bottom position-absolute top-50 end-0 translate-middle-y pe-3"
                        />
                      </form>
                    </div>

                    <button
                      type="button"
                      className="btn primary-bg-01 p-3 rounded-1"
                    >
                      <img
                        src={iconRefresh}
                        alt="refresh"
                        className="align-bottom"
                      />
                    </button>
                  </div>

                  <div className="d-flex justify-content-between filter-group gap-4">
                    <FilterDropdown label="服務項目" />
                    <FilterDropdown label="預約時間" />
                    <FilterDropdown label="預約裝態" />
                  </div>
                </div>
              </div>

              {/* 顧客卡片 */}
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {MOCK_CUSTOMERS.map((c) => (
                  <CustomerCard key={c.id} customer={c} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="d-block d-md-none">
          {/* administrator-functions */}
          <div className="mb-3">
            <div className="dropdown flex-fill">
              <button
                className="btn administrator-functions-border-outside-rwd rounded-0 w-100 d-flex justify-content-between align-items-center py-0 p-2 bg-background-beige"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="py-20 px-4 administrator-functions-border-inside d-flex justify-content-between align-items-center w-100">
                  <p className="mb-0 fs-5 text-black-800">預約管理</p>
                  <img src={iconAngleDown} alt="angle-small-down" />
                </div>
              </button>

              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <button className="dropdown-item" type="button">
                    儀表板
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    匯出資料
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    教學說明
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    登出
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* check-reservation-record */}
          <div>
            <div className="check-border-outside p-1 mb-3">
              <div className="check-border-inside p-3">
                <div className="d-flex justify-content-between mb-2">
                  <div className="w-100 me-2">
                    <form
                      className="position-relative"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <input
                        type="search"
                        className="form-control ps-3 py-22 primary-bg-01 rounded-1"
                        id="mobile-search"
                        placeholder="年/月/日"
                      />
                      <img
                        src={iconVector}
                        alt="Vector"
                        className="align-bottom position-absolute top-50 end-0 translate-middle-y pe-3"
                      />
                    </form>
                  </div>

                  <button
                    type="button"
                    className="btn primary-bg-01 p-3 rounded-1"
                  >
                    <img
                      src={iconRefresh}
                      alt="refresh"
                      className="align-bottom"
                    />
                  </button>
                </div>

                <div className="d-flex flex-column gap-2">
                  <FilterDropdown label="服務項目" />
                  <FilterDropdown label="預約時間" />
                  <FilterDropdown label="預約裝態" />
                </div>
              </div>
            </div>

            {/* 顧客卡片 */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {MOCK_CUSTOMERS.map((c) => (
                <CustomerCard key={`m-${c.id}`} customer={c} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
