import * as React from 'react';
import './Sidebar.scss'
import { ReactComponent as Briefcase1 } from '../../assets/svg/briefcase 1.svg'
import { ReactComponent as ArrowDown } from '../../assets/svg/arrow-down.svg'
import { ReactComponent as Home } from '../../assets/svg/home 1.svg'
import { customerData, businessData, settingData } from './SidebarData';

export interface IAppProps {
}

export function Sidebar () {
  return (
    <nav className='sb'>
      <div className='sb-organization'>
        <span>
            <Briefcase1 />
        </span>
        Switch Organization
        <span>
            <ArrowDown />
        </span>
      </div>
      <div className='sb-dashboard'>
        <span>
            <Home />
        </span>
        Dashboard
      </div>
      <div className='sb-section'>
        <div className='sb-section-head'>Customers</div>
        {customerData.map((data, id) => {
            return (
                <div className='sb-section-list' key={id}>
                    <span>{data.icon}</span>
                    {data.text}
                </div>
            )
        })}
      </div>
      <div className='sb-section'>
        <div className='sb-section-head'>Businesses</div>
        {businessData.map((data, id) => {
            return (
                <div key={id} className='sb-section-list'>
                    <span>{data.icon}</span>
                    {data.text}
                </div>
            )
        })}
      </div>
      <div className='sb-section'>
        <div className='sb-section-head'>Settings</div>
        {settingData.map((data, id) => {
            return (
                <div key={id} className='sb-section-list'>
                    <span>{data.icon}</span>
                    {data.text}
                </div>
            )
        })}
      </div>
    </nav>
  );
}
