import { notFound } from "next/navigation";
import { rooms } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

export default function RoomDetailsPage({ params }: { params: { id: string } }) {
  const room = rooms.find((item) => item.id === params.id);
  if (!room) return notFound();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">{room.name}</h1>
      <p className="text-white/80">{room.description}</p>
      <div className="glass rounded-2xl p-5">
        <p>Amenities: {room.amenities.join(", ")}</p>
        <p className="mt-2">Capacity: {room.capacity} guests</p>
        <p className="mt-2">Price: Rs.{room.pricePerNight}/night</p>
      </div>
      <Button>Book This Room</Button>
    </div>
  );
}
