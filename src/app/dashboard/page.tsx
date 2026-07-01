"use client";

import { rooms } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

export default function UserDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">User Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="glass rounded-2xl p-4">
          <p className="text-sm text-white/70">Active Reservations</p>
          <p className="mt-2 text-2xl font-semibold">2</p>
        </div>
        <div className="glass rounded-2xl p-4">
          <p className="text-sm text-white/70">Booking History</p>
          <p className="mt-2 text-2xl font-semibold">14</p>
        </div>
        <div className="glass rounded-2xl p-4">
          <p className="text-sm text-white/70">Favorite Rooms</p>
          <p className="mt-2 text-2xl font-semibold">{rooms.length}</p>
        </div>
      </div>
      <div className="glass rounded-2xl p-5">
        <h2 className="text-xl font-semibold">Recent Bookings</h2>
        <p className="mt-2 text-white/70">Includes cancellation, invoice download, and status tracking.</p>
        <Button className="mt-4">Download Invoice (PDF)</Button>
      </div>
    </div>
  );
}
