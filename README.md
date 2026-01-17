# Tali Yoga & Movement - Yoga Studio Website

A modern, responsive yoga studio website built with Angular 19, featuring a beautiful UI and smooth user experience.

## Features

- 🧘 **Hero Section** - Eye-catching landing section with call-to-action buttons
- 📖 **About Section** - Personal story and background information
- 🎯 **Services Section** - Display of all yoga classes and services offered
- 📸 **Gallery Section** - Beautiful image gallery with statistics
- 📧 **Contact Section** - Contact form with validation and contact information
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🌐 **RTL Support** - Right-to-left layout for Hebrew content

## Technology Stack

- Angular 19 (Standalone Components)
- TypeScript 5.6
- RxJS 7.8
- Modern CSS with CSS Variables
- Reactive Forms

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v10 or higher)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/tali-yoga` directory.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navigation header
│   │   ├── hero/            # Landing section
│   │   ├── about/           # About section
│   │   ├── services/        # Services/yoga classes
│   │   ├── gallery/         # Image gallery
│   │   ├── contact/         # Contact form
│   │   ├── footer/          # Footer section
│   │   └── home/            # Main home component
│   ├── models/              # TypeScript interfaces
│   ├── services/            # Data services
│   ├── app.component.ts    # Root component
│   └── app.routes.ts       # Routing configuration
├── styles.css               # Global styles
└── index.html              # Main HTML file
```

## Customization

### Update Contact Information

Edit `src/app/services/yoga-data.service.ts` to update contact details.

### Add/Modify Yoga Classes

Update the `yogaClasses` array in `src/app/services/yoga-data.service.ts`.

### Change Colors

Modify CSS variables in `src/styles.css`:
- `--primary-color`: Main brand color
- `--primary-dark`: Darker shade for hover states
- `--accent-color`: Accent color for highlights

## Features Implemented

✅ Standalone Components (Angular 19)
✅ Signals for reactive state management
✅ inject() for dependency injection
✅ Reactive Forms with validation
✅ Responsive design
✅ Smooth scrolling navigation
✅ RTL support for Hebrew
✅ Modern UI/UX design
✅ Form validation and error handling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

