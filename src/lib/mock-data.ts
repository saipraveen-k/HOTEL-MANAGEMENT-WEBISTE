import { Room } from "@/types";

export const rooms: Room[] = [
  {
    id: "room-1",
    name: "Oceanfront Executive Suite",
    description: "Sea-view suite with private balcony and premium concierge.",
    destination: "Goa",
    type: "suite",
    pricePerNight: 18900,
    capacity: 3,
    amenities: ["WiFi", "Pool", "Breakfast", "Airport Pickup"],
    images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945"],
    rating: 4.8,
    reviewCount: 230,
    isActive: true
  },
  {
    id: "room-2",
    name: "Urban Business Deluxe",
    description: "Modern business room near city center with workspace.",
    destination: "Bengaluru",
    type: "deluxe",
    pricePerNight: 9200,
    capacity: 2,
    amenities: ["WiFi", "Gym", "Workspace"],
    images: ["https://images.unsplash.com/photo-1590490360182-c33d57733427"],
    rating: 4.6,
    reviewCount: 145,
    isActive: true
  }
];
