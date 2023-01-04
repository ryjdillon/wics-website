import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/exec' activeStyle>
			Meet Exec
		</NavLink>
		<NavLink to='/resources' activeStyle>
			Resources
		</NavLink>
		<NavLink to='/contact' activeStyle>
			Contact Us
		</NavLink>
	
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
