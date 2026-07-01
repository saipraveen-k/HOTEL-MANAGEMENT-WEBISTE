import { Room } from "@/types";

interface RecommendationInput {
  preferredDestinations: string[];
  budgetPerNight: number;
  guestCount: number;
}

export function getAiRoomRecommendations(rooms: Room[], input: RecommendationInput) {
  return rooms
    .filter((room) => room.pricePerNight <= input.budgetPerNight && room.capacity >= input.guestCount)
    .sort((a, b) => {
      const aScore = (input.preferredDestinations.includes(a.destination) ? 1 : 0) + a.rating / 5;
      const bScore = (input.preferredDestinations.includes(b.destination) ? 1 : 0) + b.rating / 5;
      return bScore - aScore;
    })
    .slice(0, 5);
}

export function getSmartPricingSuggestion(basePrice: number, occupancyRate: number) {
  if (occupancyRate > 85) return Math.round(basePrice * 1.18);
  if (occupancyRate < 40) return Math.round(basePrice * 0.9);
  return basePrice;
}
