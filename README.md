# Infinity Arteverse

A modern portfolio and brand showcase for Infinity Arteverse — a digital presence where art, creativity, and visual storytelling come together.

This project is built with React and Vite, featuring an immersive landing experience, animated visual background, and a clean single-page portfolio structure for showcasing the brand and contact information.

## Overview

Infinity Arteverse is a portfolio website designed to present the brand in a visually rich and modern way. The app includes:

- A cinematic hero/landing experience
- Animated background visuals
- Brand-focused home page layout
- About and contact sections
- Responsive design for different screen sizes
- Deployment-ready static build for Netlify

## Tech Stack

- React 19
- Vite
- JavaScript
- Tailwind CSS
- React Router DOM
- Netlify hosting

## Project Structure

```bash
.
├── public/
│   ├── _redirects
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── animations/
│   ├── assets/
│   ├── canvases/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── timelines/
│   ├── index.css
│   ├── main.jsx
│   └── NotFound.jsx
├── .gitignore
├── color.palette.txt
├── eslint.config.js
├── index.html
├── netlify.toml
├── package.json
├── package-lock.json
├── README.md
├── vite.config.js
└── .github/
```

## Features

- Animated flow-field inspired background visuals
- Multi-page routing using React Router
- Landing page with brand storytelling sections
- Footer and sidebar-based navigation patterns
- Contact page with business contact details and social links
- Clean, minimal visual identity using a dark/neutral palette

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18+
- npm 9+

### Installation

1. Clone the repository:

```bash
git clone https://github.com/umayanga1104/infinity-arteverse.git
cd infinity-arteverse
```

2. Install dependencies:

```bash
npm install
```

### Run Locally

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal, typically:

```bash
http://localhost:5173
```

## Available Scripts

In the project directory, you can run:

```bash
npm run dev
```
Runs the app in development mode with Vite.

```bash
npm run build
```
Builds the application for production into the `dist` folder.

```bash
npm run preview
```
Serves the production build locally for preview.

```bash
npm run lint
```
Runs ESLint checks across the project.

## Deployment

This project is configured for Netlify deployment.

The repository includes:

- `netlify.toml` for redirect configuration
- Production build output in `dist/`
- SPA fallback redirect for client-side routing

### Netlify Example

1. Connect the repository to Netlify.
2. Set the build command to:

```bash
npm run build
```

3. Set the publish directory to:

```bash
dist
```

4. Deploy.

## Brand and Contact Details

The site includes the following brand/contact information:

- Email: hello@infinityartverse.com
- Phone: +94 71 018 4698
- Location: Sri Lanka
- Instagram: https://www.instagram.com/infinityartverse/
- Facebook: https://www.facebook.com/infinityartverse
- LinkedIn: https://www.linkedin.com/company/infinity-artverse/

## Notes

- The app uses a custom visual palette defined in `color.palette.txt`.
- The project is primarily a front-end portfolio experience and does not currently include backend services or database integration.
- The routing is configured in `src/main.jsx` and supports a homepage, about page, contact page, and a fallback 404 page.

## Contributing

Contributions are welcome. If you'd like to improve the site:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run lint/build checks
5. Submit a pull request

## License

This repository does not currently include a license file. If you plan to publish or distribute it publicly, it is recommended to add an appropriate open-source license.

## Contact

For questions or business inquiries related to Infinity Arteverse:

- Email: hello@infinityartverse.com
- Website: infinity-artverse.com

---

Built with React + Vite for Infinity Arteverse.
