# UK Marketing AI Dashboard - Secure Version

Password-protected dashboard for tracking VenturEd Solutions' AI innovation initiatives.

## Features

- 🔒 Password protection (client-side authentication)
- 📊 Track 5 AI initiatives with metrics and progress
- 🎨 VenturEd brand theme (dark mode with turquoise accents)
- 📱 Responsive design
- 🚀 Optimized for Vercel deployment

## Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/aymanMrobot/uk-marketing-dashboard-secure)

### Deployment Steps

1. Click the "Deploy with Vercel" button above (or import this repo manually)
2. **Important:** Add environment variable in Vercel:
   - Key: `VITE_DASHBOARD_PASSWORD`
   - Value: Your desired password (default: `VenturEd2025!`)
3. Deploy!

### Setting Environment Variables in Vercel

1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add: `VITE_DASHBOARD_PASSWORD` = `YourPasswordHere`
4. Redeploy the project

## Default Password

**Default:** `VenturEd2025!`

Change this by setting the `VITE_DASHBOARD_PASSWORD` environment variable in Vercel.

## Local Development

```bash
# Install dependencies
pnpm install

# Create .env file (optional)
echo "VITE_DASHBOARD_PASSWORD=YourPassword" > .env

# Run development server
pnpm dev
```

## Project Structure

- `/client/src/pages/Home.tsx` - Main dashboard
- `/client/src/pages/Login.tsx` - Password login page
- `/client/src/contexts/AuthContext.tsx` - Authentication logic
- `/client/public/ventured-logo.png` - Company logo

## Security Note

This uses client-side authentication suitable for internal dashboards. For production applications requiring stronger security, consider implementing server-side authentication.

---

© 2025 VenturEd Solutions. For internal use only.
