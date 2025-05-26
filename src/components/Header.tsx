import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { cart } = useCart();

  return (
    <header className='bg-white shadow-sm sticky top-0 z-10'>
      <nav className='max-w-md mx-auto px-4 h-16 flex items-center justify-between'>
        <Link
          to='/'
          className='text-2xl font-bold text-gray-800'
        >
          Маркет
        </Link>
        <Link
          to='/cart'
          className='relative'
        >
          <svg
            className='w-8 h-8 text-gray-600'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
            />
          </svg>
          {cart.length > 0 && (
            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>
              {cart.length}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};
