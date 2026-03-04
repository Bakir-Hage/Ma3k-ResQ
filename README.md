# Ma3k ResQ

A responsive **roadside assistance web app** built with React + Vite, powered by Firebase.

## Project Description

**Ma3k ResQ** helps drivers quickly find roadside help (e.g., **tow trucks**, **nearby garages**, and **mobile tire services**) during a breakdown. The app is designed for fast, mobile-friendly interaction and is backed by **Firebase Authentication** and **Cloud Firestore** for storing users and service provider data.

- **Problem it solves**: Reduces the time and stress of finding reliable roadside services by organizing providers by type and presenting actionable contact/map options.
- **Target users**: Drivers who need urgent assistance, and service providers who want their services listed.

## Features

- **Emergency dispatch landing** with quick-access service categories
- **Browse services by type** (e.g., tow-truck, garage, tire-service)
- **Service details pages** driven by Firestore data
- **Firebase Authentication** for sign up / sign in
- **Firestore CRUD helpers** for users and services
- **Responsive UI** optimized for desktop and mobile

## Tech Stack

- **Frontend**: React, React Router, Vite
- **Backend**: Firebase (serverless) — Authentication
- **Database**: Cloud Firestore
- **APIs / SDKs**:
  - Firebase Web SDK
  - Google Maps (via `@vis.gl/react-google-maps`) *(if enabled in your UI)*
- **UI / Icons**: `lucide-react`, `react-icons`
- **Tooling**: ESLint

## Prerequisites

- **Node.js** (recommended: LTS)
- **npm** (comes with Node)
- A **Firebase project** with:
  - Authentication enabled (Email/Password)
  - Firestore database enabled

## Installation & Setup

1. **Clone** the repository
2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file** in the project root (see below)
4. **Run the development server**

```bash
npm run dev
```

5. Open the app at `http://localhost:5173`

### Production build (optional)

```bash
npm run build
npm run preview
```

## Environment Variables

This project uses Vite, so environment variables must start with `VITE_`.

Create a `.env` file in the project root:

```bash
VITE_FIRESTORE_API_KEY="YOUR_FIREBASE_API_KEY"
VITE_FIRESTORE_AUTH_DOMAIN="YOUR_PROJECT.firebaseapp.com"
VITE_FIRESTORE_PROJECT_ID="YOUR_PROJECT_ID"
VITE_FIRESTORE_STORAGE_BUCKET="YOUR_PROJECT.appspot.com"
VITE_FIRESTORE_MESSAGING_SENDER_ID="YOUR_SENDER_ID"
VITE_FIRESTORE_APP_ID="YOUR_APP_ID"
```

Notes:
- `.env` is ignored by git in this repo (see `.gitignore`).
- Never commit real API keys/secrets to GitHub.

## Firestore Data Model (Collections)

- `Users / <UID>`
  - `userName`
  - `phoneNumber`
  - `location` (GeoPoint)

- `Services / <serviceID>`
  - `userID`
  - `serviceName`
  - `serviceType` (e.g., `tow-truck`, `garage`, `tire-service`)
  - `location` (GeoPoint)
  - `isOpen` (boolean)
  - `availableParts` (optional)

## Project Structure

High-level overview (key paths):

```text
.
├─ public/
├─ src/
│  ├─ assets/                 # Images and static assets
│  ├─ components/             # Reusable UI components
│  ├─ config/                 # Firebase connection + Firestore logic
│  ├─ pages/                  # Route pages/screens
│  ├─ router/                 # React Router configuration
│  ├─ App.jsx                 # App shell layout
│  └─ main.jsx                # React entry point
├─ index.html
├─ vite.config.js
└─ package.json
```

## Screenshots / Demo

- **Screenshots**: add images under `docs/screenshots/` (recommended) and link them here.
- **Demo**: add a deployed URL (e.g., Vercel / Netlify) once available.

Example (replace with your own):

```md
![Home](docs/screenshots/home.png)
```

## How to Use

1. Start the app (`npm run dev`).
2. On the home screen, choose a service category (Tow Truck / Nearby Garage / Mobile Tire Service).
3. The app navigates to a service list/details route for that type.
4. Use the service cards to contact providers (call / open map) where available.

## Known Issues / Future Improvements

- **UI/UX states**: Add polished loading, empty, and error states for service fetching.
- **Routing cleanup**: Consolidate routes and remove commented/legacy routes.
- **Consistent styling**: Avoid global class name collisions by scoping or renaming shared utility classes.
- **Maps integration**: Add/expand map view for providers and user location.
- **Performance**: Code-split large routes and optimize bundle size.

## Contributing

Contributions are welcome.

- Fork the repo and create a feature branch: `git checkout -b feature/my-change`
- Keep changes focused and well-described
- Run checks before opening a PR:

```bash
npm run lint
npm run build
```

## License

This project is licensed under the **MIT License**. See `LICENSE` for details.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Firestore Collections

- `Users / UID`
  - `userName`
  - `phoneNumber`
  - `email`
  - `location`

- `Services / serviceID`
  - `userID`
  - `serviceName`
  - `serviceType`
  - `location`
  - `isOpen`
  - `availableParts`
