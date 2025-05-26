import { cartService } from '../services/CartService';

export const AddToCartButton = ({ item }: { item: CartItem }) => {
  const handleAddToCart = () => {
    cartService.addItem(item);
  };

  return (
    <button
      onClick={handleAddToCart}
      className='bg-blue-500 text-white px-4 py-2 rounded'
    >
      Добавить в корзину
    </button>
  );
};
