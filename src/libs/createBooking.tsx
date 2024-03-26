export default async function createBooking(
  token: string,
  id: string,
  body: any
) {
  try {
    const response = await fetch(
      `https://swdevprac2-backend.vercel.app/api/v1/hotels/${id}/bookings`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch bookings");
    }

    return await response.json();
  } catch (error: any) {
    throw new Error(`Failed to fetch bookings: ${error.message}`);
  }
}
