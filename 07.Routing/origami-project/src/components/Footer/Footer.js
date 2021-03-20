import x from './Footer.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className={x.footer}>
        <ul>
            <Link to='/'><NavigationItem className={x.listItem}>Home</NavigationItem></Link>
            <Link to='/about'><NavigationItem className={x.listItem}>About</NavigationItem></Link>
            <Link to='/contact-us'><NavigationItem className={x.listItem}>Contact Us</NavigationItem></Link>
            <Link to='/contact-us-custom'><NavigationItem className={x.listItem}>Contact Us Custom</NavigationItem></Link>
            <Link to='/about'><NavigationItem className={x.listItem}>About</NavigationItem></Link>
            <Link to='/about'><NavigationItem className={x.listItem}>About</NavigationItem></Link>
            <Link to='/about'><NavigationItem className={x.listItem}>About</NavigationItem></Link>
            <Link to='/about'><NavigationItem className={x.listItem}>About</NavigationItem></Link>
            <Link to='/about'><NavigationItem className={x.listItem}>About</NavigationItem></Link>
            <Link to='/about'><NavigationItem className={x.listItem}>About</NavigationItem></Link>
            <Link to='/about'><NavigationItem className={x.listItem}>About</NavigationItem></Link>
            <Link to='/about'><NavigationItem className={x.listItem}><img src="blue-origami-bird-flipped.png" alt="Blue origami" /></NavigationItem></Link>
        </ul>
        <p>Software University &copy; <span className='ala-bala'>2021</span></p>
        <style jsx>{`.ala-bala{color: aqua;}`}</style>
    </footer>
);

export default Footer;