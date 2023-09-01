import React from 'react'
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';
import AnchorIcon from '@mui/icons-material/Anchor';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to recive our best vacation deals
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at anytime!
                </p>
                <div className='input-aread'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                        <Button buttonStyle='btn--outline' buttonSize='btn--large'>Subscribe</Button>
                    </form>

                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testomonial</Link>
                        <Link to='/sign-up'>Careers</Link>
                        <Link to='/sign-up'>Terms of </Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testomonial</Link>
                        <Link to='/sign-up'>Careers</Link>
                        <Link to='/sign-up'>Terms of </Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testomonial</Link>
                        <Link to='/sign-up'>Careers</Link>
                        <Link to='/sign-up'>Terms of </Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testomonial</Link>
                        <Link to='/sign-up'>Careers</Link>
                        <Link to='/sign-up'>Terms of </Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrapper'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            TRVL <AnchorIcon />
                        </Link>
                    </div>
                    <small className='website-rights'>TRVL 2023</small>
                    <div className='social-icons'>
                        <Link className='socal-icon-link facebook' to='/' target='_blank'  aria-label='Facebook'>
                            <FacebookIcon style={{color: 'white'}}/>
                        </Link>
                        <Link className='socal-icon-link facebook' to='/' target='_blank'  aria-label='Instagram'>
                            <InstagramIcon style={{color: 'white'}}/>
                        </Link>
                        <Link className='socal-icon-link facebook' to='/' target='_blank'  aria-label='Twitter'>
                            <TwitterIcon style={{color: 'white'}}/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}