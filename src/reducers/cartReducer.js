
export const cartReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART':
        return [...state, action.payload];
        case 'REMOVE_FROM_CART':
       return state.filter(product => product.id !== action.payload)
      default:
        return state;
    }
};