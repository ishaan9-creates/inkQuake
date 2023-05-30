
import React from 'react';


const Header = () => {
  return (
		<header className='navbar'>
			<div className='logo'>Newsletter Hub</div>
			<nav>
				<ul>
					<li>Blog</li>
					<button className='submit'>Submit</button>
				</ul>
			</nav>
		</header>
  );
};

export default Header;