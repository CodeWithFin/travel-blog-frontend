# Travel Blog Frontend

A modern, responsive travel blog built with Next.js 16, React 19, and Tailwind CSS. The frontend connects to a backend API for dynamic content management.

## 🚀 Features

- Server-side rendering with Next.js 16
- Modern UI with Tailwind CSS 4
- Responsive design
- TypeScript for type safety
- API integration with backend
- Fallback data for offline/development mode
- Dynamic content loading
- Newsletter subscription
- Contact form
- Multi-page navigation (Home, About, Destinations, Tips, Contact)

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Backend API running (see `travel-blog-backend` folder)

## 🛠️ Installation

1. **Navigate to the frontend directory:**
   ```bash
   cd travel-blog-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   NEXT_PUBLIC_USE_API=true
   ```

   **Environment Variables Explained:**
   - `NEXT_PUBLIC_API_URL`: Backend API URL (required)
   - `NEXT_PUBLIC_USE_API`: Set to `false` to use hardcoded fallback data (optional)

4. **Start the development server:**
   ```bash
   npm run dev
   ```

   The app will start at `http://localhost:3000`

## 🔧 Configuration

### Connecting to Backend

The frontend is configured to connect to the backend API automatically. Make sure:

1. The backend server is running at `http://localhost:5000` (or your configured URL)
2. The backend database is seeded with initial data
3. CORS is enabled on the backend for your frontend URL

### API Configuration

The API configuration is managed in `/lib/api.ts` and `/lib/config.ts`:

```typescript
// lib/config.ts
export const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
};
```

### Fallback Data

If the backend is not available, the app will display loading states and handle errors gracefully. Fallback data is available in `/lib/fallback-data.ts` for development purposes.

## 📁 Project Structure

```
travel-blog-frontend/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── components/
│   │   ├── ContactSubscribe.tsx   # Newsletter subscription
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── ImageStrip.tsx
│   │   ├── InstagramFeed.tsx
│   │   ├── NavLink.tsx
│   │   └── Newsletter.tsx
│   ├── contact/
│   │   └── page.tsx          # Contact form page
│   ├── destination/
│   │   └── page.tsx          # Destinations page
│   ├── tips/
│   │   └── page.tsx          # Travel tips page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── lib/
│   ├── api.ts                # API client functions
│   ├── config.ts             # Configuration
│   └── fallback-data.ts      # Fallback data
├── public/
│   └── assets/               # Static assets (logos, images)
├── .env.local                # Environment variables (create this)
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Pages

### Home (`/`)
- Hero section with travel counter
- Featured blog posts
- Sidebar with categories, products, social stats
- Recent posts and popular posts

### About (`/about`)
- Team information
- Company story
- Partner logos
- Customer testimonials

### Destinations (`/destination`)
- Filterable destinations by continent
- Interactive tab navigation
- Destination cards with details

### Tips (`/tips`)
- Travel tips grid
- Rating system
- Category filtering

### Contact (`/contact`)
- Contact form with validation
- Form submission to backend API
- Success/error handling

## 🔌 API Integration

The frontend integrates with the following API endpoints:

- **Posts:** `/api/posts`
- **Destinations:** `/api/destinations`
- **Tips:** `/api/tips`
- **Categories:** `/api/categories`
- **Products:** `/api/products`
- **Testimonials:** `/api/testimonials`
- **Subscribers:** `/api/subscribers`
- **Contacts:** `/api/contacts`
- **Gallery:** `/api/gallery`
- **Social Stats:** `/api/social`
- **Settings:** `/api/settings`

## 🏗️ Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🚀 Deployment

### Vercel (Recommended for Next.js)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables:
   - `NEXT_PUBLIC_API_URL`: Your production backend API URL
4. Deploy!

### Other Platforms (Netlify, Railway, etc.)

1. Build the app: `npm run build`
2. Set environment variables
3. Deploy the `.next` output directory

## 🔧 Development Tips

### Running Without Backend

Set in `.env.local`:
```env
NEXT_PUBLIC_USE_API=false
```

This will use fallback data for development.

### Hot Reload

The development server supports hot reload. Changes to components will reflect immediately.

### TypeScript

The project uses TypeScript for type safety. Type definitions are in:
- Component props
- API responses
- Configuration objects

## 📱 Responsive Design

The app is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Features Implementation

### Newsletter Subscription
- Real-time API integration
- Email validation
- Success/error feedback
- Loading states

### Contact Form
- Field validation
- API submission
- Error handling
- User feedback

### Dynamic Content
- Posts loaded from API
- Destinations filtered by continent
- Tips with ratings
- Categories with counts

### Error Handling
- Graceful fallbacks
- Loading states
- User-friendly error messages
- Retry mechanisms

## 🐛 Troubleshooting

### API Connection Issues

If you see "Failed to fetch" errors:
1. Check if backend is running
2. Verify `NEXT_PUBLIC_API_URL` in `.env.local`
3. Check CORS settings on backend
4. Ensure backend port is correct

### Build Errors

If build fails:
1. Delete `.next` folder
2. Run `npm install` again
3. Check for TypeScript errors
4. Verify all imports are correct

### Styling Issues

If styles don't apply:
1. Check Tailwind configuration
2. Verify `globals.css` is imported
3. Clear browser cache
4. Restart dev server

## 📝 Notes

- All data is now dynamically loaded from the backend API
- The UI remains exactly as designed - no visual changes
- Fallback mechanisms ensure the app never breaks
- Loading states provide better UX
- Error handling is implemented throughout

## 🤝 Backend Setup

Make sure you have set up the backend first:

1. Navigate to `travel-blog-backend`
2. Follow the README instructions
3. Set up Neon database
4. Run database seeding
5. Start the backend server

Then start this frontend app.

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

## 📄 License

ISC

## 🎉 Success!

If everything is set up correctly, you should see:
- ✅ Frontend running at http://localhost:3000
- ✅ Backend API at http://localhost:5000
- ✅ Dynamic content loading from database
- ✅ All features working perfectly

Enjoy your travel blog! 🌍✈️
