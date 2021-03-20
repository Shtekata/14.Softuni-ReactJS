import { useState } from 'react';
import x from './Aside.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';
import { ASIDE_ITEMS } from './AsideConstants';
import { Link } from 'react-router-dom';


const Aside = ({ onAsideItemClick }) => {
    
    const [currentItem, setCurrentItem] = useState();

    const asideItemClickHandler = (id) => {
        setCurrentItem(id);
        onAsideItemClick(id);
    };

    return (
        <aside className={x.aside}>
            <ul>
                {ASIDE_ITEMS.map(x =>
                    <Link to='/about'>
                        <NavigationItem
                            className={x.listItem}
                            key={x.id}
                            id={x.id}
                            isSelected={x.id == currentItem}
                            onClickMe={asideItemClickHandler}
                        >{x.text}</NavigationItem>
                    </Link>
                )}
            </ul>
        </aside>
    )
};

export default Aside;