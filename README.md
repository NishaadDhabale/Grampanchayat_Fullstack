🚀 Grampanchayat Digital Portal
A modern, responsive, and accessible web application designed to serve as the official digital portal for a Gram Panchayat (Village Council). This platform bridges the digital divide in rural administration by providing citizens with instant access to crucial village information, official directories, latest announcements, and essential services—all from their web or mobile browsers.

📖 Description
The Grampanchayat portal aims to bring transparency and convenience to local governance. Instead of physically visiting the panchayat office for basic information, citizens can use this platform to stay updated on village developments, contact their elected representatives, and access important local resources. Built with a focus on usability, it features multilingual support to cater to the local demographic.

Key Features:

🏛️ Digital Governance: Centralized hub for village demographics, history, and administrative info.

👥 Officials Directory: Direct access to the profiles and contact details of the Sarpanch, Up-Sarpanch, Gram Sevak, and other committee members.

📢 Real-time Announcements: Dedicated section for the latest panchayat news, schemes, and notices.

🌐 Multilingual Support: Built-in language toggle to ensure information is accessible in the local language (e.g., Marathi/Hindi) and English.

📞 Emergency & Important Numbers: Quick-access directory for local hospitals, police, and essential services.

📱 Mobile-First Design: Fully responsive interface that works flawlessly on low-end smartphones.

🧭 Table of Contents
🛠️ Tech Stack

⚙️ Installation

▶️ Usage

💡 Usage Examples

📂 Project Structure

🚧 Features

🔮 Future Improvements

🤝 Contributing

👤 Author / Credits

🛠️ Tech Stack
Frontend Architecture:

React.js (v18) - Core UI library

Vite - Lightning-fast build tool and development server

TypeScript - For robust, type-safe code

Tailwind CSS - Utility-first styling for custom, responsive designs

Shadcn UI & Radix UI - Highly customizable, accessible component primitives (Dialogs, Carousels, Accordions, etc.)

React Router DOM - Client-side routing for seamless page navigation

Lucide React - Clean and modern SVG icon pack

⚙️ Installation
1. Clone the repository
Bash
git clone https://github.com/nishaaddhabale/grampanchayat.git
cd grampanchayat
2. Frontend Setup
Navigate to the frontend directory and install the required dependencies.

Bash
cd frontend
npm install
3. Environment Variables (Optional)
If connecting to a backend or specific APIs later, create a .env file in the frontend root:

Code snippet
VITE_API_BASE_URL=http://localhost:3000/api
▶️ Usage
Start the Development Server
Bash
npm run dev
The application will automatically compile and open in your default browser at http://localhost:5173. Hot Module Replacement (HMR) is enabled for a smooth developer experience.

Build for Production
Bash
npm run build
This generates a dist folder with optimized static assets ready for deployment on Vercel, Netlify, or standard web servers.

💡 Usage Examples
🌍 Language Toggle functionality
The application utilizes a LanguageToggle.tsx component to switch the UI context. Users can click the globe icon in the navigation bar to switch the content language dynamically, ensuring inclusivity for users who prefer their native regional language.

📍 Navigating the Portal
/ (Home): View the Hero Carousel highlighting village achievements, read the "About Village" section, and check the latest announcements.

/village-info: Dive deep into village demographics, population stats, and geographic details.

/officers: View the hierarchy of the Gram Panchayat, including photos and roles of current officials.

/important-numbers: Access a categorized list of essential contacts (Ambulance, Fire, Police, Panchayat Office).

📂 Project Structure
Plaintext
├── frontend/
│   ├── public/              # Static assets (images, robots.txt, placeholders)
│   ├── src/
│   │   ├── assets/          # Project-specific images (officials, village landmarks)
│   │   ├── components/      # Feature-specific React components
│   │   │   ├── ui/          # Reusable Shadcn UI components (buttons, cards, inputs)
│   │   │   ├── NavigationHeader.tsx
│   │   │   ├── HeroCarousel.tsx
│   │   │   ├── OfficialsSection.tsx
│   │   │   └── LanguageToggle.tsx
│   │   ├── hooks/           # Custom React hooks (e.g., use-mobile, use-toast)
│   │   ├── lib/             # Utility functions (e.g., standard Tailwind merge utils)
│   │   ├── pages/           # Main route views
│   │   │   ├── Index.tsx    # Landing Page
│   │   │   ├── VillageInfo.tsx
│   │   │   ├── Officers.tsx
│   │   │   └── ImportantNumbers.tsx
│   │   ├── App.tsx          # Router configuration
│   │   └── main.tsx         # React application entry point
│   ├── tailwind.config.ts   # Tailwind theme and plugin configuration
│   ├── tsconfig.json        # TypeScript configuration
│   └── vite.config.ts       # Vite bundler configuration
└── README.md
🚧 Features
[x] Modern Landing Page with Image Carousel.

[x] Dynamic Announcements & Notice Board.

[x] Comprehensive Elected Officials Directory.

[x] Accessible UI powered by Shadcn and Radix.

[x] Multilingual user interface toggle.

[x] High-performance loading using Vite & React 18.

🔮 Future Improvements
Backend API Integration: Transition from static/mock data to a headless CMS or Node.js backend for easier content management by panchayat staff.

Grievance Redressal System: Implement a secure form for citizens to log complaints (water, roads, electricity) and track their resolution status.

Online Tax Payment: Integrate a payment gateway (like Razorpay) for citizens to pay their property and water taxes online.

Certificate Downloads: Allow authenticated users to download digital copies of birth, death, and residence certificates.

Progressive Web App (PWA): Enable offline caching and "Add to Home Screen" functionality for mobile users with poor internet connectivity.

🤝 Contributing
We welcome contributions to help improve rural digital infrastructure!

Fork the Project.

Create your Feature Branch (git checkout -b feature/NewEgovFeature).

Commit your Changes (git commit -m 'Add some NewEgovFeature').

Push to the Branch (git push origin feature/NewEgovFeature).

Open a Pull Request.

👤 Author / Credits
Nishaad Dhabale

GitHub: @nishaaddhabale

Other Projects: [FreeFlow, Mindstash, SwiftPay]
