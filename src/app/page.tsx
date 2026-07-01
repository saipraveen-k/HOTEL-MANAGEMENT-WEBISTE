"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { rooms } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

const destinations = ["Goa", "Bengaluru", "Jaipur", "Mumbai", "Manali"];
const amenities = ["Infinity Pool", "Fine Dining", "Spa & Wellness", "Co-working Lounge"];

export default function HomePage() {
  return (
    <div className="space-y-16">
      <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-8">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/70">Premium stays, seamless bookings</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">StayEase hospitality platform for modern hotels.</h1>
        <p className="mt-4 max-w-2xl text-white/80">Search, reserve, manage, and analyze bookings in one startup-grade SaaS dashboard.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/rooms">Explore Rooms</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/auth/register">Get Started</Link>
          </Button>
        </div>
      </motion.section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Featured Rooms</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {rooms.map((room) => (
            <article key={room.id} className="glass rounded-2xl p-5">
              <h3 className="text-xl font-semibold">{room.name}</h3>
              <p className="mt-2 text-white/70">{room.description}</p>
              <p className="mt-3 text-sm text-white/80">From Rs.{room.pricePerNight}/night</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Popular Destinations</h2>
        <div className="flex flex-wrap gap-3">
          {destinations.map((city) => (
            <span key={city} className="glass rounded-full px-4 py-2 text-sm">
              {city}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Hotel Amenities</h2>
        <div className="grid gap-3 md:grid-cols-4">
          {amenities.map((item) => (
            <div key={item} className="glass rounded-xl p-4 text-center text-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="glass rounded-3xl p-6">
        <h2 className="text-2xl font-semibold">Customer Testimonials</h2>
        <p className="mt-3 text-white/80">"StayEase made our family vacation booking effortless and transparent." - Priya S.</p>
      </section>

      <section className="glass rounded-3xl p-6">
        <h2 className="text-2xl font-semibold">Newsletter</h2>
        <p className="mt-2 text-white/70">Get exclusive offers and seasonal travel recommendations.</p>
      </section>
    </div>
  );
}
