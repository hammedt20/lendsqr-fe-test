import * as React from 'react';
import './FilterModal.scss'

export interface filterModalType {
    children: JSX.Element | never[]
}

export function FilterModal ({ children }: filterModalType) {
  return (
    <div className='filter-modal'>
      { children }
    </div>
  );
}
