const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const newItems = {
                    ...state.items,
                    [action.payload.id]:
                        !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id],
                            action.payload]
            };

            const allPizzasInCart = Object.values(newItems).flat();
            const totalPrice = allPizzasInCart.reduce((sum,obj)=> sum +obj.price,0);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzasInCart.length,
                totalPrice,
            }
        }
        default:
            return state
    }
}

export default cart;