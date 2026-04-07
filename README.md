# Habit Tracker

A cross-platform mobile habit tracker built with Expo and React Native.

Track daily habits, visualize consistency, and build streaks with a clean, offline-first experience.

## What It Does

- Today dashboard with progress bar and completion ratio
- Add habit flow with icon picker, color picker, and live preview
- Delete habits directly from the today list
- Per-habit streak cards and overall perfect-day streak
- 7-week heatmap view of completion history
- Smooth animations and iOS haptic feedback
- Local persistence with no account required

## Tech Stack

- Expo SDK 54
- React Native 0.81
- Expo Router 6 (file-based routing)
- React Native Reanimated 4
- Expo Audio (completion sound)
- Expo Haptics (iOS feedback)
- Expo SQLite localStorage polyfill for persistence
- Expo Vector Icons (Ionicons) for cross-platform icon rendering
- TypeScript

## Quick Start

### Prerequisites

- Node.js LTS
- npm
- One of the following:
  - Android Emulator
  - iOS Simulator (macOS)
  - Expo Go on a physical device

### Install

1. Clone the repo
2. Install dependencies

Example:

    git clone <your-repo-url>
    cd Habit-Tracker-App-main
    npm install

### Run

Start dev server:

    npm run start

Platform shortcuts:

    npm run android
    npm run ios
    npm run web

## Available Scripts

- npm run start: Start Expo dev server
- npm run android: Launch on Android
- npm run ios: Launch on iOS
- npm run web: Launch web target
- npm run lint: Run lint checks

## App Architecture

### Navigation

- Root tabs: Today and Streaks
- Home stack includes Add Habit screen shown as a form sheet

### Data Model

- Habit
  - id: string
  - name: string
  - icon: string
  - color: string
  - createdAt: string (ISO)
- CompletionMap
  - key: YYYY-MM-DD
  - value: array of completed habit ids for that date

### Storage

- Storage is built on localStorage backed by expo-sqlite install shim
- A small in-memory cache reduces repeated reads
- Subscriptions allow UI to reactively update via useSyncExternalStore

### Icon System

- Habit icon values are stored as symbolic names in utilities
- UI rendering uses Ionicons for Android and iOS consistency
- Mapping is centralized in utils/icon-map.ts through toIoniconName()

## Project Structure

    app/
      _layout.tsx
      (home)/
        _layout.tsx
        index.tsx
        add-habit.tsx
      (streaks)/
        _layout.tsx
        index.tsx
    components/
      color-picker.tsx
      habit-card.tsx
      heatmap.tsx
      icon-picker.tsx
      streak-card.tsx
    hooks/
      use-storage.ts
    utils/
      habits.ts
      icon-map.ts
      storage.ts
    assets/
      images/
      sounds/
    app.json
    eslint.config.js
    expo-env.d.ts
    package.json
    tsconfig.json

## Core Screens and Components

- app/(home)/index.tsx
  - Shows today progress and habit list
  - Supports toggle complete and delete habit
- app/(home)/add-habit.tsx
  - Habit creation form with scroll-safe input/picker layout
- app/(streaks)/index.tsx
  - Overall streak summary, heatmap, and habit streak cards
- components/habit-card.tsx
  - Animated row with complete toggle and delete action
- components/heatmap.tsx
  - 7-week completion visualization

## Behavior Notes

- Deleting a habit also removes that habit id from historical completion entries
- Streaks are computed from stored completion history and active habits
- Haptic feedback is gated to iOS at runtime

## Troubleshooting

- Metro cache issues

  npx expo start -c

- Dependency mismatch warnings
  - Run npm install again after pulling changes

- Android icon inconsistencies
  - Confirm icon rendering uses Ionicons and mapping from utils/icon-map.ts
