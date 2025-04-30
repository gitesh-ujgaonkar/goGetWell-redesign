# GoGetWell AI Website Redesign

This project is a modern redesign of the [GoGetWell AI](https://in.gogetwell.ai/) website, created as part of an internship assessment for Doodle Desk.

## Overview

GoGetWell AI is a platform that connects healthcare providers with global patients through AI-powered medical tourism solutions. This redesign focuses on creating a modern, responsive, and user-friendly interface with improved aesthetics and functionality.

## Features

- **Responsive Design**: Fully responsive layout that works across desktop, tablet, and mobile devices
- **Dark/Light Mode**: Theme toggle for user preference
- **Modern UI**: Sleek, professional interface using shadcn UI components
- **Performance Optimized**: Fast loading and smooth animations
- **Accessibility**: Built with web accessibility standards in mind
- **SEO Friendly**: Structured for better search engine visibility

## Technologies Used

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Radix UI](https://www.radix-ui.com/)

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd gogetwell-redesign
   ```

2. Install dependencies
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Run the development server
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result

## Building for Production

```bash
pnpm build
# or
npm run build
```

To start the production server:

```bash
pnpm start
# or
npm start
```

## Project Structure

```
gogetwell-redesign/
├── app/                  # Next.js app directory with routes
├── components/           # React components
│   ├── ui/               # UI components (shadcn/ui)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and helpers
├── public/               # Static assets
├── styles/               # Global styles
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
```

## Acknowledgements

This project is a redesigned version of [GoGetWell AI](https://in.gogetwell.ai/) created for assessment purposes as part of an internship application for Doodle Desk. All intellectual property rights for the original design and content belong to GoGetWell AI.

## License

This project is for educational and assessment purposes only. 