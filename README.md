# INIT() - Modern Portfolio Website

A polished, recruiter-friendly personal website with a cinematic entry animation. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Cinematic Entry**: Interactive toggle switch that triggers a rocket animation
- **Modern Design**: Clean, colorful, box-based layout with subtle animations
- **Sticky Navigation**: Smooth navbar with section links
- **Hero Section**: Two-column layout with introduction and profile photo
- **About Section**: Three boxed cards showcasing who you are, what you do, and what you care about
- **Builds**: Project showcase with image thumbnails and links
- **Experiments**: Smaller project cards for explorations and mini projects
- **Skills**: Organized skill categories with pill badges
- **Resume**: Download section with preview card
- **Contact**: Split layout with social links and contact form

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Content Updates

1. **Hero Section** (`components/sections/Hero.tsx`):
   - Update greeting and introduction text
   - Add your profile photo (replace the placeholder div with an Image component)
   - Modify the description paragraphs

2. **About Section** (`components/sections/About.tsx`):
   - Update the three cards with your personal information

3. **Builds** (`components/sections/Builds.tsx`):
   - Replace the `projects` array with your actual projects
   - Add project images to the `public` folder
   - Update GitHub and demo links

4. **Experiments** (`components/sections/Experiments.tsx`):
   - Replace with your actual experiments and explorations

5. **Skills** (`components/sections/Skills.tsx`):
   - Update skill categories and individual skills

6. **Resume** (`components/sections/Resume.tsx`):
   - Add your resume file to `public/resume.pdf`
   - Update the preview card content

7. **Contact** (`components/sections/Contact.tsx`):
   - Update social media links
   - Update email address
   - Implement form submission in `components/ContactForm.tsx`

8. **Navbar** (`components/Navbar.tsx`):
   - Update logo/name if desired

### Design Customization

- **Colors**: Edit `tailwind.config.ts` to change primary/secondary colors
- **Fonts**: Modify `app/layout.tsx` to use different Google Fonts
- **Animations**: Adjust Framer Motion animations in individual components

### Form Submission

The contact form in `components/ContactForm.tsx` currently logs to console. To implement actual submission:

1. Use a service like Formspree, SendGrid, or Resend
2. Create an API route in `app/api/contact/route.ts`
3. Update the `handleSubmit` function in `ContactForm.tsx`

## Deployment

This project is ready for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy (Vercel will auto-detect Next.js settings)

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page with boot/main site logic
│   └── globals.css         # Global styles
├── components/
│   ├── BootScreen.tsx     # Entry boot screen with toggle
│   ├── ToggleSwitch.tsx    # Physical-style toggle switch
│   ├── RocketAnimation.tsx # Rocket launch animation
│   ├── Navbar.tsx         # Sticky navigation bar
│   ├── MainSite.tsx       # Main site container
│   ├── ProjectCard.tsx    # Reusable project card component
│   ├── ContactForm.tsx    # Contact form component
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Builds.tsx
│       ├── Experiments.tsx
│       ├── Skills.tsx
│       ├── Resume.tsx
│       └── Contact.tsx
└── public/                # Static assets
    └── resume.pdf         # Add your resume here
```

## Design System

- **Primary Color**: Indigo (#6366f1)
- **Secondary Color**: Pink (#ec4899)
- **Background**: Off-white (#fafafa)
- **Text**: Dark gray (#1a1a1a)
- **Font**: Inter (sans-serif)

## Performance Notes

- Animations use Framer Motion's optimized transforms
- Images should be optimized before adding to public folder
- Consider lazy loading for heavy sections if needed
- All animations are subtle and purposeful

## License

See LICENSE file for details.
