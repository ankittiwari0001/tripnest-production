# 🌍 TripNest — AI Powered Smart Tourism Platform

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-green)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-38BDF8)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 🚀 Overview

TripNest is a modern AI-powered tourism platform that helps travelers discover destinations, explore nearby attractions, find hotels, save favorite places, and manage bookings from a centralized travel dashboard.

Unlike traditional tourism applications that focus only on maps or listings, TripNest combines location discovery, hotel exploration, booking management, and AI-ready travel planning into a single ecosystem.

The project is built with scalability, modular architecture, and real-world product development principles in mind.

---

# 🎯 Problem Statement

Travelers often rely on multiple applications for:

- Discovering tourist attractions
- Finding hotels
- Managing saved destinations
- Tracking bookings
- Planning trips

This fragmented experience creates unnecessary friction.

TripNest solves this by providing a unified travel platform where users can discover, save, plan, and manage travel experiences from one place.

---

# 💡 Solution

TripNest provides:

✅ Smart location discovery

✅ Interactive map experience

✅ Hotel exploration system

✅ Hotel booking workflow

✅ Saved places collection

✅ Personalized dashboard

✅ Secure authentication system

✅ AI-ready travel planning foundation

---

# ✨ Key Features

## 🗺️ Smart Travel Discovery

- Interactive OpenStreetMap Integration
- Dynamic Marker Rendering
- Nearby Places Discovery
- Location-Based Exploration
- Responsive Map Experience
- Real-Time Search

---

## 🏨 Hotel Ecosystem

### Hotel Listing

- Browse available hotels
- Category-based exploration
- Ratings and pricing overview

### Hotel Details

- Hotel overview
- Amenities
- Reviews section
- Similar hotel recommendations

### Hotel Booking

- Secure booking workflow
- Date selection
- Guest management
- Booking confirmation
- MongoDB persistence

---

## ❤️ Saved Places

Users can:

- Save destinations
- Remove saved destinations
- Build travel collections
- Access saved locations from dashboard

Implemented using:

- Zustand
- LocalStorage Persistence

---

## 📅 Booking Management

- Create bookings
- Booking history
- Booking status tracking
- User-specific booking retrieval

---

## 🔐 Authentication & Security

### User Authentication

- Registration
- Login
- Protected Routes

### Security

- JWT Authentication
- Route Protection
- User-specific data access
- Secure API architecture

---

## 📊 Personalized Dashboard

User dashboard provides:

- Saved Places Overview
- Travel Statistics
- Booking Management
- Account Information
- Travel Activity Tracking

---

## 🎨 Modern User Experience

- Responsive Design
- Mobile First Layout
- Skeleton Loading
- Error States
- Empty States
- Framer Motion Animations
- Premium UI Components

---

# 🏗️ System Architecture

```text
┌──────────────────────┐
│      Frontend        │
│  Next.js + React     │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│     API Routes       │
│   Next.js Backend    │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      MongoDB         │
│   Data Persistence   │
└──────────────────────┘
```

---

# 🛠️ Tech Stack

## Frontend

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## Backend

- Next.js Route Handlers
- REST APIs
- JWT Authentication

## Database

- MongoDB
- Mongoose ODM

## State Management

- Zustand

## Mapping

- Leaflet.js
- OpenStreetMap

## Icons

- Lucide React

---

# 📂 Project Structure

```bash
src
│
├── app
│   ├── api
│   │   ├── auth
│   │   ├── bookings
│   │   ├── hotels
│   │   ├── saved
│   │   └── nearby
│   │
│   ├── dashboard
│   ├── hotels
│   ├── saved
│   ├── auth
│   └── page.tsx
│
├── components
│   ├── dashboard
│   ├── hotels
│   ├── booking
│   ├── map
│   ├── ui
│   └── layout
│
├── hooks
├── lib
├── models
├── services
├── store
├── types
└── utils
```

---

# ⚡ Engineering Highlights

### Scalable Architecture

- Modular component structure
- Reusable business logic
- Separation of concerns

### Authentication Layer

- JWT token generation
- Token validation
- Protected API routes

### Data Management

- MongoDB schema modeling
- User-specific queries
- Booking persistence

### Performance Optimizations

- Client-side filtering
- Reusable hooks
- Optimized rendering patterns

### Developer Experience

- TypeScript Type Safety
- Reusable Components
- Clean Folder Architecture

---

# 📸 Product Screenshots

## Landing Page

![Landing Page](./touriest/public/landing%20page.png)

---

## Interactive Map

![Interactive Map](./touriest/public/map%20page.png)

---

## Dashboard

![Dashboard](./touriest/public/dashboard%20page.png)

---

## Hotel Details

![Hotel Details](./touriest/public/hoteldetails%20page.png)

---

## Booking History

![Booking History](./touriest/public/bookingdetails%20page.png)

# 🚀 Current Development Status

## ✅ Completed

- Authentication System
- JWT Security
- Interactive Maps
- Nearby Places Discovery
- Saved Places
- Hotel Listing
- Hotel Details
- Hotel Booking
- Booking History
- Dashboard
- Responsive UI

---

## 🔄 In Progress

- Dashboard Enhancements
- Restaurant Module
- Travel Analytics
- AI Integration

---

## 🚀 Planned

### AI Travel Assistant

Generate personalized travel recommendations.

### Smart Trip Planner

Create multi-day itineraries.

### Restaurant Ecosystem

Restaurant discovery and reservations.

### Payment Gateway

Razorpay Integration.

### Multi-Language Support

Travel assistance across regions.

---

# ⚙️ Environment Variables

Create a `.env.local` file:

```env
MONGODB_URI=your_mongodb_uri

JWT_SECRET=your_secret_key

NEXT_PUBLIC_APP_NAME=TripNest
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/ankittiwari0001/tripnest.git
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# 🚢 Deployment

Recommended Platform:

- Vercel

Deployment Checklist:

- Environment Variables
- MongoDB Configuration
- JWT Secret Setup
- SEO Optimization
- Performance Audit

---

# 👨‍💻 Author

### Ankit Tiwari

Full Stack Developer

Building scalable web applications using:

- Next.js
- TypeScript
- MongoDB
- React
- Modern Web Technologies

GitHub:

https://github.com/ankittiwari0001

---

# ⭐ Support

If you found this project valuable:

⭐ Star the repository

🍴 Fork the project

🚀 Share feedback and suggestions

---

## Future Vision

TripNest aims to evolve into a complete AI-powered travel ecosystem where users can:

- Discover destinations
- Plan trips with AI
- Book hotels
- Reserve restaurants
- Manage itineraries
- Access personalized travel insights

All from a single platform.
