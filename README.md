# Personal Website

A clean, minimal personal portfolio website built with Next.js and Tailwind CSS.

## Getting Started

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Production Build

Build for production:

```bash
npm run build
npm start
```

## Customization

### Add Profile Picture

1. Add your profile picture to the `public` folder (e.g., `public/profile.jpg`)
2. Update the profile picture div in `app/page.tsx`:
   ```tsx
   <Image
     src="/profile.jpg"
     alt="Vineet Burugu"
     width={128}
     height={128}
     className="rounded-full"
   />
   ```
3. Make sure to import `Image` from `next/image` at the top of the file.

### Update Links

Update the LinkedIn and GitHub links in `app/page.tsx` with your actual profile URLs.

## Features

- Clean, minimal design
- Responsive layout
- Fast and optimized with Next.js
- Easy to customize and extend
