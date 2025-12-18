import { createContext, useContext } from 'react';

export interface NavContextValue {
  isCollapsed: boolean;
}

const NavContext = createContext<NavContextValue | undefined>(undefined);

export function useNav() {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error('useNav must be used within a Nav');
  }
  return context;
}

export { NavContext };

