// src/pages/AppointmentManagement.jsx
import { useEffect, useMemo, useState } from 'react';
import { getBookings } from '../api/bookings';

import navBg from '../assets/images/index/nav-bg.png';
import titleDeco from '../assets/images/index/title-deco.png';

import iconVector from '../assets/images/appointment-management/Vector.png';
import iconRefresh from '../assets/images/appointment-management/refresh.png';
import iconAngleDown from '../assets/images/appointment-management/angle-small-down.png';
import iconEdit from '../assets/images/appointment-management/u-edit.png';

function getStatusMeta(status) {
  switch ((status || 'pending').toLowerCase()) {
    case 'completed':
      return { text: '已完成', className: 'calendar-green' };
    case 'canceled':
    case 'cancelled':
      return { text: '已取消', className: 'calendar-red' };
    case 'no_show':
    case 'noshow':
      return { text: '未出席', className: 'calendar-red' };
    case 'pending':
    default:
      return { text: '待確認', className: 'calendar-yellow' };
  }
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr);
  if (!m) return dateStr;
  const y = m[1];
  const mo = String(parseInt(m[2], 10));
  const d = String(parseInt(m[3], 10));
  return `${y}年${mo}月${d}日`;
}

function formatTime(timeStr) {
  if (!timeStr) return '';
  if (String(timeStr).includes(':')) return String(timeStr);
  return `時段 ${timeStr}`;
}

function FilterDropdown({ placeholder, items, value, onChange }) {
  const label = items.find((i) => i.value === value)?.label ?? placeholder;

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
          <button
            className="dropdown-item"
            type="button"
            onClick={() => onChange('')}
          >
            全部
          </button>
        </li>
        {items.map((item) => (
          <li key={item.value}>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => onChange(item.value)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BookingCard({ booking }) {
  const status = getStatusMeta(booking.status);
  const switchId = `reminderSwitch-${booking.id}`;

  const reminderEnabled = Boolean(booking.reminderEnabled);
  const reminderText = reminderEnabled ? '已設定' : '未設定';
  const reminderClass = reminderEnabled ? 'calendar-green' : 'calendar-red';

  const note = booking.remark || '';

  return (
    <div className="col">
      <div className="card h-100 rounded-0 border-black-400 bg-transparent">
        <div className="card-header ps-4 py-4 card-title-bg">
          <h3 className="mb-0 fs-4 fw-bold text-black-950">{booking.name}</h3>
        </div>

        <div className="card-body p-4">
          {/* 上半部：欄位 */}
          <div className="text-black-600 pb-20 card-content-line">
            <div className="d-flex justify-content-between">
              <p className="mb-20">預約編號</p>
              <p className="mb-20 text-primary">{booking.id}</p>
            </div>

            <div className="d-flex justify-content-between">
              <p className="mb-20">服務項目</p>
              <p className="mb-20 text-primary">{booking.service}</p>
            </div>

            <div className="d-flex justify-content-between">
              <p className="mb-20">預約日期</p>
              <p className="mb-20 text-primary">
                {formatDate(booking.date)} {formatTime(booking.time)}
              </p>
            </div>

            <div className="d-flex justify-content-between">
              <p className="mb-20">聯絡電話</p>
              <p className="mb-20 text-primary">{booking.phone}</p>
            </div>

            <div className="d-flex justify-content-between">
              <p className="mb-20">Email</p>
              <p className="mb-20 text-primary">{booking.email || '-'}</p>
            </div>

            <div className="d-flex justify-content-between">
              <p className="mb-0">預約者訊息</p>
              <p className="mb-0 text-primary">{booking.comment || '-'}</p>
            </div>
          </div>

          {/* 中段：狀態 / 編輯 / 備註 */}
          <div className="py-20 card-content-line">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className={`mb-0 fw-bold ${status.className}`}>
                {status.text}
              </p>

              <div className="d-flex">
                <button
                  type="button"
                  className="btn rounded-1 p-2 text-black-600 d-inline-flex align-items-center"
                  onClick={() => {
                    // 之後要做編輯(PATCH/PUT)再接
                    console.log('edit booking', booking);
                  }}
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
            <p className="mb-0 text-black-600">{note || '—'}</p>
          </div>

          {/* 下段：提醒狀態（目前僅顯示，不回寫） */}
          <div className="pt-20 d-flex justify-content-between align-items-center me-1">
            <div>
              <p className="mb-3">提醒狀態</p>
              <div className="d-flex align-items-center">
                <p className={`mb-0 me-2 ${reminderClass}`}>{reminderText}</p>
                <span
                  className={`check-on ${reminderClass}`}
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="form-check form-switch switch-51">
              <input
                className="form-check-input"
                type="checkbox"
                id={switchId}
                defaultChecked={reminderEnabled}
                onChange={() => {
                  // API 目前沒有 reminder 欄位，所以先不打 API
                }}
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
  const SERVICE_OPTIONS = [
    { label: '紫微命盤', value: '紫微命盤' },
    { label: '擇日開運', value: '擇日開運' },
    { label: '小流年運勢分析', value: '小流年運勢分析' },
    { label: '因緣與感情合盤', value: '因緣與感情合盤' },
  ];

  const TIME_OPTIONS = [
    { label: '上午', value: '上午' },
    { label: '下午', value: '下午' },
    { label: '晚上', value: '晚上' },
  ];

  const STATUS_OPTIONS = [
    { label: '已完成', value: 'completed' },
    { label: '待確認', value: 'pending' },
    { label: '已取消', value: 'canceled' },
  ];

  const [serviceFilter, setServiceFilter] = useState('');
  const [timeFilter, setTimeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState('');

  async function fetchBookings() {
    setErrMsg('');
    setLoading(true);
    try {
      const data = await getBookings();
      // 可以先做排序：日期新到舊
      const sorted = [...data].sort((a, b) =>
        String(b.date || '').localeCompare(String(a.date || ''))
      );
      setBookings(sorted);
    } catch (err) {
      setErrMsg(err instanceof Error ? err.message : 'Fetch failed');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBookings();
  }, []);

  const filteredBookings = useMemo(() => {
    return bookings.filter((b) => {
      const matchService = serviceFilter ? b.service === serviceFilter : true;
      const matchTime = timeFilter
        ? normalizeTimeSlot(b.time) === timeFilter
        : true;
      const matchStatus = statusFilter
        ? normalizeStatus(b.status) === statusFilter
        : true;
      return matchService && matchTime && matchStatus;
    });
  }, [bookings, serviceFilter, timeFilter, statusFilter]);

  const cards = useMemo(
    () => filteredBookings.map((b) => <BookingCard key={b.id} booking={b} />),
    [filteredBookings]
  );

  return (
    <div style={{ backgroundImage: `url(${navBg})` }}>
      <div className="container py-40 py-md-80">
        {/* 錯誤提示 */}
        {errMsg ? (
          <div className="alert alert-danger" role="alert">
            讀取預約資料失敗：{errMsg}
          </div>
        ) : null}

        {/* PC */}
        <div className="d-none d-md-block">
          <div className="row">
            {/* 左側功能（目前先保留靜態） */}
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

            {/* 右側：查詢 + 卡片 */}
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
                      onClick={fetchBookings}
                      title="重新整理"
                    >
                      <img
                        src={iconRefresh}
                        alt="refresh"
                        className="align-bottom"
                      />
                    </button>
                  </div>

                  <div className="d-flex justify-content-between filter-group gap-4">
                    <FilterDropdown
                      placeholder="服務項目"
                      items={SERVICE_OPTIONS}
                      value={serviceFilter}
                      onChange={setServiceFilter}
                    />
                    <FilterDropdown
                      placeholder="預約時間"
                      items={TIME_OPTIONS}
                      value={timeFilter}
                      onChange={setTimeFilter}
                    />
                    <FilterDropdown
                      placeholder="預約狀態"
                      items={STATUS_OPTIONS}
                      value={statusFilter}
                      onChange={setStatusFilter}
                    />
                  </div>
                </div>
              </div>

              {loading ? (
                <div className="text-center py-5">讀取中...</div>
              ) : (
                <div className="row row-cols-1 row-cols-md-3 g-4">{cards}</div>
              )}
            </div>
          </div>
        </div>

        {/* Phone（同一份 cards 直接重用） */}
        <div className="d-block d-md-none">
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
                  onClick={fetchBookings}
                >
                  <img
                    src={iconRefresh}
                    alt="refresh"
                    className="align-bottom"
                  />
                </button>
              </div>

              <div className="d-flex flex-column gap-2">
                <FilterDropdown
                  placeholder="服務項目"
                  items={SERVICE_OPTIONS}
                  value={serviceFilter}
                  onChange={setServiceFilter}
                />
                <FilterDropdown
                  placeholder="預約時間"
                  items={TIME_OPTIONS}
                  value={timeFilter}
                  onChange={setTimeFilter}
                />
                <FilterDropdown
                  placeholder="預約狀態"
                  items={STATUS_OPTIONS}
                  value={statusFilter}
                  onChange={setStatusFilter}
                />
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-4">讀取中...</div>
          ) : (
            <div className="row row-cols-1 row-cols-md-3 g-4">{cards}</div>
          )}
        </div>
      </div>
    </div>
  );
}

function normalizeStatus(status) {
  const s = String(status || '').toLowerCase();
  if (s === 'completed') return 'completed';
  if (s === 'canceled' || s === 'cancelled') return 'canceled';
  return 'pending';
}

function normalizeTimeSlot(time) {
  const t = String(time || '').trim();

  // 回 "上午/下午/晚上"
  if (t === '上午' || t === '下午' || t === '晚上') return t;

  // 回 "HH:mm"：用時間切
  if (t.includes(':')) {
    const hour = parseInt(t.split(':')[0], 10);
    if (!Number.isNaN(hour)) {
      if (hour < 12) return '上午';
      if (hour < 18) return '下午';
      return '晚上';
    }
  }

  // 回數字時段（例：1,2,7）
  const n = Number(t);
  if (!Number.isNaN(n)) {
    if (n <= 3) return '上午';
    if (n <= 6) return '下午';
    return '晚上';
  }

  return t; // 都不符合就原樣
}
