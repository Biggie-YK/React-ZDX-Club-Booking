import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";

import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
// 日期格式化
import { format } from "date-fns";

import {
  timeOptions,
  statusOptions,
  serviceOptions,
} from "../../api/fromOptionsData";

import { createBooking, updateBooking, deleteBooking } from "../../api/api";

const INITIAL_BOOKING_DATA = {
  name: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  comment: "",
  agreement: true,
  status: "pending",
  remark: "",
};

export default function Bookings({ bookings, onUpdate }) {
  const [currentBookingId, setCurrentBookingId] = useState(null);
  const [modalType, setModalType] = useState("create"); // "create" 或 "edit"

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: INITIAL_BOOKING_DATA, // 使用完整的初始資料,
  });

  const getBookingModal = () => {
    const modalElement = document.getElementById("userModal");
    if (!modalElement) return null;
    return window.bootstrap.Modal.getOrCreateInstance(modalElement);
  };

  const closeModal = useCallback(() => {
    getBookingModal()?.hide();
    reset(INITIAL_BOOKING_DATA);
  }, [reset]);

  const openModal = useCallback(
    (type, bookingData) => {
      setModalType(type);
      if (type === "edit") {
        setCurrentBookingId(bookingData.id);
        reset({
          ...bookingData,
          date: bookingData.date ? new Date(bookingData.date) : null, // 確保日期格式正確
        });
      } else {
        reset(INITIAL_BOOKING_DATA);
        setCurrentBookingId(null);
      }

      getBookingModal()?.show();
    },
    [reset],
  );

  // 新增預約
  const handlecreateBooking = useCallback(
    async (data) => {
      data.date ? (data.date = format(data.date, "yyyy-MM-dd")) : null;
      try {
        await createBooking(data);
        alert("預約新增成功");
        onUpdate(); // 通知父元件更新
        closeModal();
      } catch (error) {
        console.error("Error creating booking:", error);
      }
    },
    [closeModal, onUpdate],
  );

  // 編輯預約
  const handleupdateBooking = useCallback(
    async (data) => {
      data.date ? (data.date = format(data.date, "yyyy-MM-dd")) : null;
      try {
        await updateBooking(currentBookingId, data);
        alert("預約更新成功");
        onUpdate(); // 通知父元件更新
        closeModal();
      } catch (error) {
        console.error("Error updating booking:", error);
      }
    },
    [currentBookingId, closeModal, onUpdate],
  );

  // 刪除預約
  const handleDeleteBooking = async (bookingId) => {
    if (window.confirm("確定要刪除這筆預約嗎？")) {
      try {
        await deleteBooking(bookingId);
        onUpdate(); // 通知父元件更新
      } catch (error) {
        console.error("Error deleting booking:", error);
      }
    }
  };

  const onFormSubmit = (data) => {
    if (modalType === "edit") {
      handleupdateBooking(data);
    } else {
      handlecreateBooking(data);
    }
  };

  return (
    <>
      <div className="product-table container lh-base">
        <div className="row g-4">
          <div className="text-end">
            <button
              type="button"
              className="btn btn-primary px-4 py-2"
              onClick={() => openModal("create", INITIAL_BOOKING_DATA)}
            >
              <i className="bi bi-clock-history ME-2"></i> 新增預約
            </button>
          </div>
          <div className="peosuxrList col">
            <div className="shadow-sm rounded ">
              <div className="text-neutral-50 bg-neutral-800 py-3 px-4 rounded-top mb-3">
                <h2 className="h4 mb-0">
                  <i className="bi bi-calculator-fill me-2"></i> 預約清單
                </h2>
              </div>
              <table className="table table-hover table-striped mb-0 ">
                <thead className="table-secondary">
                  <tr className="py-3">
                    <th>ID</th>
                    <th>Email</th>
                    <th>名字</th>
                    <th>服務項目</th>
                    <th>預約日期</th>
                    <td>預約時段</td>
                    <td>預約者訊息</td>
                    <td>同意預約</td>
                    <td>預約狀態</td>
                    <td>備註</td>
                    <td className="text-start">操作</td>
                  </tr>
                </thead>
                <tbody>
                  {bookings && bookings.length > 0 ? (
                    bookings.map((booking) => {
                      const {
                        id,
                        name,
                        email,
                        service,
                        date,
                        time,
                        comment,
                        agreement,
                        status,
                        remark,
                      } = booking;
                      return id === undefined ? null : (
                        <tr key={id} className="align-middle py-3">
                          <td>{id}</td>
                          <td>{email}</td>
                          <td>{name}</td>
                          <td>{service}</td>
                          <td>{date}</td>
                          <td>
                            {timeOptions.find((option) => option.value === time)
                              ?.label || time}
                          </td>
                          <td>{comment}</td>
                          <td>{agreement ? "是" : "否"}</td>
                          <td>
                            {statusOptions.find(
                              (option) => option.value === status,
                            )?.label || status}
                          </td>
                          <td>{remark}</td>
                          <td className="text-start">
                            <div className="btn-group">
                              <a
                                href="#"
                                className="btn btn-outline-primary btn-sm"
                                aria-current="page"
                                onClick={(e) => {
                                  e.preventDefault();
                                  openModal("edit", booking);
                                }}
                              >
                                編輯
                              </a>
                              <a
                                href="#"
                                className="btn btn-outline-danger btn-sm"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleDeleteBooking(id);
                                }}
                              >
                                刪除
                              </a>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="11" className="text-center">
                        {bookings ? "沒有預約資料" : "載入中..."}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="userModal"
        tabIndex="-1"
        aria-labelledby="userModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog modal-md modal-dialog-centered">
          <div className="modal-content ">
            <div className="modal-header text-white bg-dark">
              <h2 className="modal-title fs-4 " id="bookingModalLabel">
                {modalType === "edit" ? "編輯預約" : "新增預約"}
              </h2>
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </div>

            <div className="modal-body bg-secondary bg-opacity-10 p-4">
              <form onSubmit={handleSubmit(onFormSubmit)} id="bookingForm">
                <div className="row g-3 text-center">
                  <div className="row text-start g-3">
                    <div className="col-12 mb-3">
                      <label htmlFor="email" className="form-label mb-1">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        readOnly={modalType === "edit"}
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        id="email"
                        {...register("email", {
                          required: "Email 為必填欄位",

                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "請輸入有效的 Email 地址",
                          },
                        })}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">
                          {errors.email.message}
                        </div>
                      )}
                    </div>

                    <div className="col-12 mb-3">
                      <label htmlFor="name" className="form-label mb-1">
                        姓名 <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        readOnly={modalType === "edit"}
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        id="name"
                        {...register("name", {
                          required: "姓名為必填欄位",
                        })}
                      />
                      {errors.name && (
                        <div className="invalid-feedback">
                          {errors.name.message}
                        </div>
                      )}
                    </div>

                    <div className="col-12 mb-3">
                      <label htmlFor="phone" className="form-label mb-1">
                        電話 <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        readOnly={modalType === "edit"}
                        className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                        id="phone"
                        {...register("phone", {
                          required: "電話為必填欄位",
                          pattern: {
                            value: /^\d{10}$/,
                            message: "請輸入有效的電話號碼",
                          },
                        })}
                      />
                      {errors.phone && (
                        <div className="invalid-feedback">
                          {errors.phone.message}
                        </div>
                      )}
                    </div>

                    <div className="col-12 mb-3">
                      <label htmlFor="service" className="form-label mb-1">
                        服務項目 <span className="text-danger">*</span>
                      </label>
                      <select
                        style={
                          modalType === "edit"
                            ? {
                                pointerEvents: "none",
                                backgroundColor: "#e9ecef",
                              }
                            : {}
                        }
                        className="form-select"
                        id="service"
                        {...register("service", {
                          required: "服務項目為必填欄位",
                        })}
                      >
                        {serviceOptions.map((option) => (
                          <option key={option.id} value={option.value}>
                            {option.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-12 mb-3">
                      <label htmlFor="date" className="form-label mb-1">
                        預約日期 <span className="text-danger">*</span>
                      </label>
                      <div>
                        <Controller
                          name="date"
                          id="date"
                          control={control}
                          rules={{ required: "日期為必填欄位" }}
                          render={({ field }) => (
                            <DatePicker
                              className="form-control"
                              selected={field.value}
                              onChange={(date) => field.onChange(date)}
                              dateFormat="yyyy/MM/dd"
                              placeholderText="請選擇日期"
                              readOnly={modalType === "edit"}
                            />
                          )}
                        />

                        {errors.date && (
                          <div className="invalid-feedback d-block">
                            {errors.date.message}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-12 mb-3">
                      <label htmlFor="time" className="form-label mb-1">
                        時段 <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select"
                        id="time"
                        style={
                          modalType === "edit"
                            ? {
                                pointerEvents: "none",
                                backgroundColor: "#e9ecef",
                              }
                            : {}
                        }
                        {...register("time", {
                          required: "時段為必填欄位",
                        })}
                      >
                        <option value="">請選擇時段</option>
                        {timeOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-12 mb-3">
                      <label htmlFor="status" className="form-label mb-1">
                        狀態
                      </label>
                      <select
                        className="form-select"
                        id="status"
                        {...register("status")}
                      >
                        {statusOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-12 mb-3">
                      <label htmlFor="remark" className="form-label mb-1">
                        備註
                      </label>
                      <textarea
                        className="form-control"
                        id="remark"
                        rows="3"
                        {...register("remark")}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="modal-footer bg-secondary bg-opacity-10 mb-4 me-4">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                  >
                    關閉
                  </button>
                  <button
                    type="submit"
                    form="bookingForm"
                    className="btn btn-primary"
                  >
                    {modalType === "edit" ? "儲存變更" : "新增預約"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
