import React from 'react';
import AppleIcon from '../assets/img/apple.png';

const Header = () => {
  return (
    <nav className="bg-black p-1">
      <ul className="flex flex-row justify-center">
        <li>
          <img src={AppleIcon} alt="" className="p-1"/>
        </li>
      </ul>
    </nav>
  )
}

export default Header;
