import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Cart from './Cart.jsx';
import Layout from './Layout.jsx';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { CartProvider } from './Cartcontext.jsx';

const router = createHashRouter([
  {
    path: '/',
    element: (
     <CartProvider>
      <Layout />
     </CartProvider>
    ),
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'cart',
        element: <Cart />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
