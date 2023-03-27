import * as React from 'react';
import './Navbar.scss'
import logo from '../../assets/images/Group.png'
import pfp from '../../assets/images/image 4.png'
import bell from '../../assets/images/Vector.png'
import { SearchInput } from '../../components/input/input';
import {ReactComponent as Search} from '../../assets/svg/search.svg'
// import {ReactComponent as Bell} from '../../assets/svg/bell.svg'
import {ReactComponent as Dropdown} from '../../assets/svg/dropdown-arrow.svg'
import { SearchButton } from '../../components/button/button';

export interface IAppProps {
}

export function Navbar () {
  return (
    <nav className='navbar'>
      <div className='nav-heading'>
        <img src={logo} alt="" />
        <form>
          <SearchInput 
              type='text'
              name='search'
              placeholder='Search for anything'
              styleType='nav-style'
          />
          <SearchButton>
            <Search />
          </SearchButton>
        </form>
      </div>
      <div className='nav-details'>
        <p className='nav-details-text'>Docs</p>
        <div>
          {/* <Bell /> */}
          <img src={bell} alt="" />
        </div>
        <div className='nav-details-profile'>
          <img src={pfp} alt="" />
          <p>Adedeji</p>
          <div>
            <Dropdown />
          </div>
        </div>
      </div>
    </nav>
  );
}
