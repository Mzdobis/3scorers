import React, { useState } from 'react';
import './Signup.css'; 
import score from '../../assets/3Score.png'

interface SignupState {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC = () => {
  const [signupData, setSignupData] = useState<SignupState>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submit = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const https://test.3scorers.com/api/v1/admin/sign-up/?adminId=1
  }
  return (
    
    <div className="signup-container">
      <div className="background-section">
      <div id="img-container">
    <img src={score}></img>
    </div>
        <span id="title">Create an Account</span>
        <p id="join">Join the community and have fun predicting!</p>
      </div>
      <div className="login-section">
        <div className="input-container">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            value={signupData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="lastName">Last Name</label>
          {/* <p>Last Name</p> */}
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            value={signupData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Choose a username"
            value={signupData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={signupData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={signupData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={signupData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <div id="btn">
        <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
