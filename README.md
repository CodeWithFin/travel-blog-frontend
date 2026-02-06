# Travel Blog (Monolithic)

A modern, responsive travel blog built with Next.js 16, React 19, and Tailwind CSS. **The app is monolithic:** the same Next.js server serves the UI and the API (Supabase-backed). No separate backend is required.

## 🚀 Features

- **Monolithic:** One app, one server – API routes live under `/api/*` in this repo
- Server-side rendering with Next.js 16
- Modern UI with Tailwind CSS 4
- Responsive design
- TypeScript for type safety
- Supabase for database (posts, categories, destinations, tips, subscribers, contacts, gallery, etc.)
- Fallback data for offline/development mode
- Dynamic content loading
- Newsletter subscription
- Contact form
- Multi-page navigation (Home, About, Destinations, Tips, Contact)

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase project (for database and optional image storage)

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
   
   Copy `.env.example` to `.env.local` and fill in your Supabase credentials:
   ```bash
   cp .env.example .env.local
   ```
   
   In `.env.local`:
   ```env
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your-anon-key
   ```
   
   **Optional:** To use a **separate** backend instead of the built-in API, set:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```
   **Environment variables for monolithic mode:**
   - `SUPABASE_URL` – your Supabase project URL (required)
   - `SUPABASE_ANON_KEY` – your Supabase anon/public key (required)
   - `SUPABASE_SERVICE_ROLE_KEY` – optional; use for image uploads if anon key has no storage write
   - `NEXT_PUBLIC_API_URL` – optional; set only if you use a separate backend (e.g. `http://localhost:5000/api`)

4. **Start the development server:**
   ```bash
   npm run dev
   ```

   The app (UI + API) runs at `http://localhost:3000`.

## 🔧 Configuration

### Monolithic vs separate backend

- **Monolithic (default):** Do not set `NEXT_PUBLIC_API_URL`. The app uses same-origin `/api/*` routes, which talk to Supabase. One server, one deploy.
- **Separate backend:** Set `NEXT_PUBLIC_API_URL=http://localhost:5000/api` (or your backend URL) to use the Express backend in `travel-blog-backend` instead of the built-in API.

### Database (Supabase)

Ensure your Supabase project has the schema and tables (e.g. `posts`, `categories`, `destinations`, `tips`, `subscribers`, `contacts`, `gallery_images`, `social_stats`, `site_settings`, `products`, `testimonials`, `post_comments`). Use the Supabase dashboard or SQL migrations to create them; seed data can be added via the API or Supabase SQL editor.

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

### No blog posts showing (monolithic)

If the homepage or blog pages are empty or show “Could not load posts”:

1. **Use the built-in API:** Remove `NEXT_PUBLIC_API_URL` from `.env.local` (or leave it unset). If it’s set to e.g. `http://localhost:5000/api`, the browser will try that URL and fail because there is no separate backend.
2. **Restart the dev server** after changing env vars (`npm run dev`).
3. **Check Supabase:** Ensure `.env.local` has `SUPABASE_URL` and `SUPABASE_ANON_KEY`, and that your Supabase project has the `posts` table with data (seed or add rows in the Supabase dashboard).

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

## 🤝 Admin app

The `travel-blog-admin` app (if present in the repo) can use this app’s API by setting `NEXT_PUBLIC_API_URL=http://localhost:3000/api` in its env.

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

## 📄 License

ISC

## 🎉 Success!

If everything is set up correctly (monolithic):
- ✅ App (UI + API) running at http://localhost:3000
- ✅ API at http://localhost:3000/api (e.g. `/api/health`, `/api/posts`)
- ✅ Dynamic content loading from Supabase
- ✅ All features working with a single server

Enjoy your travel blog! 🌍✈️
