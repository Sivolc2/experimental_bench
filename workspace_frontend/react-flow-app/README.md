# React Flow Demo Application

This is a simple interactive task flow diagram application built with React and React Flow.

## Features

- Interactive node-based graph visualization
- Drag and drop nodes to reposition them
- Create connections between nodes by dragging from one handle to another
- Automatic layout updates when nodes are moved
- Zoom, pan, and controls for graph navigation

## Project Structure

```
react-flow-app/
├── src/
│   ├── components/
│   │   ├── FlowDiagram.tsx       # Main React Flow component
│   │   └── FlowDiagram.test.tsx  # Tests for FlowDiagram
│   ├── App.tsx                   # Main application component
│   ├── App.css                   # Application styles
│   └── setupTests.ts             # Test setup configuration
└── vite.config.ts                # Vite & testing configuration
```

## Technologies Used

- React with TypeScript
- React Flow for interactive diagrams
- Vite for fast development and building
- Vitest & Testing Library for unit testing

## Development

### Prerequisites

- Node.js (v14 or newer)
- Yarn package manager

### Setup

1. Create and activate the virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```
   yarn
   ```

3. Start the development server:
   ```
   yarn dev
   ```

4. Run tests:
   ```
   yarn test
   ```

## Building for Production

```
yarn build
```

## Design Decisions

- **Single Responsibility Principle**: Components are focused on specific tasks (FlowDiagram handles only the diagram logic)
- **Testing**: Unit tests are included to verify component rendering and behavior
- **Styling**: Custom CSS applied to enhance the visual appearance of the diagram
- **TypeScript**: Used throughout the application for type safety

## Future Enhancements

- Custom node types for different task categories
- Saving diagram state to backend
- Delete functionality for nodes and edges
- Undo/redo functionality
- Custom edge types for different relationships
