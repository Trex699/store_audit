# QA Store Audit Portfolio Website

เว็บไซต์นำเสนอตัวตนสำหรับสายงาน Marketplace Compliance Officer

## Tech Stack

- **Frontend:** React, Tailwind CSS, framer-motion, lucide-react
- **Routing:** react-router-dom (HashRouter)
- **State:** @tanstack/react-query, Context API
- **Storage:** LocalStorage
- **Deploy:** GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable components
├── context/        # App Context (State Management)
├── data/           # Sample data
├── hooks/          # Custom hooks
├── pages/          # Page components
│   └── admin/      # Admin CMS pages
├── App.jsx         # Main App with Router
├── main.jsx        # Entry point
└── index.css       # Global styles
```

## Admin Access

- **URL:** `/#/admin-login`
- **Email:** admin@qastoreaudit.com
- **Password:** admin1234

## Deployment

1. Push code to GitHub
2. Go to Settings > Pages
3. Select "GitHub Actions" as source
4. Workflow will auto-deploy on every push to main

## License

MIT
