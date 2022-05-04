import React from 'react';

const Categories = React.memo(function Categories({activeCategory,items, onClickItem}) {
    return (
        <div className="categories">
            <ul>
                {items.map((name, index) => (
                    <li
                        className={activeCategory === index ? 'active' : ''}
                        onClick={() => onClickItem(index)}
                        key={index}>
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default Categories;