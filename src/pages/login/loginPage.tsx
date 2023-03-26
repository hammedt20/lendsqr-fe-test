import * as React from 'react';
import './loginPage.scss'
import logo from  '../../assets/images/Group.png';
import loginPhoto from '../../assets/images/pablo-sign-in 1.png'
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';



export default function LoginPage () {
    
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  
  const handlePassword = () => {
    setShowPassword(prevState => !prevState)
  }
  return (
    <div className='login'>
      <div className='login-logo'>
        <img src={logo} alt=''/>
      </div>
      <div className='login-page'>
        <div className='login-page-pic'>
            <img src={loginPhoto} alt="" />
        </div>
        <div className='login-page-details'>
            <div className="login-page-form-section">
                <h2>Welcome!</h2>
                <p>Enter details to login.</p>
                <form action="" className='login-form'>
                    <Input 
                        name = 'email'
                        type = 'email'
                        placeholder = 'Email'
                        
                    />
                    <div className='password-input'>
                        <Input 
                            name = 'password'
                            type = {showPassword ? 'text' : 'password'}
                            placeholder = 'Password'
                            styleType = 'password'
                        />
                        <p onClick={handlePassword}>show</p>
                    </div>
                    <p>forgot password?</p>
                    <Button>
                        Log In
                    </Button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
}
