import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './Table';

describe('Table', () => {
  it('renders correctly', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('renders caption', () => {
    render(
      <Table>
        <TableCaption>Users list</TableCaption>
        <TableBody>
          <TableRow>
            <TableCell>Content</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByText('Users list')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Table className="custom-class" />);
    const table = screen.getByRole('table');
    expect(table).toHaveClass('custom-class');
  });

  it('has correct data-slot attributes', () => {
    const { container } = render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(container.querySelector('[data-slot="table"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="table-header"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="table-body"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="table-head"]')).toBeInTheDocument();
    expect(container.querySelector('[data-slot="table-cell"]')).toBeInTheDocument();
  });

  it('renders multiple rows', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Row 1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByText('Row 1')).toBeInTheDocument();
    expect(screen.getByText('Row 2')).toBeInTheDocument();
    expect(screen.getByText('Row 3')).toBeInTheDocument();
  });
});

