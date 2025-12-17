import { useLocation } from 'react-router-dom';
import './Cart.css';
import { useEffect, useState } from 'react';
import { useCart } from './Cartcontext.jsx';

const Cart = () => {
  const [product, setProduct] = useState([]);
  const location = useLocation();
  const { items } = location.state || { items: [] };
  const { updateCartIcon } = useCart();

  useEffect(() => {
    const newItems = items.map(item => ({
      ...item,
      productCount: 1
    }));
    setProduct(newItems);
  }, [items]);

  const handleMinus = (id) => {
    const updated = product.map(item =>
      item.id === id && item.productCount > 1
        ? { ...item, count: item.count + 1, productCount: item.productCount - 1 }
        : item
    );
    setProduct(updated);
  };

  const handlePlus = (id) => {
    const updated = product.map(item =>
      item.id === id && item.productCount < item.count
        ? { ...item, count: item.count - 1, productCount: item.productCount + 1 }
        : item
    );
    setProduct(updated);
  };

  const handleDelete = (id) => {
    updateCartIcon(id)
    setProduct(product.filter(item => item.id !== id));
  };

  return (
    <>
      {product.length ? (
        <div className='body'>
          <div className='cart-container'>
            <div className='cart-title'>
              <p>Shopping cart</p>
            </div>
            {product.map(item => (
              <div className='cart-product' key={item.id}>
                <img src={item.image} alt="product" className='cart-product-image' />
                <div className='product-details'>
                  <p className='title'>{item.title}</p>
                  <div className='rate-count'>
                    <p className='p-text'>Rating:<span>{item.rating}</span></p>
                    <p className='p-text'>Count:<span>{item.count}</span></p>
                  </div>
                  <hr />
                  <p className='price'>Price:<span>{item.price}</span></p>
                  <p className='description'>{item.description}</p>
                  <div className='count-div'>
                    <div className='product-count'>
                      <div className='delete' onClick={() => handleMinus(item.id)}>-</div>
                      <div className='count'>{item.productCount}</div>
                      <div className='plus' onClick={() => handlePlus(item.id)}>+</div>
                    </div>
                    <button className='delete-btn' onClick={() => handleDelete(item.id)}>del</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='no-item'>
          <h1>No items in cart</h1>
        </div>
      )}
    </>
  );
};

export default Cart;
