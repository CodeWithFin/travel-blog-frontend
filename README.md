# Red Explorers - Travel Blog Frontend

A modern, responsive travel blog website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Hero section with featured content, popular posts, recent posts, and product recommendations
- **About Us Page**: Company history, team information, customer testimonials, and partner logos
- **Destination Page**: Interactive tabs for different continents with destination cards
- **Travel Tips Page**: Blog grid layout with sidebar featuring categories, popular posts, and products
- **Contact Page**: Contact form for user inquiries
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, professional design with smooth transitions and hover effects

## Tech Stack

- **Next.js 16.1.3**: React framework with App Router
- **React 19**: Latest React version
- **TypeScript**: Type-safe development
- **Tailwind CSS 4**: Utility-first CSS framework
- **ESLint**: Code linting

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

After building, start the production server:

```bash
npm start
```

## Project Structure

```
/
├── app/
│   ├── components/         # Reusable components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Footer.tsx     # Footer with links and social
│   │   ├── Newsletter.tsx # Newsletter subscription
│   │   └── InstagramFeed.tsx # Instagram feed display
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── destination/       # Destination page
│   ├── tips/              # Travel tips page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── public/                # Static assets
└── package.json           # Dependencies
```

## Pages

### Home (`/`)
- Hero section with call-to-action
- About Me section
- Categories sidebar
- Popular and Recent posts
- Product recommendations
- Social media links
- Newsletter subscription

### About Us (`/about`)
- Company history and story
- Team information
- Cameraman section
- Learning resources
- Partner logos
- Customer testimonials

### Destination (`/destination`)
- Tab navigation for continents (South America, North America, Europe, Africa, Asia)
- Destination cards with images, dates, locations, and comments
- Filtered view based on selected continent

### Travel Tips (`/tips`)
- Featured tip with full description
- Grid of travel tip cards
- Sidebar with:
  - About section
  - Categories
  - Popular posts
  - Recent posts
  - Product recommendations
  - Social media links

### Contact (`/contact`)
- Contact form with fields:
  - First Name & Last Name
  - Email & Subject
  - Message
- Form validation
- Success notification

## Customization

### Colors
The main brand colors can be customized in `globals.css` or using Tailwind's configuration.

### Content
Replace placeholder content and images with your actual content in each page component.

### Images
Update background images and card images with your own images. Current implementation uses placeholder URLs from Unsplash.

## License

This project is for educational and demonstration purposes.

## Support

For questions or issues, please use the contact form on the website.
# travel-blog-frontend
