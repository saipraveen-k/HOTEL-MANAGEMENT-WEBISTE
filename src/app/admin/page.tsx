"use client";

import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", revenue: 1800000, occupancy: 71 },
  { month: "Feb", revenue: 2200000, occupancy: 78 },
  { month: "Mar", revenue: 2600000, occupancy: 82 }
];

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-4">
        <Stat title="Revenue" value="Rs.66L" />
        <Stat title="Occupancy" value="82%" />
        <Stat title="Bookings" value="1,248" />
        <Stat title="Active Rooms" value="64" />
      </div>
      <div className="glass h-80 rounded-2xl p-4">
        <h2 className="mb-3 text-lg font-semibold">Revenue Analytics</h2>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff22" />
            <XAxis dataKey="month" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Bar dataKey="revenue" fill="#2f6fed" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-4">
      <p className="text-sm text-white/70">{title}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
    </div>
  );
}
