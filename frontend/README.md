# Village Gram Panchayat Website

A modern, responsive website for the village gram panchayat with admin functionality for managing gallery images.

## Features

### Public Features
- **Homepage**: Village information and highlights
- **Officers**: Information about village officials
- **Village Info**: Detailed village information
- **Important Numbers**: Contact information for important services
- **Gallery**: Photo gallery showcasing village life and events

### Admin Features
- **Secure Authentication**: Admin login with JWT tokens
- **Image Upload**: Drag & drop interface for uploading gallery images
- **Multiple File Support**: Upload multiple images at once
- **Real-time Preview**: See images before uploading
- **Progress Tracking**: Visual feedback during upload process
- **Cloud Storage**: Images stored securely in Supabase
- **Automatic Gallery Updates**: Images appear in gallery immediately

## Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **UI Components**: shadcn/ui + Tailwind CSS
- **Storage**: Supabase (for image storage)
- **Authentication**: JWT tokens + Supabase Auth
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Supabase
Follow the detailed setup guide in `SUPABASE_SETUP.md` to:
- Create a Supabase project
- Set up storage bucket
- Configure authentication
- Set environment variables

### 3. Environment Variables
Create a `.env.local` file with:
```env
REACT_APP_SUPABASE_URL=your-supabase-url
REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key
REACT_APP_API_URL=http://localhost:4000
```

### 4. Start Development Server
```bash
npm run dev
```

### 5. Access Admin Panel
Navigate to `/admin` and login with admin credentials.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Gallery.tsx     # Original gallery component
│   └── VillageGallery.tsx # Supabase-integrated gallery
├── pages/              # Page components
│   ├── AdminLogin.tsx  # Admin authentication
│   ├── AdminPanel.tsx  # Admin upload interface
│   └── ...             # Other pages
├── lib/
│   └── supabase.ts     # Supabase configuration
└── assets/             # Static assets
```

## Admin Usage

1. **Login**: Go to `/admin` and enter admin credentials
2. **Upload Images**: 
   - Drag & drop images or click to browse
   - Select multiple images at once
   - Preview images before uploading
   - Click "Upload All" to start the process
3. **View Gallery**: Images automatically appear in the public gallery at `/gallery`

## Development

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
