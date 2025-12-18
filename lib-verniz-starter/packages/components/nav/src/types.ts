import * as React from 'react';

export interface BaseNavItem {
  title: string;
  badge?: string | number;
  icon?: React.ReactNode;
  subItems?: NavItem[];
}

export interface NavLink extends BaseNavItem {
  url: string;
  items?: never;
  isActive?: boolean;
}

export interface NavCollapsible extends BaseNavItem {
  items: (BaseNavItem & { url: string; isActive?: boolean })[];
  url?: never;
}

export type NavItem = NavCollapsible | NavLink;

export interface NavGroup {
  title: string;
  items: NavItem[];
}

