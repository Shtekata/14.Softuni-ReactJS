import NavigationItem from '../NavigationItem/NavigationItem';
import x from './HeaderNavigation.module.css';
import { Link } from 'react-router-dom';

const HeaderNavigation = () => (
  <nav className={x.navigation}>
    <ul>
      <Link to='/'><NavigationItem className={x.listItem}><img src="white-origami-bird.png" alt="White origami" /></NavigationItem></Link>
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
    </ul>
  </nav>
);

export default HeaderNavigation;