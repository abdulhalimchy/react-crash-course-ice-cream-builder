import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/images/logo.png';
import reactLogo from '../../assets/images/react_logo.png';


const Header = () => {
  return (
    <header>
        <div className="container">
            <div>
                <img className={classes.logo} src={logo} alt="logo" />
            </div>
            <div className="textRight">
                <img className={classes.reactLogo} src={reactLogo} alt="React" />
                <strong>React</strong>
            </div>
        </div>
    </header>
  );
};

export default Header