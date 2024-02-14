# SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe

![Untitled design](https://github.com/sudh-202/saas_platform/assets/87563365/e4c8d111-1470-43b9-a6ce-81839c48a378)

This is a repository for SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe 

### Deploy (Vercel)
https://saas-platform-one.vercel.app/

### Features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Clerk Authentication (Email, Google, 9+ Social Logins)
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Image Generation Tool (Open AI)
- Video Generation Tool (Replicate AI)
- Conversation Generation Tool (Open AI)
- Music Generation Tool (Replicate AI)
- Page loading state
- Stripe monthly subscription
- Free tier with API limiting
- How to write POST, DELETE, and GET routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle relations between Server and Child components!
- How to reuse layouts
- Folder structure in Next 13 App Router

### Prerequisites
## Cloning the repository
```javascript
git clone https://github.com/sudh-202/saas_platform.git
```
## Install packages
```javascript
npm install
```
## Setup .env file
```javascript
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```
## Setup Prisma
###Add MySQL Database (I used Superbase)
```javascript
npx prisma db push
```
## Start the app
```javascript
npm run dev
```

## For more information about this app, visit my Blog
https://devsudhanshu-portfolio.vercel.app/next-post

## For more Such Projects, visit my Portfolio site
https://devsudhanshu-portfolio.vercel.app/

