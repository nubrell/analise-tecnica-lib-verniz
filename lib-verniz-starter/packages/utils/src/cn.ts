import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes and tailwind-merge for Tailwind class conflicts
 *
 * @example
 * ```tsx
 * cn('px-2 py-1', 'px-4') // returns 'py-1 px-4'
 * cn('bg-red-500', condition && 'bg-blue-500') // conditionally applies classes
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

