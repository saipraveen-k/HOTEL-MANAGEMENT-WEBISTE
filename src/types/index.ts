export type UserRole = "guest" | "admin";

export interface AppUser {
  id: string;
  email: string;
  name: string;
  photoURL?: string;
  role: UserRole;
  favorites: string[];
  createdAt: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  destination: string;
  type: "deluxe" | "suite" | "villa" | "standard";
  pricePerNight: number;
  capacity: number;
  amenities: string[];
  images: string[];
  rating: number;
  reviewCount: number;
  isActive: boolean;
}

export interface Booking {
  id: string;
  userId: string;
  roomId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: "pending" | "approved" | "cancelled" | "checked-in" | "checked-out";
  createdAt: string;
}

export interface Review {
  id: string;
  userId: string;
  roomId: string;
  rating: number;
  comment: string;
  approved: boolean;
  createdAt: string;
}
