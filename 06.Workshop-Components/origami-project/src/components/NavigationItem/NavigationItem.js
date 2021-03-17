import x from './NavigationItem.module.css';

const NavigationItem = (props) => <li className={x.listItem}><a href="#">{ props.children }</a></li>;

export default NavigationItem;