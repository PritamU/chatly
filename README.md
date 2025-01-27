# Chatly

## Overview

**Chatly** is a project where users can anonymously chat with other users online. This Project is a hobby project made my me to learn the implementation of socket.io with redis as a database.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Setup and Installation](#setup-and-installation)
4. [Environment Variables](#environment-variables)
5. [Folder Structure](#folder-structure)
6. [Component Architecture](#component-architecture)
7. [Styling](#styling)
8. [State Management](#state-management)
9. [API Integration](#api-integration)
10. [Deployment](#deployment)
11. [Contributing](#contributing)
12. [License](#license)

---

## Features

- **Dynamic UI**: Responsive and interactive design using Material UI (MUI).
- **API Integration**: Communication with the backend API for data retrieval and manipulation.
- **Authentication**: Automatic Authentication With Cookies Due to the anonymous nature of the site.
- **State Management**: Efficient handling of global and local states with Redux.
- **Dynamic Forms**: Validations using react useState and Mui TextField.
- **Theming**: Mui Theme.
- **Routing**: SPA routing with React Router
- **Error Handling**: Graceful fallback for errors with proper messaging.

---

## Technologies Used

- **Framework/Library**: [React.ts,Socket.io,React-Router]
- **Build Tool**: [Vites]
- **CSS Framework**: [Material-UI]
- **State Management**: [Redux]
- **API Handling**: [ Fetch API]
- **Linting/Formatting**: [ESLint, Prettier]
- **Other Tools**:
  - TypeScript for type safety

---

## Setup and Installation

### Prerequisites

1. Install [Node.js](https://nodejs.org/) (vXX or higher).
2. Clone the repository:
   ```bash
   git clone https://github.com/PritamU/chatly
   cd frontend-repo
   ```

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up environment variables (see [Environment Variables](#environment-variables)).

3. Start the application:

   - Development:
     ```bash
     npm run dev
     ```
   - Production Build:
     ```bash
     npm run build
     npm run preview
     ```

4. Access the application at [http://localhost:PORT](http://localhost:PORT).

---

## Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```plaintext
VITE_SERVER_URL=The Url of the Server (API)
```

Use `import.meta.env.VITE_<VAR>` to access these variables in the project.

---

## Folder Structure

```plaintext
src/
├── assets/             # Static files (images, fonts, icons)
├── components/         # Reusable components
│   ├── global/         # Shared UI components (e.g., Button, Modal)
│   ├── pageElements/   # Page Componets (e.g., Home,Message)
│   ├── Layout.tsx/     # Layout component
├── config/             # Config (Socket)
├── constants/          # Constants
├── redux/              # Redux Slices and Store
├── utils/              # Helper functions
├── App.tsx             # Main React component
├── index.tsx           # Entry point
```

---

## Component Architecture

The project follows a **component-based architecture**, with an emphasis on modular and reusable components.

---

## Styling

- **CSS Framework**: [Material-UI]
- **Global Styling**: [Styled Components].
- **Theming**: Mui Theme.

---

## State Management

The application uses Redux to manage global and local states.

### Example Global States:

- Authentication state
- Online Users State
- Messages State

---

## API Integration

The frontend interacts with the backend API using **Fetch API**.

---

## Deployment

### Hosting Platforms

- Netlify (https://chatly.pritamupadhya.site)
- Render For Backend API (https://chatlyapi.pritamupadhya.site)

### Deployment Steps

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `dist/` folder to your hosting platform.

---

## Contributing

Contributions are currently not accepted.

---

## License

This project is not really licensed. Do as you Please.

---

## Contact

For any queries or support, reach out to:

- **Name**: [Pritam Upadhya]
- **Email**: [contactpritam2@gmail.com]
- **GitHub**: [https://github.com/pritamU]
- **Portfolio**: [https://pritamupadhya.site]
