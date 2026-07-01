# Firestore Schema (StayEase)

## Collections

- `users`: profile, role, preferences, favorites
- `rooms`: room catalog, amenities, pricing, availability windows
- `bookings`: reservation details, status lifecycle, calculated totals
- `reviews`: rating/comment moderation queue
- `payments`: payment intent logs, invoice metadata, status
- `amenities`: global amenity catalog
- `notifications`: in-app/email notification records

## Example Document Shapes

```ts
users/{uid}
{
  email: string;
  name: string;
  role: "guest" | "admin";
  favorites: string[];
  createdAt: Timestamp;
}

rooms/{roomId}
{
  name: string;
  type: "deluxe" | "suite" | "villa" | "standard";
  destination: string;
  pricePerNight: number;
  capacity: number;
  amenities: string[];
  images: string[];
  rating: number;
  reviewCount: number;
  isActive: boolean;
}

bookings/{bookingId}
{
  userId: string;
  roomId: string;
  checkIn: Timestamp;
  checkOut: Timestamp;
  guests: number;
  totalPrice: number;
  status: "pending" | "approved" | "cancelled" | "checked-in" | "checked-out";
  createdAt: Timestamp;
}
```
