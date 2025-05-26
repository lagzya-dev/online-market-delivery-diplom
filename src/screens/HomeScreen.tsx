import { ProductItem } from '../components/ProductItem';
import { vendors } from '../data/vendors';

export const HomeScreen = () => {
  return (
    <div className='p-4 bg-gray-50 min-h-screen'>
      <h1 className='text-3xl font-bold text-gray-800 mb-6'>Локальный рынок</h1>

      {vendors.map((vendor) => (
        <section
          key={vendor.id}
          className='mb-8 bg-white rounded-xl p-6 shadow-sm'
        >
          <div className='mb-4 border-b pb-2'>
            <h2 className='text-2xl font-semibold text-gray-700'>{vendor.name}</h2>
            <p className='text-gray-500 text-sm mt-1'>{vendor.description}</p>
            <div className='flex items-center mt-2'>
              <span className='text-yellow-400'>★</span>
              <span className='text-gray-600 ml-1'>{vendor.rating}</span>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {vendor.products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                vendorName={vendor.name}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
