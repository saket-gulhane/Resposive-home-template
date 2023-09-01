import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AnchorIcon from '@mui/icons-material/Anchor';
import { Button } from './Button';
import "./Navbar.css";

function Navbar() {

	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	}


	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);

	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>
					<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
						TRVL <AnchorIcon sx={{ verticalAlign: "middle" }} />
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						{click ? <CloseIcon style={{ color: "white" }} /> : <MenuIcon style={{ color: "white" }} />}
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link to='/' className='nav-links' onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/services' className='nav-links' onClick={closeMobileMenu}>
								Services
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/products' className='nav-links' onClick={closeMobileMenu}>
								Products
							</Link>
						</li>
						<Link
							to='/sign-up'
							className='nav-links-mobile'
							onClick={closeMobileMenu}
						>
							Sign Up
						</Link>
					</ul>
					{button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
				</div>
			</nav>
		</>
	)
}

export default Navbar