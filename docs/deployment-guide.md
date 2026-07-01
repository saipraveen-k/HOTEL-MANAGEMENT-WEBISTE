# StayEase Deployment Guide (Vercel)

## 1) Prerequisites

- Firebase project with Auth, Firestore, Storage enabled
- GitHub repository containing this project
- Vercel account

## 2) Environment Variables

Set these in Vercel Project Settings:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

## 3) Deploy Steps

1. Import repository in Vercel.
2. Framework preset: `Next.js`.
3. Build command: `npm run build`.
4. Output directory: `.next` (default).
5. Deploy.

## 4) Post Deploy

- Add Vercel domain under Firebase Authentication -> Authorized domains.
- Deploy Firestore rules:
  - `firebase deploy --only firestore:rules`
- Configure admin custom claims for RBAC.

## 5) Production Hardening Checklist

- Add App Check for Firebase
- Add server-side booking conflict checks
- Add payment verification webhooks
- Add logging/monitoring (Sentry, Analytics)
