"use client";

import { create } from "zustand";
import { AppUser, Booking, Room } from "@/types";

interface AppState {
  user: AppUser | null;
  rooms: Room[];
  bookings: Booking[];
  setUser: (user: AppUser | null) => void;
  setRooms: (rooms: Room[]) => void;
  setBookings: (bookings: Booking[]) => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  rooms: [],
  bookings: [],
  setUser: (user) => set({ user }),
  setRooms: (rooms) => set({ rooms }),
  setBookings: (bookings) => set({ bookings })
}));
