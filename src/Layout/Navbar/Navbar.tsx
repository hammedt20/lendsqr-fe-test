import * as React from 'react';
import './Navbar.scss'
import logo from '../../assets/images/Group.png'
import { Input } from '../../components/input/input';
import search from '../../assets/svg/search.svg'

export interface IAppProps {
}

export function Navbar () {
  return (
    <nav>
      <div>
        <img src={logo} alt="" />
        <div>
            <Input 
                type='text'
                name='search'
                placeholder='Search for anything'
            />
            <img src={search} alt="" />
        </div>
      </div>
      <div></div>
    </nav>
  );
}
