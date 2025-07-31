# ThemeApp

A React app demonstrating theme switching, authentication, and responsive UI using Tailwind CSS.

## Features

- **Theme Switching:** Three themes (Minimal, Dark, Colorful) with dynamic styles for layouts and cards.
- **Authentication:** Simple login/logout flow (demo credentials).
- **Routing:** Home, About, Contact, and Login pages using React Router.
- **Responsive Design:** Layout adapts for desktop and mobile.
- **Product Cards:** Theme-aware product cards with fallback images.
- **Secure Practices:** No secrets in frontend, demo only.

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or pnpm

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd themeApp/my-react-app
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   pnpm install
   ```

3. Start the development server:
   ```sh
   npm start
   # or
   pnpm start
   ```

### Demo Login

- **Email:** `user@example.com`
- **Password:** `password`

## Project Structure

```
src/
  components/
    Header.tsx
    ProductCard.tsx
    Login.tsx
  context/
    ThemeContext.tsx
  pages/
    Home.tsx
    About.tsx
    Contact.tsx
    Login.tsx
  styles/
    tailwind.css
  App.tsx
```

## Theme Usage

- The app uses a `ThemeContext` to manage the current theme.
- Theme classes are applied to the root and card elements.
- You can add or modify theme styles in `src/styles/tailwind.css`.

## Security Notes

- This app is for demonstration. Do not use demo authentication in production.
- Always validate and authenticate on the backend for real apps.

## Customization

- Add more themes by extending `ThemeContext` and updating `tailwind.css`.
- Replace the demo login with your authentication logic.
- Add more pages or features as needed.