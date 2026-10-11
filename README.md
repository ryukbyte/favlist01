# Favourite Student List

A React JS application that allows users to browse a student directory, add students to their favourites, and remove them when needed. This project demonstrates React Router for navigation and the Context API for global state management.

## Features

- **Student List:** Display student names and IDs dynamically.
- **Add to Favourites:** Add students to a personal favourites list.
- **Duplicate Prevention:** Prevent the same student from being added more than once.
- **Remove Favourites:** Remove students from the favourites list.
- **Global State Management:** Share favourite student data between pages using React Context.
- **Client-Side Routing:** Navigate between pages without reloading the browser.
- **Conditional Rendering:** Display an empty-state message when no favourite students have been added.
- **Responsive Styling:** A clean, card-based interface styled with CSS.

## Built With

- React JS
- JavaScript
- React Router DOM
- React Context API
- React Hooks (`useState` and `useContext`)
- HTML
- CSS
- Vite

## Pages

### Student List
Browse the available students and add them to your favourites.

### Favourite Students
View your selected students and remove them from the list. If the list is empty, the application displays the message: "No favourite students added yet".

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/favourite-student-list.git
   ```

2. Navigate to the project directory:

   ```bash
   cd favourite-student-list
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## Project Structure

```text
src/
├── context/
│   └── StudentContext.jsx
├── pages/
│   ├── StudentList.jsx
│   └── FavouriteStudents.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Concepts Demonstrated

- Functional components in React
- Client-side routing with `BrowserRouter`, `Routes`, `Route`, and `Link`
- Global state management with `createContext()` and `useContext()`
- State updates using `useState()`
- Dynamic rendering using `map()`
- Duplicate checking using `some()`
- Removing items using `filter()`
- Conditional rendering using ternary expressions

## Note

Favourite student data is stored in React state. It is shared between pages during the current session but is not persisted after a browser refresh.

## Purpose

This project was developed as a React assignment to practise routing, shared state management, dynamic rendering, and interactive UI development.

---

**Built with React and Vite.**
