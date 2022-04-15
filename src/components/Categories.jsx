import React, {useState} from 'react';

const Categories = ({items}) => {
    const state = useState()

    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {items.map((name, index)=>(
                    <li onClick={()=>console.log(1231)} key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;