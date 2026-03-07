// src/api/bookings.js
const API_BASE = 'https://zdx-club-booking-api.zeabur.app';

export async function getBookings() {
  const res = await fetch(`${API_BASE}/bookings`, {
    headers: { Accept: 'application/json' },
  });

  if (!res.ok) {
    throw new Error(`GET /bookings failed: ${res.status}`);
  }

  return res.json(); // 會是一個 array :contentReference[oaicite:1]{index=1}
}
