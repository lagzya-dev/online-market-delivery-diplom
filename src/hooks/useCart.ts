import { useEffect, useState } from 'react';
import { cartService } from '../services/CartService';
import type { CartItem } from '../services/CartService';

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartSub = cartService.cartSubject.subscribe((cart) => {
      setCart(cart);
      setTotal(cartService.getTotal());
    });
    return () => {
      cartSub.unsubscribe();
    };
  }, []);

  return {
    cart,
    total,
    addItem: cartService.addItem,
    removeItem: cartService.removeItem,
    updateQuantity: cartService.updateQuantity,
  };
};
