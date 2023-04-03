import * as React from 'react';
import './card.scss'
import { ReactComponent as UserIcon } from '../../assets/svg/user-icon.svg'
import { JsxElement } from 'typescript';

export interface cardProps {
    icon: React.ReactNode,
    title: string,
    digits: string
}

export function Card ({ icon, title, digits }: cardProps) {
  return (
    <div className='card'>
      <div className='card-icon'>
        {icon}
      </div>
      <p className='card-title'>{title}</p>
      <p className='card-digit'>{digits}</p>
    </div>
  );
}
