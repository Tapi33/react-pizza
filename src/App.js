import React, {useEffect} from "react";
import {Header} from "./components";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import axios from "axios";
import {setPizzas} from "./redux/action/pizzas";
import {useDispatch} from "react-redux";


function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        axios("http://localhost:3000/db.json").then(({data}) => dispatch(setPizzas(data.pizzas)));
    },[]);


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path={"/"} element={<Home />}/>
                    <Route path={"/cart"} element={<Cart/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
