# StayEase - Hotel Management & Booking Platform

StayEase is a production-ready full-stack hospitality SaaS built with Next.js 15, Firebase, Tailwind, and TypeScript.  
It includes modern hotel browsing, booking workflows, user/admin dashboards, analytics, and AI-ready recommendation helpers.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn-style reusable UI
- Firebase Authentication + Firestore + Storage
- Zustand
- React Hook Form + Zod
- Recharts
- Framer Motion
- Vercel-ready deployment

## Key Features

### User Side

- Premium landing page (hero, featured rooms, destinations)
- Email/password + Google auth flow scaffolding
- Room browsing and filters (price/capacity/search)
- Room details with amenities and review support points
- Booking summary and price calculation
- User dashboard (active reservations, booking history, favorites)
- Invoice generation extension points (`jspdf` included)

### Admin Side

- Dashboard KPIs (revenue, occupancy, bookings, active rooms)
- Revenue chart analytics with Recharts
- Room/booking/customer/insights management architecture
- Role-based route protection via middleware

### Production Essentials

- Typed domain models in `src/types`
- Centralized utility and API helper modules
- Firestore security rules (`firestore.rules`)
- Firestore schema reference (`docs/firestore-schema.md`)
- Error boundaries and loading skeletons
- Environment template (`.env.example`)

## Project Structure

```text
src/
  app/
    admin/
    auth/
    bookings/
    dashboard/
    rooms/
    error.tsx
    loading.tsx
    layout.tsx
    page.tsx
  components/
    layout/
    ui/
    providers.tsx
  lib/
    ai/
    api/
    firebase.ts
    mock-data.ts
    utils.ts
  store/
    use-app-store.ts
  types/
    index.ts
docs/
  firestore-schema.md
firestore.rules
```

## Setup

1. Install dependencies:
   `npm install`
2. Create env file:
   `cp .env.example .env.local` (on Windows, copy manually)
3. Add Firebase values in `.env.local`
4. Run development server:
   `npm run dev`

## Firebase Configuration Checklist

- Enable Authentication:
  - Email/Password
  - Google provider
- Create Firestore DB (production mode recommended)
- Upload security rules from `firestore.rules`
- Enable Firebase Storage for room images and invoices
- Add custom claims (`role: "admin"`) for admin users

## Deployment (Vercel)

1. Push code to GitHub.
2. Import repository in Vercel.
3. Add all `.env.example` keys to Vercel Environment Variables.
4. Deploy with default Next.js settings.
5. Configure Firebase authorized domains for the Vercel URL.

## AI Feature Integration Points

- `src/lib/ai/recommendations.ts`
  - personalized room recommendations
  - smart pricing suggestion based on occupancy
- Extend with Vertex AI / OpenAI for behavior insights and recommendation scoring.

## Next Improvements

- Connect all pages to live Firestore queries/mutations
- Add payment gateway (Stripe/Razorpay) under `payments` collection
- Implement email confirmation pipeline (Cloud Functions + provider)
- Add PDF invoice endpoint and download history
- Add moderation queue UI for reviews and notifications center

---
