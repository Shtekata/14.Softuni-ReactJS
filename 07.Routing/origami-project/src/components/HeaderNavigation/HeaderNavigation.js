import { NavLink } from 'react-router-dom';

const HeaderNavigation = () => (
  <nav className='navigation'>
    <div className='div'>
      <NavLink activeStyle={{backgroundColor:'blue'}} exact={true} to='/' className='header-item'><img src="white-origami-bird.png" alt="White origami" /></NavLink>
      <NavLink activeStyle={{backgroundColor:'blue'}} exact={true} to='/' className='header-item'>Home</NavLink>
      <NavLink activeStyle={{backgroundColor:'blue'}} exact={true} to='/about' className='header-item'>About</NavLink>
      <NavLink activeStyle={{backgroundColor:'blue'}} exact={true} to='/contact-us' className='header-item'>Contact Us</NavLink>
      <NavLink activeStyle={{backgroundColor:'blue'}} exact={true} to='/contact-us-custom' className='header-item'>Con Us Cus</NavLink>
      <NavLink activeClassName='ala-bala' exact={true} to='/about/Gosho/34' className='header-item'>Gosho</NavLink>
      <NavLink activeClassName='ala-bala' exact={true} to='/about/Pesho/56' className='header-item'>Pehso</NavLink>
      <NavLink activeClassName='ala-bala' exact={true} to='/about/Maria/23' className='header-item'>Maria</NavLink>
    </div>
    <style jsx>{`
  .navigation {
      width: 100%;
      height: 70px;
      background-color: #234465;
      border-bottom: 2px solid #ffa000;
      border-top: 2px solid #ffa000;
  }
  .div{
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
  }
  .header-item {
    color: white;
    text-align: center;
  }
  .header-item > img {
    width: 100%;
  }
  .header-item:first-child {
    width: 67px;
  }
  .header-item:not(:first-child) {
    padding: 12px 15px;
    border-top: 2px solid #ffa000;
    flex-basis: 6%;
  }
  .header-item:hover {
    cursor: pointer;
    border-top: none;
    border-bottom: 2px solid #ffa000;
    font-weight: bold;
}
.ala-bala{
  background-color: red;
}
`}</style>
  </nav>
);

export default HeaderNavigation;