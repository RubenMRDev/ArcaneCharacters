# Arcane Characters 

A React-based web application that showcases characters from the Arcane universe. This interactive wiki allows users to explore and learn about various characters from the show through an intuitive and visually appealing interface.

## Live Preview

Check out the live demo of the Arcane Wiki: [Live Demo](https://arcane-characters-three.vercel.app/)

## Technologies Used

- **React** (v19.0.0) - Frontend library for building user interfaces
- **TypeScript** (v5.7.2) - Static typing for enhanced development experience
- **Vite** (v6.2.0) - Next-generation frontend build tool
- **SweetAlert2** (v11.17.2) - Beautiful, responsive, customizable popups

## Features

- Character grid display with detailed information
- Real-time search functionality
- Category-based filtering (Protagonists, Antagonists, Secondary Characters)
- Responsive design for various screen sizes
- Interactive UI with gradient text effects
- Character cards with images and descriptions

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository
```bash
git clone https://github.com/RubenMRDev/ArcaneCharacters
cd arcaneWiki
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run lint` - Runs ESLint for code quality
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
├── components/         # React components
│   ├── CharacterCard/  # Character display cards
│   ├── FilterButtons/  # Category filter buttons
│   ├── Header/        # Application header
│   └── SearchBar/     # Search functionality
├── data/              # JSON data files
├── types/             # TypeScript type definitions
├── assets/            # Static assets
└── App.tsx           # Main application component
```

## Development

The project uses several modern development tools:

- ESLint for code linting
- TypeScript for type safety
- Vite for fast development and building
- React for component-based UI development

## License

This project is licensed under the MIT License - see the LICENSE file for details.
