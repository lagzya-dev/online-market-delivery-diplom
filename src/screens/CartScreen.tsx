import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';

export const CartScreen = () => {
  const { cart, total, removeItem } = useCart();

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-6'>Ваша корзина</h2>

      {cart.length === 0 ? (
        <div className='text-center py-8'>
          <p className='text-gray-600 mb-4'>Корзина пуста</p>
          <Link
            to='/'
            className='bg-blue-500 text-white px-6 py-2 rounded-lg inline-block'
          >
            Начать покупки
          </Link>
        </div>
      ) : (
        <>
          <div className='space-y-4 mb-8'>
            {cart.map((item) => (
              <div
                key={item.id}
                className='bg-white p-4 rounded-xl shadow-sm flex items-start justify-between'
              >
                <div className='flex-1'>
                  <h3 className='font-semibold'>{item.name}</h3>
                  <p className='text-gray-600 text-sm'>
                    {item.quantity} × {item.price}₽ = {item.quantity * item.price}₽
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className='text-red-500 hover:text-red-700 ml-4'
                  aria-label='Удалить'
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className='bg-white p-4 rounded-xl shadow-sm sticky bottom-0'>
            <div className='flex justify-between items-center mb-4'>
              <span className='font-semibold'>Итого:</span>
              <span className='text-xl font-bold'>{total}₽</span>
            </div>
            <button
              className='w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors'
              onClick={() => alert('Пока заглушка для оплаты')}
            >
              Перейти к оплате
            </button>
          </div>
        </>
      )}
    </div>
  );
};
