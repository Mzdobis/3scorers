import React, { useState } from 'react';
import './Login.css';
import score from '../../assets/3Score.png'

interface LoginState {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [signupData, setSignupData] = useState<LoginState>({
    email: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
    <div id="img-container">
    <img src={score}></img>
    </div>
    <div className="log-container">
      <div className="log-section">
        <div className="inpt-container">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="log-email"
            name="email"
            placeholder="email"
            value={signupData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="inpt-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="log-password"
            name="password"
            placeholder="password"
            value={signupData.password}
            onChange={handleInputChange}
          />
        </div>
        <div id="log-btn">
        <button>Login</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
