# Quick Setup Guide

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Customization Checklist

Before deploying, customize these files:

- [ ] `components/sections/SystemStatus.tsx` - Update your name, role, and bio
- [ ] `components/sections/Builds.tsx` - Add your projects
- [ ] `components/sections/Thinking.tsx` - Add your engineering thoughts
- [ ] `components/sections/Experiments.tsx` - Add your experiments
- [ ] `components/sections/Signals.tsx` - Add your skill statements
- [ ] `components/sections/PowerDown.tsx` - Update email and add resume.pdf to public folder
- [ ] `app/layout.tsx` - Update metadata (title, description)

## File Structure

```
init-/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── BootScreen.tsx     # Entry boot screen
│   ├── ToggleSwitch.tsx   # Physical toggle switch
│   ├── ArrowPrompt.tsx    # Animated prompt
│   ├── MainSite.tsx       # Main site container
│   ├── ParticleBackground.tsx # Star field
│   ├── TerminalBlock.tsx  # Terminal UI component
│   ├── BuildCard.tsx      # Project card
│   ├── SectionWrapper.tsx # Reusable section wrapper
│   └── sections/          # Page sections
│       ├── SystemStatus.tsx
│       ├── Builds.tsx
│       ├── Thinking.tsx
│       ├── Experiments.tsx
│       ├── Signals.tsx
│       └── PowerDown.tsx
├── public/                # Static assets
│   └── resume.pdf         # Add your resume here
└── [config files]         # Next.js, TypeScript, Tailwind configs
```

## Design System

- **Background**: Pure black (#000000)
- **Text**: Soft off-white (#f5f5f5)
- **Accent**: Electric blue (#00f0ff) - customizable in `tailwind.config.ts`
- **Fonts**: Inter (sans-serif), JetBrains Mono (monospace)

## Animation Notes

- All animations use Framer Motion
- Entrance animations trigger on scroll (viewport-based)
- Boot screen uses custom cinematic easing
- Particle system runs at 60fps using canvas

## Performance Tips

- Images should be optimized (WebP format recommended)
- Consider lazy loading for heavy sections
- Particle count can be adjusted in `ParticleBackground.tsx`
- All animations use GPU-accelerated transforms

