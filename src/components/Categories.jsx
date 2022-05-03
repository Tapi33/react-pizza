import React, {useState} from 'react';

const Categories = React.memo(function Categories({items, onClickItem}) {
    const [activeItem, setActiveItem] = useState(0);

    const onSelectItem = (index) => {
        setActiveItem(index)
        onClickItem(index)
    }

    return (
        <div className="categories">
            <ul>
                {items.map((name, index) => (
                    <li
                        className={activeItem === index ? 'active' : ''}
                        onClick={() => onSelectItem(index)}
                        key={index}>
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default Categories;