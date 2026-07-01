"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { rooms } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";

export default function RoomsPage() {
  const [query, setQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState<number>(20000);
  const [capacity, setCapacity] = useState<number>(1);

  const filtered = useMemo(
    () =>
      rooms.filter(
        (room) =>
          room.name.toLowerCase().includes(query.toLowerCase()) &&
          room.pricePerNight <= maxPrice &&
          room.capacity >= capacity
      ),
    [query, maxPrice, capacity]
  );

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Browse Rooms</h1>
      <div className="glass grid gap-3 rounded-2xl p-4 md:grid-cols-3">
        <Input placeholder="Search rooms" value={query} onChange={(e) => setQuery(e.target.value)} />
        <Input type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />
        <Input type="number" value={capacity} onChange={(e) => setCapacity(Number(e.target.value))} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((room) => (
          <Link href={`/rooms/${room.id}`} key={room.id} className="glass rounded-2xl p-5">
            <h2 className="text-xl font-semibold">{room.name}</h2>
            <p className="mt-2 text-white/70">{room.destination}</p>
            <p className="mt-2 text-sm">Rs.{room.pricePerNight}/night</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
