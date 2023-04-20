import * as React from 'react';
import './loginPage.scss'
import logo from  '../../assets/images/Group.png';
import loginPhoto from '../../assets/images/pablo-sign-in 1.png'
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import { Link, useNavigate } from 'react-router-dom';



export default function LoginPage (): JSX.Element {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [loginDetails, setLoginDetails] = React.useState({
    email: '',
    password: ''
  })

  const handleChange = (e: any) => {
    const {value, name} = e.target 
    setLoginDetails(prev => {
      return (
        {
          ...prev,
          [name]: value
        }
      )
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if(loginDetails.email && loginDetails.password){
      navigate('/dashboard')
    }else{
      alert('Input your email and password')
    }
  }
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
                <form action="" className='login-form' onSubmit={handleSubmit}>
                    <Input 
                        name = 'email'
                        type = 'email'
                        placeholder = 'Email'
                        handleChange ={handleChange}
                    />
                    <div className='password-input'>
                        <Input 
                            name = 'password'
                            type = {showPassword ? 'text' : 'password'}
                            placeholder = 'Password'
                            styleType = 'password'
                            handleChange ={handleChange}
                        />
                        <p onClick={handlePassword}>show</p>
                    </div>
                    <p>forgot password?</p>
                    <Button>
                        <Link className='link' to={'/dashboard'}> Log In</Link>
                    </Button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
}
