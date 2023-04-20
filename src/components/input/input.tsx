import * as React from 'react';
import './input.scss'

export interface inputType {
    type: string,
    name: string,
    placeholder: string,
    styleType?: string,
    handleChange?:  ((e: any) => void) | undefined,
}


export function Input ({ type, name, placeholder, styleType, handleChange }: inputType) {
  return (
   <input 
    type={type}
    name={name}
    placeholder={placeholder}
    className = {styleType && "passwordInput"}
    onChange = {handleChange}
    // required
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
