import axios from "axios";
import Cookies from "js-cookie";

const API_URL = import.meta.env.VITE_API_URL;

// 一次獲取所有users資料的 API
export const fetchAllData = async () => {
  const urlItems = [`users`, `bookings`, `posts`, `services`];

  try {
    // Promise.all 並行請求
    const promises = urlItems.map((item) => axios.get(`${API_URL}/${item}`));
    const responses = await Promise.all(promises);

    // 將結果整理成物件
    const result = {};

    urlItems.forEach((item, index) => {
      result[item] = responses[index].data;
    });
    return result;
  } catch (error) {
    console.error("API 請求錯誤:", error);
  }
};

// 使用者相關 API
const loginUrl = `${API_URL}/login`;

const setUserCookie = (userData) => {
  const userInfo = {
    userId: userData.id,
    name: userData.name,
    email: userData.email,
    role: userData.role,
  };

  Cookies.set("userData", JSON.stringify(userInfo), {
    expires: 1 / 24,
    path: "/",
    sameSite: "lax",
  });

  console.log(`userData 已寫入 cookie：${Cookies.get("userData")}`);
};

// 檢查是否已登入，並返回登入狀態和 userData
export const checkIsAuth = async () => {
  // 檢查是否有 token
  const token = Cookies.get("token");
  if (token) {
    // 讀取 userData
    const userData = Cookies.get("userData");
    console.log(` ${userData.email} 已登入，token: ${token}`);
    return [true, userData ? JSON.parse(userData) : null];
  } else {
    console.log(`尚未登入`);
    return [false, null];
  }
};

// 登入 API
export const userLogin = async (data) => {
  try {
    const response = await axios.post(loginUrl, data);
    console.log(`登入成功: ${response.data.user.email}`);

    // user data 寫入 cookie
    setUserCookie(response.data.user);

    const token = response.data.accessToken;
    Cookies.set("token", token, {
      expires: 1 / 24,
      path: "/",
      sameSite: "lax",
    });
    // 設定 axios 預設 header
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log(`Token 已寫入 cookie：${Cookies.get("token")}`);

    return { success: true, data: response.data };
  } catch (error) {
    console.error("登入失敗:", error.response?.data || error.message);
    return { success: false, error: error.response?.data || error.message };
  }
};

// 登出 API
export const userLogout = () => {
  Cookies.remove("token", { path: "/" });
  Cookies.remove("userData", { path: "/" });
  delete axios.defaults.headers.common["Authorization"];
  console.log("已登出，token 和 userData 已從 cookie 中移除");
};

// 註冊 API
export const userRegister = async (data) => {
  const registerUrl = `${API_URL}/register`;
  try {
    const response = await axios.post(registerUrl, {
      name: data.name,
      email: data.email,
      password: data.password,
      role: "user",
      remark: "",
    });
    console.log("註冊成功:", response.data);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("註冊失敗:", error.response?.data || error.message);
    return { success: false, error: error.response?.data || error.message };
  }
};

// 刪除使用者 API
export const userDelete = async (userId) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${userId}`);
    console.log("刪除成功:", response.data);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("刪除失敗:", error.response?.data || error.message);
    return { success: false, error: error.response?.data || error.message };
  }
};

// 編輯使用者 API
export const userEdit = async (userId, data) => {
  try {
    const response = await axios.put(`${API_URL}/users/${userId}`, data);
    console.log("編輯成功:", response.data);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("編輯失敗:", error.response?.data || error.message);
    return { success: false, error: error.response?.data || error.message };
  }
};

// 預約相關 API createBooking
// 新增預約 API
export const createBooking = async (data) => {
  console.log(`預約資料data:`, data);
  try {
    const response = await axios.post(`${API_URL}/bookings`, data);
    console.log(`預約成功: ${data.email}`);
    return response.data;
  } catch (error) {
    console.error("預約錯誤:", error.response?.data || error.message);
    throw error;
  }
};

// 取得所有預約 API
export const fetchBookings = async () => {
  try {
    const response = await axios.get(`${API_URL}/bookings`);
    return response.data;
  } catch (error) {
    console.error("取得預約資料失敗:", error.response?.data || error.message);
    return [];
  }
};

// 修改預約 API
export const updateBooking = async (bookingId, data) => {
  try {
    const response = await axios.put(`${API_URL}/bookings/${bookingId}`, data);
    console.log("修改預約成功:", response.data);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("修改預約失敗:", error.response?.data || error.message);
    return { success: false, error: error.response?.data || error.message };
  }
};

// 刪除預約 API
export const deleteBooking = async (bookingId) => {
  try {
    const response = await axios.delete(`${API_URL}/bookings/${bookingId}`);
    console.log("刪除預約成功:", response.data);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("刪除預約失敗:", error.response?.data || error.message);
    return { success: false, error: error.response?.data || error.message };
  }
};

export default {
  userLogin,
  checkIsAuth,
  userLogout,
  userRegister,
  userDelete,
  userEdit,
  fetchAllData,
  createBooking,
  fetchBookings,
  updateBooking,
  deleteBooking,
};
