export default async function addBookings(token: string) {
    try {
      const response = await fetch(
        "https://swdevprac2-backend.vercel.app/api/v1/bookings",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body:
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to add bookings");
      }
  
      return await response.json();
    } catch (error: any) {
      throw new Error(`Failed to add bookings: ${error.message}`);
    }
  }