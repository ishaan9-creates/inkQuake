
import React from 'react';

import './styles/Header.scss';

const Header = () => {
  return (
    <div>
      <nav>
        <ul className='nav_list'>
          <li className='logo'>Newsletter Hub</li>
          <li className='blog'>Blog</li>
          <li className='submit'>
            <button className="cta">Submit</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;