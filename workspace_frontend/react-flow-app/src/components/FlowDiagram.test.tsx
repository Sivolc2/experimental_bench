import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FlowDiagram from './FlowDiagram';

// Mock the ResizeObserver which is required by React Flow
window.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

describe('FlowDiagram', () => {
  it('renders without crashing', () => {
    render(<FlowDiagram />);
    // The ReactFlow component should be rendered
    expect(document.querySelector('.react-flow')).toBeInTheDocument();
  });
  
  it('renders initial nodes', () => {
    render(<FlowDiagram />);
    // Check if nodes are rendered in the document
    const nodes = document.querySelectorAll('.react-flow__node');
    expect(nodes.length).toBe(3);
  });
}); 