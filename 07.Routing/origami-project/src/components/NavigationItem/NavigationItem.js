import x from './NavigationItem.module.css';

const NavigationItem = ({ children, id, isSelected, onClickMe }) => {
    let classes = [];
    if (isSelected) classes.push(x.selectedItem);
    if (onClickMe) return <li className={classes.join(' ')} onClick={() => onClickMe(id)}>{children}</li>;
    return <li className={classes.join(' ')}>{children}</li>;
};

export default NavigationItem;