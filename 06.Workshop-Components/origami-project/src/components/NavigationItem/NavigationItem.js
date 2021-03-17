import x from './NavigationItem.module.css';

const NavigationItem = ({ children }) => <li className={x.listItem}><a href="#">{children}</a></li>;

export default NavigationItem;