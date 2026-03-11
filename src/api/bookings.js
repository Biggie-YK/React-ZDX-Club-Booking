// src/api/bookings.js
const API_BASE = 'https://zdx-club-booking-api.zeabur.app';

export async function getBookings() {
  const res = await fetch(`${API_BASE}/bookings`, {
    headers: { Accept: 'application/json' },
  });
  if (!res.ok) throw new Error(`GET /bookings failed: ${res.status}`);
  return res.json();
}

export async function updateBooking(id, patch) {
  const res = await fetch(`${API_BASE}/bookings/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(patch),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`PATCH /bookings/${id} failed: ${res.status} ${text}`);
  }
  return res.json();
}
