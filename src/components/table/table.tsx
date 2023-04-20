import * as React from 'react';
import './table.scss'
import { ReactComponent as FilterResult } from '../../assets/svg/filter-results-button (1).svg'
import {ReactComponent as Menu } from '../../assets/svg/ic-more-vert-18px.svg'
import {ReactComponent as DeleteFriend } from '../../assets/svg/delete-friend.svg'
import {ReactComponent as MarkFriend } from '../../assets/svg/mark-friend.svg'
import {ReactComponent as View } from '../../assets/svg/view.svg'
import { Status } from '../status/status';
import { FilterModal } from '../filter/FilterModal';
import { MenuModal } from '../menu/Menumodal';

export interface tableType {
  users: any[];
  startIndex: number;
  endIndex: number
}

function convertDate(date: string){
  const newDate = new Date(date);
  var month: string = '';
  const day = newDate.getDay()
  const year = newDate.getFullYear()
  const hours = newDate.getHours()
  const minutes = newDate.getMinutes()
  // console.log(month);
  switch (newDate.getMonth() + 1) {
    case (1):
      month = 'Jan'
      break;
    case (2):
      month = 'Feb'
      break;
    case (3):
      month = 'Mar'
      break;
    case (4):
      month = 'Apr'
      break;
    case (5):
      month = 'May'
      break;
    case (6):
      month = 'Jun'
      break;
    case (7):
      month = 'Jul'
      break;
    case (8):
      month = 'Aug'
      break;
    case (9):
      month = 'Sep'
      break;
    case (10):
      month = 'Oct'
      break;
    case (11):
      month = 'Nov'
      break;
    case (12):
      month = 'Dec'
      break;
      
    default:
      break;
  }
  return(`${month} ${day}, ${year} ${hours}:${minutes} ${hours > 11 ? 'PM' : 'AM'}`);
  
}

const Filter =() => {
  return (
    <FilterModal>
       <div className='filter'>
        <div className="organization-input">
          <label htmlFor='organization'>Organization</label>
          <select name="" id="organization">
            <option value="">Select</option>
          </select>
        </div>
        <div className="username-input">
          <label htmlFor='username'>Username</label>
          <input type="text" id='username' placeholder='User' />
        </div>
        <div className="email-input">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' placeholder='Email' />
        </div>
        <div className="date-input">
          <label htmlFor="date">Date</label>
          <input type="date" id='date' placeholder='Date' />
        </div>
        <div className="tel-input">
          <label htmlFor="tel">Phone Number</label>
          <input type="tel" id='tel' placeholder='Phone Number' />
        </div>
        <div className="status-input">
          <label htmlFor="status">Status</label>
          <select name="status" id="status">
            <option value="">Select</option>
          </select>
        </div>
        <div className="action-buttons">
          <button>Reset</button>
          <button>Filter</button>
        </div>
       </div>
    </FilterModal>
  )
}

const Menus = () => {
  return (
    <MenuModal>
      <ul className="menu-lists">
        <li><View /> View Details</li>
        <li><DeleteFriend /> Blacklist User</li>
        <li><MarkFriend /> Activate User</li>
      </ul>
    </MenuModal>
  )
}

// console.log(randomStatus)

export function Table ({ users, startIndex, endIndex }: tableType) {

  const rowsToDisplay = users.slice(startIndex, endIndex)
  
  return (
    <table>
      <thead>
        <tr>
            <th>organization <span className='filter-result'><FilterResult /></span>{<Filter />}</th>
            <th>username <span className='filter-result'><FilterResult /></span></th>
            <th>email <span className='filter-result'><FilterResult /></span></th>
            <th>phone number <span className='filter-result'><FilterResult /></span></th>
            <th>date joined <span className='filter-result'><FilterResult /></span></th>
            <th>status <span className='filter-result'><FilterResult /></span></th>
            <th>{<Menus />}</th>
        </tr>
      </thead>
      <tbody>
        {rowsToDisplay?.map(user => {
          const status: string[] = [ 'Active', 'Inactive', 'Pending', 'Blacklisted' ];
          const randomStatus = Math.floor(Math.random() * status.length);
          return(
            <tr key={user.id}>
              <td>{user.orgName}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{convertDate(user.createdAt)}</td>
              <td><Status status = {status[randomStatus]} /></td>
              <td><Menu /> </td>
          </tr>
          )
        })}
      </tbody>
    </table>
  );
}
