interface HospitalItem {
  _id: string;
  name: string;
  address: string;
  district: string;
  province: string;
  postalcode: string;
  tel: string;
  picture: string;
  __v: number;
  id: string;
}

interface HospitalJson {
  success: boolean;
  count: number;
  pagination: Object;
  data: HospitalItem[];
}

interface HotelItem {
  _id: string;
  name: string;
  address: string;
  district: string;
  province: string;
  postalcode: string;
  tel: string;
  region: string;
  image: string;
  __v: number;
  id: string;
}

interface HotelJson {
  success: boolean;
  count: number;
  pagination: Object;
  data: HotelItem[];
}

interface BookingItem {
  date: Date;
  user: string;
  hotel: string;
  contactEmail: string;
  contactName: string;
  contactTel: string;
  createdAt: Date;
}
