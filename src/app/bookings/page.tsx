"use client";

import { useState } from "react";
import { rooms } from "@/lib/mock-data";
import { calculateBookingPrice } from "@/lib/api/bookings";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function BookingPage() {
  const room = rooms[0];
  const [nights, setNights] = useState(2);
  const [guests, setGuests] = useState(2);
  const price = calculateBookingPrice(room.pricePerNight, nights, guests);

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <h1 className="text-3xl font-semibold">Booking Checkout</h1>
      <div className="glass rounded-2xl p-5">
        <p className="font-semibold">{room.name}</p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <Input type="number" value={nights} onChange={(e) => setNights(Number(e.target.value))} />
          <Input type="number" value={guests} onChange={(e) => setGuests(Number(e.target.value))} />
        </div>
        <p className="mt-4 text-lg">Total: Rs.{price}</p>
        <Button className="mt-4">Confirm Booking</Button>
      </div>
    </div>
  );
}
