import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

class CartService {
  cartSubject = new BehaviorSubject<CartItem[]>([]);

  addItem = (item: Omit<CartItem, 'quantity'>) => {
    const current = this.cartSubject.getValue();
    const existing = current.find((i) => i.id === item.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      current.push({ ...item, quantity: 1 });
    }

    this.cartSubject.next([...current]);
  };

  updateQuantity = (itemId: string, newQuantity: number) => {
    const current = this.cartSubject.getValue();
    const index = current.findIndex((i) => i.id === itemId);

    if (index === -1) return;

    if (newQuantity > 0) {
      current[index].quantity = newQuantity;
    } else {
      current.splice(index, 1);
    }

    this.cartSubject.next([...current]);
  };

  removeItem = (itemId: string) => {
    const filtered = this.cartSubject.getValue().filter((i) => i.id !== itemId);
    this.cartSubject.next(filtered);
  };

  getTotal = () => {
    return this.cartSubject.getValue().reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
}

export const cartService = new CartService();
