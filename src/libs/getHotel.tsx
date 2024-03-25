export default async function getHotels(token: string|null,limit:number,page:number,selectedRegion:string){
    const response = (selectedRegion==="None") ? await fetch(
        `https://swdevprac2-backend.vercel.app/api/v1/hotels?limit=${limit}&page=${page}`,
        {
            method: 'GET',
            headers: {
            Authorization: `Bearer ${token}`,
            },
        }
        ) : await fetch(
        `https://swdevprac2-backend.vercel.app/api/v1/hotels?limit=${limit}&page=${page}&region[in]-${selectedRegion}`,
        {
            method: 'GET',
            headers: {
            Authorization: `Bearer ${token}`,
            },
        }
        );

    if (!response.ok) {
        console.log(response);
      throw new Error("Failed to fetch hospitals");
    }
    return await response.json();
}
  