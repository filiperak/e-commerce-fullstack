export const cartReducer = (state,action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return[
                ...state,
                {
                    id: action.payload.id,
                    quantity: action.payload.quantity,
                    title: action.payload.title,
                    price: action.payload.price,
                    img: action.payload.img,
                    brand: action.payload.brand,
                }
            ];
        case 'ADD_QUANTITY':
            return state.map(elem => (
                elem.id === action.id ?
                {...elem, quantity: elem.quantity+1}
                :elem
            ))
        case 'REMOVE_QUANTITY':
            return state.map(elem => (
                elem.id === action.id && elem.quantity > 1?
                {...elem, quantity: elem.quantity-1}
                :elem
            ))
        case 'REMOVE_FROM_CART':
            return state.filter(product => product.id !== action.id);
        case 'EMPTY_CART':
            return [];
        default:
            return state;
    }
}
