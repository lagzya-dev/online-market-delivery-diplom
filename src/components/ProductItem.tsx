import { Product } from '../data/vendors';
import { useCart } from '../hooks/useCart';

export const ProductItem = ({ product, vendorName }: { product: Product; vendorName: string }) => {
  const { cart, addItem, updateQuantity } = useCart();
  const currentItem = cart.find((item) => item.id === product.id);
  const quantity = currentItem?.quantity || 0;

  const handleAdd = () => {
    if (quantity === 0) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
      });
    } else {
      updateQuantity(product.id, quantity + 1);
    }
  };

  const handleRemove = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      updateQuantity(product.id, 0);
    }
  };

  return (
    <div className='bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow'>
      <div className='mb-2'>
        <span className='text-sm text-gray-500'>{vendorName}</span>
        <h3 className='text-lg font-semibold mt-1'>{product.name}</h3>
        <p className='text-gray-600 text-sm'>{product.description}</p>
      </div>

      <div className='flex justify-between items-center'>
        <span className='text-xl font-bold text-green-600'>{product.price}₽</span>

        {quantity > 0 ? (
          <div className='flex items-center gap-2'>
            <button
              onClick={handleRemove}
              className='w-8 h-8 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors'
            >
              -
            </button>
            <span className='w-8 text-center font-medium'>{quantity}</span>
            <button
              onClick={handleAdd}
              className='w-8 h-8 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors'
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={handleAdd}
            className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors'
          >
            В корзину
          </button>
        )}
      </div>
    </div>
  );
};
