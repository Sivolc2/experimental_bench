# Components Directory

This directory contains the React components for the application.

## Components

### FlowDiagram

The `FlowDiagram` component is responsible for rendering and managing the interactive flow diagram.

#### Features

- Renders a canvas with draggable nodes
- Supports creating connections between nodes
- Handles node position changes
- Provides zoom and pan controls

#### Usage

```tsx
import FlowDiagram from './components/FlowDiagram';

function App() {
  return (
    <div>
      <FlowDiagram />
    </div>
  );
}
```

#### Implementation Details

- Uses React Flow's `useNodesState` and `useEdgesState` hooks to manage state
- Provides callback handlers for node changes, edge changes, and connections
- Implements the React Flow component with background and controls

#### Props

The component currently doesn't accept any props but could be extended to support:

- Custom initial nodes and edges
- Callback functions for node/edge changes
- Custom node types
- Layout configurations

#### Tests

The component is tested with Vitest and Testing Library in `FlowDiagram.test.tsx`.

- Verifies that the component renders without crashing
- Checks that the initial nodes are displayed 