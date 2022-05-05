import React, {useCallback, useEffect} from 'react';
import {Categories, SortPopup} from "../components";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from '../redux/action/filters'
import {fetchPizzas} from "../redux/action/pizzas";
import {addPizzaToCart} from "../redux/action/cart";
import LoadingBlock from "../components/PizzaBlock/LodingPizzaBlock";

const categoryNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems =[{name: 'популярности', type: 'popular'}, {name: 'цене', type: 'price'}, {
    name: 'алфавиту',
    type: 'name'
}]

const Home = () => {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
    const cartItems = useSelector(({cart}) => cart.items)
    const {category, sortBy} = useSelector(({filters}) => filters)

    fetchPizzas()
    useEffect(()=>{
        dispatch(fetchPizzas(category, sortBy))
    },[category, sortBy])

    const onSelectCategory = useCallback(index =>{
        dispatch(setCategory(index))
    },[])

    const onSelectSortBy = useCallback(sortType =>{
        dispatch(setSortBy(sortType))
    },[])

    const addPizza = (obj) => {
      dispatch(addPizzaToCart(obj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickItem={onSelectCategory}
                    items={categoryNames}/>
                <SortPopup activeSortBy = {sortBy} items={sortItems} onClickSortBy={onSelectSortBy}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? items.map((obj) => (
                     <PizzaBlock onClickAddPizzaToCart={addPizza} addedCart={cartItems[obj.id] && cartItems[obj.id].length} key={obj.id} {...obj} />
                )) : Array(10).fill(0).map((_, index) => <LoadingBlock key={index} />)}
            </div>
        </div>
    );
};

export default Home;