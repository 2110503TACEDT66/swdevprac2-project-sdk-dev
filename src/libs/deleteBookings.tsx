export default async function deleteBookings(token: string, id: string) {
  try {
    const response = await fetch(
      "https://swdevprac2-backend.vercel.app/api/v1/bookings/" + id,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
