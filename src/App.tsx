import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen';
import { CartScreen } from './screens/CartScreen';
import { Header } from './components/Header';

const App = () => (
  <BrowserRouter>
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <main className='max-w-md mx-auto pt-4 pb-16'>
        <Routes>
          <Route
            path='/'
            element={<HomeScreen />}
          />
          <Route
            path='/cart'
            element={<CartScreen />}
          />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);
export default App;
