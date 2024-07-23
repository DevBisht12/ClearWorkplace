import React, { useRef,useEffect } from 'react';
import './header.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../Redux/Features/ChangeThemeSlice';
import {Link} from 'react-router-dom'
import LoginModal from '../LoginModal/LoginModal';

const Header = () => {
  const dispatch = useDispatch();

  const navbar = useRef(null);
  const { theme } = useSelector((state) => state.theme);
  const { companyInfo } = useSelector((state) => state.CompanyInfo);
  console.log(companyInfo.role)

  const handleTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <div className="header" ref={navbar}>
      <h2><Link to='/'><strong>C</strong>lear<strong>W</strong>orkplace </Link></h2>
      <div id='callToAction' className={`call_to_action ${theme === 'dark' ? 'dark_btn' : ''}`}>
        {companyInfo.role==='employer'?<p><Link to='/post-job'>Post a Job</Link></p>:<p><Link to='/find/job'>Jobs</Link></p>}
        
        <p>About Us</p>
        <p>Contact</p>
        {/* <p> <Link to='/login'>LogIn</Link> </p> */}
        <LoginModal/>
        
        <p onClick={handleTheme}>{theme === 'light' ? '🌞' : '🌙'}</p>
      </div>
    </div>
  );
}

export default Header;
