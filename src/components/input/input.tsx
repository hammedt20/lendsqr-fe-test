import * as React from 'react';
import './input.scss'

export interface inputType {
    type: string,
    name: string,
    placeholder: string,
    styleType?: string
}

export function Input ({ type, name, placeholder, styleType }: inputType) {
  return (
   <input 
    type={type}
    name={name}
    placeholder={placeholder}
    className = {styleType && "passwordInput"}
   />
  );
}

export function SearchInput ({ type, name, placeholder }: inputType) {
  return (
   <input 
    type={type}
    name={name}
    placeholder={placeholder}
    className = 'search-input'
   />
  );
}
