import { Booking } from "@/types";

export function calculateBookingPrice(pricePerNight: number, nights: number, guests: number) {
  const base = pricePerNight * nights;
  const serviceFee = base * 0.08;
  const guestFee = guests > 2 ? (guests - 2) * 750 : 0;
  return Math.round(base + serviceFee + guestFee);
}

export function buildBookingSummary(booking: Booking) {
  return {
    id: booking.id,
    period: `${booking.checkIn} - ${booking.checkOut}`,
    guests: booking.guests,
    totalPrice: booking.totalPrice,
    status: booking.status
  };
}
