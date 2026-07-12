export interface HotelBooking {
  _id: string;

  name: string;

  image: string;

  location: string;

  price: number;

  rating: number;

  category: string;

  description: string;

  amenities: string[];
}
export interface Booking {
  _id: string;

  bookingNumber: string;

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