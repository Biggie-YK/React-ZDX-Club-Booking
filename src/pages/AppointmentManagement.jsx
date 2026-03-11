// src/pages/AppointmentManagement.jsx
import { useCallback, useEffect, useMemo, useState } from 'react';
// import { getBookings } from '../api/bookings';

import navBg from '../assets/images/index/nav-bg.png';
import titleDeco from '../assets/images/index/title-deco.png';

import iconVector from '../assets/images/appointment-management/Vector.png';
import iconRefresh from '../assets/images/appointment-management/refresh.png';
import iconAngleDown from '../assets/images/appointment-management/angle-small-down.png';
import iconEdit from '../assets/images/appointment-management/u-edit.png';

import { getBookings, updateBooking } from '../api/bookings';

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

const STATUS_OPTIONS = [
  { label: '待處理/待審核', value: 'pending', colorClass: 'calendar-yellow' },
  { label: '已確認', value: 'confirmed', colorClass: 'calendar-green' },
  { label: '已取消', value: 'cancelled', colorClass: 'calendar-red' },
  { label: '已完成', value: 'completed', colorClass: 'calendar-green' },
  { label: '已逾期', value: 'expired', colorClass: 'calendar-red' },
];

// function getStatusMeta(status) {
//   switch ((status || 'pending').toLowerCase()) {
//     case 'completed':
//       return { text: '已完成', className: 'calendar-green' };
//     case 'canceled':
//       return { text: '已取消', className: 'calendar-red' };
//     case 'noshow':
//       return { text: '未出席', className: 'calendar-red' };
//     case 'pending':
//     default:
//       return { text: '待確認', className: 'calendar-yellow' };
//   }
// }

function statusMeta(status) {
  const s = String(status || 'pending').toLowerCase();
  const hit = STATUS_OPTIONS.find((o) => o.value === s);
  if (hit) return { text: hit.label, className: hit.colorClass };
  return { text: '待處理/待審核', className: 'calendar-yellow' };
}

function BookingCard({ booking, onEdit }) {
  const status = statusMeta(booking.status);
  <p className={`mb-0 fw-bold ${status.className}`}>{status.text}</p>;

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
                  onClick={() => onEdit(booking)}
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

function ConfirmModal({
  open,
  title = '確認',
  message = '',
  confirmText = '確定',
  cancelText = '取消',
  onConfirm,
  onCancel,
  disabled = false,
  zIndex = 2005,
}) {
  // ESC 取消
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onCancel?.();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <>
      {/* backdrop */}
      <div
        className="modal-backdrop fade show"
        style={{ zIndex: zIndex - 1 }}
        onClick={() => !disabled && onCancel?.()}
      />

      <div
        className="modal fade show d-block"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        style={{ zIndex }}
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => !disabled && onCancel?.()}
              />
            </div>

            <div className="modal-body">
              <p className="mb-0">{message}</p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => !disabled && onCancel?.()}
                disabled={disabled}
              >
                {cancelText}
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onConfirm}
                disabled={disabled}
              >
                {confirmText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function EditBookingModal({ booking, open, onClose, onSave, saving }) {
  const initStatus = String(booking?.status || 'pending').toLowerCase();
  const initRemark = booking?.remark || '';

  const [status, setStatus] = useState(initStatus);
  const [remark, setRemark] = useState(initRemark);

  // Confirm modal 狀態
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmMode, setConfirmMode] = useState(''); // "close" | "save"

  const isDirty = status !== initStatus || remark !== initRemark;

  const closeConfirm = useCallback(() => {
    setConfirmOpen(false);
    setConfirmMode('');
  }, []);

  // 想關閉主 modal（X/取消/backdrop/ESC）時呼叫
  const requestClose = useCallback(() => {
    if (saving) return;

    if (isDirty) {
      setConfirmMode('close');
      setConfirmOpen(true);
      return;
    }

    onClose?.();
  }, [saving, isDirty, onClose]);

  // 想儲存時呼叫（先跳確認）
  const requestSave = () => {
    if (saving) return;

    if (!isDirty) {
      // 沒改就直接關閉（或你想提醒也可改成開 confirm）
      onClose?.();
      return;
    }

    setConfirmMode('save');
    setConfirmOpen(true);
  };

  // ESC：若 confirm 開著 -> 關 confirm；否則 requestClose
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key !== 'Escape') return;

      if (confirmOpen) {
        closeConfirm();
      } else {
        requestClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, confirmOpen, closeConfirm, requestClose]);

  if (!open || !booking) return null;

  const confirmTitle = confirmMode === 'save' ? '確認儲存' : '尚未儲存的變更';
  const confirmMessage =
    confirmMode === 'save'
      ? '即將更新預約狀態與後台備註，確定要儲存嗎？'
      : '有尚未儲存的變更，確定要關閉嗎？';
  const confirmText = confirmMode === 'save' ? '儲存' : '關閉';
  const cancelText = confirmMode === 'save' ? '取消' : '繼續編輯';

  const handleConfirm = () => {
    if (saving) return;

    if (confirmMode === 'save') {
      closeConfirm();
      onSave({ status, remark }); // 父層 PATCH 成功後會關閉 modal
      return;
    }

    // confirmMode === "close"
    closeConfirm();
    onClose?.();
  };

  return (
    <>
      {/* 主 modal backdrop：點擊 -> requestClose */}
      <div className="modal-backdrop fade show" onClick={requestClose} />

      <div
        className="modal fade show d-block"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title">編輯預約（#{booking.id}）</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={requestClose}
                disabled={saving}
              />
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">預約狀態</label>
                <select
                  className="form-select"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  disabled={saving}
                >
                  {STATUS_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-2">
                <label className="form-label">大仙備註</label>
                <textarea
                  className="form-control"
                  rows={4}
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
                  placeholder="只給大仙看的備註..."
                  disabled={saving}
                />
              </div>

              {isDirty ? (
                <div className="small text-danger mt-2">你有尚未儲存的變更</div>
              ) : null}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={requestClose}
                disabled={saving}
              >
                取消
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={requestSave}
                disabled={saving}
              >
                {saving ? '儲存中...' : '儲存'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 同風格確認視窗 */}
      <ConfirmModal
        open={confirmOpen}
        title={confirmTitle}
        message={confirmMessage}
        confirmText={confirmText}
        cancelText={cancelText}
        onConfirm={handleConfirm}
        onCancel={closeConfirm}
        disabled={saving}
        zIndex={2010} // 放在主 modal 之上
      />
    </>
  );
}

function SuccessToast({ show, message, onClose }) {
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => onClose?.(), 2500);
    return () => clearTimeout(t);
  }, [show, onClose]);

  return (
    <div
      className="toast-container position-fixed top-0 start-50 translate-middle-x p-3"
      style={{ zIndex: 2000 }}
    >
      <div
        className={`toast ${show ? 'show' : 'hide'}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <strong className="me-auto">更新成功</strong>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onClose}
          />
        </div>
        <div className="toast-body">{message}</div>
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

  const [serviceFilter, setServiceFilter] = useState('');
  const [timeFilter, setTimeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editing, setEditing] = useState(null); // 被編輯的 booking
  const [editOpen, setEditOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const [toastOpen, setToastOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

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
    () =>
      filteredBookings.map((b) => (
        <BookingCard key={b.id} booking={b} onEdit={openEdit} />
      )),
    [filteredBookings]
  );

  function openEdit(booking) {
    setEditing(booking);
    setEditOpen(true);
  }

  async function handleSave(patch) {
    if (!editing) return;
    setSaving(true);
    setErrMsg('');

    try {
      const updated = await updateBooking(editing.id, patch);
      // 立刻更新前端列表
      setBookings((prev) =>
        prev.map((b) => (b.id === updated.id ? updated : b))
      );
      setEditOpen(false);
      setEditing(null);
      // toast
      setToastMsg('預約狀態與備註已更新');
      setToastOpen(true);
    } catch (e) {
      setErrMsg(e instanceof Error ? e.message : '更新失敗');
    } finally {
      setSaving(false);
    }
  }

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

      <EditBookingModal
        key={editing?.id ?? 'empty'}
        booking={editing}
        open={editOpen}
        onClose={() => {
          setEditOpen(false);
          setEditing(null);
        }}
        onSave={handleSave}
        saving={saving}
      />
      <SuccessToast
        show={toastOpen}
        message={toastMsg}
        onClose={() => setToastOpen(false)}
      />
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
