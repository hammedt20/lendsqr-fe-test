import * as React from 'react';
import { Navbar } from '../../Layout/Navbar/Navbar';
import { Sidebar } from '../../Layout/Sidebar/Sidebar';
import { ReactComponent as Backbutton } from '../../assets/svg/back-button.svg'
import { ReactComponent as GoldStar } from '../../assets/svg/gold-star.svg'
import pfp from '../../assets/images/avatar.png'
import './Userdetail.scss'
import { educationalInformation, guarantorInformation, personalInformation, socialInformation } from './Userdetaildata';

export interface IAppProps {
}

export function Userdetail () {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className='user-page'>
        <div className='user-page-navigation'><Backbutton /> Back to Users</div>
        <div className="user-page-headerbar">
            <p>User Details</p>
            <div className="user-page-headerbar-btns">
                <button>Blacklist user</button>
                <button>Activate user</button>
            </div>
        </div>
        <div className="user-page-profilebar">
           <div className="user-page-profilebar-top">
                <div className="user-page-profilebar-profiledetails">
                    <img src={pfp} alt="" />
                    <div className="user-page-profilebar-profiledetails-texts">
                        <p>Grace Effiom</p>
                        <p>LSQFf587g90</p>
                    </div>
                </div>
                <hr />
                <div className="user-page-profilebar-rating">
                    <p>User's Tier</p>
                    <p>
                        <GoldStar className='active' />
                        <GoldStar />
                        <GoldStar />
                    </p>
                </div>
                <hr />
                <div className="user-page-profilebar-bankaccount">
                    <p>N200,000.00</p>
                    <p>9912345678/Providus Bank</p>
                </div>
           </div>
           <ul className="user-page-profilebar-bottom">
                <li className='active'>General Details</li>
                <li>Documents</li>
                <li>Bank details</li>
                <li>Loans</li>
                <li>Savings</li>
                <li>App and System</li>
           </ul>
        </div>
        <div className="user-page-info">
            <div className="user-page-info-personalinfo">
                <p className='title'>Personal Information</p>
                <div className="user-page-info-personalinfo-items">
                    {personalInformation.map(info => {
                        return(
                            <div key={info.id} className="user-page-info-personalinfo-item">
                                <p>{info.title}</p>
                                <p>{info.data}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="user-page-info-personalinfo">
                <p className='title'>Education and Employment</p>
                <div className="user-page-info-personalinfo-items-2">
                    {educationalInformation.map(info => {
                        return(
                            <div key={info.id} className="user-page-info-personalinfo-item">
                                <p>{info.title}</p>
                                <p>{info.data}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="user-page-info-personalinfo">
                <p className='title'>Socials</p>
                <div className="user-page-info-personalinfo-items">
                    {socialInformation.map(info => {
                        return(
                            <div key={info.id} className="user-page-info-personalinfo-item">
                                <p>{info.title}</p>
                                <p>{info.data}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="user-page-info-personalinfo">
                <p className='title'>Guarantor</p>
                <div className="user-page-info-personalinfo-items">
                    {guarantorInformation.map(info => {
                        return(
                            <div key={info.id} className="user-page-info-personalinfo-item">
                                <p>{info.title}</p>
                                <p>{info.data}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
