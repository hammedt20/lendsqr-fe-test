import * as React from 'react';
import './MenuModal.scss'

export interface menuType {
    children: JSX.Element | never
}

export function MenuModal ({ children }: menuType) {
  return (
    <div className='menu'>
      {children}
    </div>
  );
}
