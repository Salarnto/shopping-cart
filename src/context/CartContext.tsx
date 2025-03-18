import React, { createContext, useContext, useReducer } from 'react';
import { Product, CartItem } from '../types/types';
import toast from 'react-hot-toast';

export interface CartState {
    items: CartItem[];
    total: number;
}

export interface CartContextType extends CartState {
    addItem: (product: Product) => void;
    removeItem: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' };

  const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const checkItemExistance = state.items.find(item => item.product.id === action.payload.id);

            const newItems = checkItemExistance
                ? state.items.map(item => item.product.id === action.payload.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
                  )
                : [...state.items, { product: action.payload, quantity: 1}];
            return {
                items: newItems,
                total: newItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
            };
        }

        case 'REMOVE_ITEM': {
            const newItems = state.items.filter(item => item.product.id !== action.payload);

            return {
              items: newItems,
              total: newItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
            };
        }

        case 'UPDATE_QUANTITY': {
            const newItems = state.items.map(item => item.product.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity}
                    : item
            );

            return {
                items: newItems,
                total: newItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
            };
        }

        case 'CLEAR_CART': {
            return {
                items: [],
                total: 0
            }
        }

        default:
            return state;
    }
}

const CartProvider = ({ children } : { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

    const addItem = (product: Product) => {
        dispatch({ type: 'ADD_ITEM', payload: product });
        toast.success(`${product.name} added to cart.`);
    }

    const removeItem = (id: number) => {
        const item = state.items.find(item => item.product.id === id);

        dispatch({ type: 'REMOVE_ITEM', payload: id });
        toast.error(`${item?.product.name} removed from cart!`);
        
    }

    const updateQuantity = (id: number, quantity: number) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity }});
    }

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
        toast.success("Your cart has been cleared.");
    }

    return (
        <CartContext.Provider
            value={{
                items: state.items,
                total: state.total,
                addItem,
                removeItem,
                updateQuantity,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
 
export default CartProvider;