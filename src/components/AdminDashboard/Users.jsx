import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import Register from "../../pages/Register";

const INITIAL_USER_DATA = {
  name: "",
  email: "",
  role: "user",
  remark: "",
};

export default function Users({ users }) {
  const API_URL = import.meta.env.VITE_API_URL;
  const usersUrl = `${API_URL}/users`;
  console.log("usersUrl:", usersUrl);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: INITIAL_USER_DATA,
  });

  const [modalType, setModalType] = useState("create");
  const [currentUserId, setCurrentUserId] = useState(null);
  const userModalRef = useRef(null);
  const bsModalRef = useRef(null);

  useEffect(() => {
    if (userModalRef.current) {
      const bootstrap = window.bootstrap;
      if (bootstrap && bootstrap.Modal) {
        bsModalRef.current = new bootstrap.Modal(userModalRef.current);
      }
    }
  }, []);

  const openModal = (type, userData = INITIAL_USER_DATA) => {
    setModalType(type);
    if (type === "edit" && userData.id) {
      setCurrentUserId(userData.id);
      reset(userData);
    } else {
      setCurrentUserId(null);
      reset(INITIAL_USER_DATA);
    }
    if (bsModalRef.current) {
      bsModalRef.current.show();
    }
  };

  const closeModal = () => {
    if (bsModalRef.current) {
      bsModalRef.current.hide();
    }
    reset(INITIAL_USER_DATA);
    setCurrentUserId(null);
  };

  const onSubmit = async (data) => {
    console.log("提交的使用者資料:", data);
    try {
      if (modalType === "create") {
        console.log("正在新增使用者...");
        await axios.post(usersUrl, data);
      } else if (modalType === "edit") {
        await axios.put(`${usersUrl}/${currentUserId}`, data);
      }
      closeModal();
      // 可以在這裡觸發重新載入使用者列表
      window.location.reload();
    } catch (error) {
      console.error("儲存使用者失敗:", error);
      alert("儲存失敗,請稍後再試");
    }
  };

  const handleDelete = async (userId) => {
    if (confirm("確定要刪除此使用者嗎?")) {
      try {
        await axios.delete(`${usersUrl}/${userId}`);
        window.location.reload();
      } catch (error) {
        console.error("刪除使用者失敗:", error);
        alert("刪除失敗,請稍後再試");
      }
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
              onClick={() => openModal("create", INITIAL_USER_DATA)}
            >
              新增使用者
            </button>
          </div>
          <div className="peosuxrList col">
            <div className="shadow-sm rounded ">
              <div className="text-neutral-50 bg-neutral-800 py-3 px-4 rounded-top mb-3">
                <h2 className="h4 mb-0">使用者清單</h2>
              </div>
              <table className="table table-hover table-striped mb-0 ">
                <thead className="table-secondary">
                  <tr className="py-3">
                    <th>ID</th>
                    <th>Email</th>
                    <th>名字</th>
                    <th>角色</th>
                    <th>備註</th>
                    <td>管理</td>
                  </tr>
                </thead>
                <tbody>
                  {users && users.length > 0 ? (
                    users.map((user) => {
                      const { id, name, email, role, remark } = user;
                      return id === undefined ? null : (
                        <>
                          <tr key={id} className="align-middle py-3">
                            <td>{id}</td>
                            <td>{email}</td>
                            <td>{name}</td>
                            <td>{role}</td>
                            <td>{remark}</td>
                            <td className="text-center">
                              <div className="btn-group">
                                <a
                                  href="#"
                                  className="btn btn-outline-primary btn-sm"
                                  aria-current="page"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    openModal("edit", user);
                                  }}
                                >
                                  編輯
                                </a>
                                <a
                                  href="#"
                                  className="btn btn-outline-danger btn-sm"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleDelete(id);
                                  }}
                                >
                                  刪除
                                </a>
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">
                        載入中...
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
        ref={userModalRef}
      >
        <div className="modal-dialog modal-md modal-dialog-centered">
          <div className="modal-content ">
            <div className="modal-header text-white bg-dark">
              <h2 className="modal-title fs-4 " id="userModalLabel">
                {modalType === "edit" ? "編輯使用者" : "新增使用者"}
              </h2>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {modalType === "edit" ? "編輯使用者" : "新增使用者"}

            <div className="modal-body bg-secondary bg-opacity-10 p-4">
              <form onSubmit={handleSubmit(onSubmit)} id="userForm">
                <div className="row g-3 text-center">
                  <div className="row text-start g-3">
                    {/* 姓名 */}
                    <div className="col-12 mb-3">
                      <label htmlFor="name" className="form-label mb-1">
                        姓名 <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        id="name"
                        placeholder="請輸入姓名"
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

                    {/* Email */}
                    <div className="col-12 mb-3">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        id="email"
                        placeholder="請輸入 Email"
                        {...register("email", {
                          required: "Email 為必填欄位",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Email 格式不正確",
                          },
                        })}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">
                          {errors.email.message}
                        </div>
                      )}
                    </div>

                    {/* 角色 */}
                    <div className="col-12 mb-3">
                      <label htmlFor="role" className="form-label mb-1">
                        角色 <span className="text-danger">*</span>
                      </label>
                      <select
                        className={`form-select ${errors.role ? "is-invalid" : ""}`}
                        id="role"
                        {...register("role", {
                          required: "角色為必填欄位",
                        })}
                      >
                        <option value="user">一般使用者</option>
                        <option value="admin">管理員</option>
                      </select>
                      {errors.role && (
                        <div className="invalid-feedback">
                          {errors.role.message}
                        </div>
                      )}
                    </div>

                    {/* 備註 */}
                    <div className="col-12 mb-3">
                      <label htmlFor="remark" className="form-label mb-1">
                        備註
                      </label>
                      <textarea
                        className="form-control"
                        id="remark"
                        rows="3"
                        placeholder="請輸入備註"
                        {...register("remark")}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="modal-footer bg-secondary bg-opacity-10 mb-4 me-4">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => closeModal()}
              >
                關閉
              </button>
              <button type="submit" form="userForm" className="btn btn-primary">
                儲存變更
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
