// cartReducer.js

export const initialState = {
    cartItems: []
  };
  
  export const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
        if (existingIndex !== -1) {
          
          const updatedCartItems = [...state.cartItems];
          updatedCartItems[existingIndex] = {
            ...updatedCartItems[existingIndex],
            quantity: updatedCartItems[existingIndex].quantity + 1
          };
          return { ...state, cartItems: updatedCartItems };
        } else {
          
          return { ...state, cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }] };
        }
      case 'REMOVE_FROM_CART':
        const updatedCart = state.cartItems.filter(item => item.id !== action.payload);
        return { ...state, cartItems: updatedCart };
      default:
        return state;
    }
  };
  