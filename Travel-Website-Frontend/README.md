# Travel Website Frontend

A modern, responsive single-page application (SPA) built with React and Vite for showcasing travel destinations, features, and services. This project is created as part of an Advanced Web Technologies assignment.

## Overview

This Travel Website is a beautiful, user-friendly frontend application designed to inspire wanderlust and provide information about travel destinations. The website features a clean UI with multiple sections including home, about, and contact pages, all seamlessly integrated into a single-page application architecture.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean and intuitive user interface with smooth navigation
- **Single Page Application (SPA)**: Fast navigation and seamless page transitions without page reloads
- **Home Section**: Eye-catching showcase of featured destinations and travel highlights
- **About Section**: Information about the travel service and offerings
- **Contact Form**: Simple and effective contact form for user inquiries
- **Navigation Bar**: Smooth navigation with anchor links to different sections
- **Footer**: Comprehensive footer with important links and information
- **Features Showcase**: Highlighted features and benefits of the travel service

## Tech Stack

- **Frontend Framework**: [React](https://react.dev/) (v19.2.4)
- **Build Tool**: [Vite](https://vitejs.dev/) (v8.0.4)
- **Styling**: CSS3
- **JavaScript**: ES6+ Modules
- **Linting**: ESLint with React plugins
- **Node Version**: 14+ (recommended)

## 📁 Project Structure

```
Travel-Website-Frontend/
├── public/
│   └── img/                    # Images and assets
├── src/
│   ├── components/             # Reusable React components
│   │   ├── AboutContent.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HeaderContent.jsx
│   │   ├── Navbar.jsx
│   │   └── Showcase.jsx
│   ├── pages/                  # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── assets/                 # Static assets
│   ├── App.jsx                 # Root component
│   ├── App.css                 # Application styles
│   ├── index.css               # Global styles
│   └── main.jsx                # Application entry point
├── index.html                  # HTML template
├── package.json                # Project dependencies
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
└── README.md                   # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd Travel-Website-Frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   The application will typically run at `http://localhost:5173`

## 📝 Available Scripts

In the project directory, you can run:

### `npm run dev`
Starts the development server with hot module replacement (HMR).
```bash
npm run dev
```

### `npm run build`
Creates an optimized production build.
```bash
npm run build
```

### `npm run preview`
Preview the production build locally before deployment.
```bash
npm run preview
```

### `npm run lint`
Run ESLint to check code quality and catch potential errors.
```bash
npm run lint
```

## Build and Deployment

### Production Build

To create a production-ready build:
```bash
npm run build
```

The optimized files will be generated in the `dist/` directory.

### Preview Build

To preview the production build locally:
```bash
npm run preview
```

## Component Structure

- **Header**: Main hero section with compelling imagery and content
- **Navbar**: Navigation bar with links to different sections
- **Showcase**: Featured destinations or travel packages
- **Features**: Key features and benefits section
- **About**: Information about the travel service
- **Contact Form**: Contact section for user inquiries
- **Footer**: Footer with links and information

## Configuration Files

- **vite.config.js**: Vite build configuration
- **eslint.config.js**: ESLint configuration for code linting
- **index.html**: Main HTML file
- **.gitignore**: Specifies files to ignore in version control

## Development Tips

- **Hot Module Replacement (HMR)**: Changes to files are automatically refreshed in the browser during development
- **Component Reusability**: Leverage reusable components in the `components/` folder
- **Styling**: Use CSS files alongside components for modular styling
- **Navigation**: The app uses anchor links for smooth navigation between sections

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! To contribute:

1. Create a new branch (`git checkout -b feature/AmazingFeature`)
2. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## License

This project is created as part of an Advanced Web Technologies course assignment.

## Contact

For any queries or support, please reach out through the contact form on the website.

---

**Happy Traveling! 🌏✈️🗺️**
