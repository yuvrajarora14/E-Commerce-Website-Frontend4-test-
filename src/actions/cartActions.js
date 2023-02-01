export const addProductToCart = (product) => ({
    type: 'ADD_PRODUCT_TO_CART',
    payload: product,
});


export const removeFromCart = (id) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: id,
    };
  };
  