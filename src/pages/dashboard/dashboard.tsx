import * as React from 'react';
import { Card } from '../../components/card/card';
import { Navbar } from '../../Layout/Navbar/Navbar';
import { Sidebar } from '../../Layout/Sidebar/Sidebar';
import { ReactComponent as UserIcon } from '../../assets/svg/user-icon.svg'
import { ReactComponent as ActiveIcon } from '../../assets/svg/active-icon.svg'
import { ReactComponent as LoanIcon } from '../../assets/svg/loan-icon.svg'
import { ReactComponent as SavingIcon } from '../../assets/svg/savings-icon.svg'
import './dashboard.scss'

export interface IAppProps {
}

export function Dashboard () {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className='dashboard'>
        <p className='dashboard-title'>User</p>
        <div className="cards">
          <Card 
            icon = {<UserIcon />}
            title = 'users'
            digits = '2,453'
          />
          <Card 
            icon = {<ActiveIcon />}
            title = 'active users'
            digits = '2,453'
          />
          <Card 
            icon = {<LoanIcon />}
            title = 'users with loans'
            digits = '2,453'
          />
          <Card 
            icon = {<SavingIcon />}
            title = 'users with savings'
            digits = '2,453'
          />
        </div>
      </div>
    </div>
  );
}
