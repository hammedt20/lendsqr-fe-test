import * as React from 'react';
import './button.scss'

export interface buttonProps {
    children: React.ReactNode,
}

export function Button ({ children }: buttonProps) {
  return (
    <button className='login-button'>
      {children}
    </button>
  );
}

export function SearchButton ({ children }: buttonProps) {
  return (
    <button className='search-button'>
      {children}
    </button>
  );
}
