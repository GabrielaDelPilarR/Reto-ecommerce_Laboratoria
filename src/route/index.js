import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import ProductDetail from '../productDetail/ProductDetail'

export default function RoutesPage () {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={''} />
        <Route path='/products/:id' element={<ProductDetail/>} />
      </Routes>
    </BrowserRouter>

  );
}