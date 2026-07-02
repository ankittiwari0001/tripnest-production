export interface HotelBooking {
  _id: string;
  name: string;
  city: string;
  image: string;
  price: number;
}

export interface Booking {
  _id: string;

  hotelId: HotelBooking;

  checkIn: string;
  checkOut: string;

  guests: number;

  totalPrice: number;

  bookingStatus:
    | "Confirmed"
    | "Pending"
    | "Cancelled";

  paymentStatus:
    | "Pending"
    | "Paid";

  createdAt: string;
}