import * as React from 'react';
import './button.scss'

export interface buttonProps {
    children: string,
}

export function Button ({ children }: buttonProps) {
  return (
    <button>
      {children}
    </button>
  );
}
