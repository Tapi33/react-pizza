import React, {useEffect, useState} from "react";
import {Header} from "./components";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import axios from "axios";


function App() {
    const [pizzas, setPizzas] = useState([]);
    useEffect(() => {
        axios("http://localhost:3000/db.json").then(({data}) => setPizzas(data.pizzas));
    },[])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path={"/"} element={<Home items={pizzas}/>}/>
                    <Route path={"/cart"} element={<Cart/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
