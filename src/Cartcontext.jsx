import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const navigate = useNavigate();

  const [cart, setCart] = useState(0);
  const [cartProduct, setCartProduct] = useState([]);
  const [products, setProducts] = useState([]);

  // Fetch product data once
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      const items = data.map(item => ({
        id: item.id,
        image: item.image,
        category: item.category,
        price: item.price,
        rating: item.rating.rate,
        count: item.rating.count,
        cart: false,
        title: item.title,
        description: item.description
      }));
      setProducts(items);
    };
    fetchProducts();
  }, []);

  const handleAdd = (id) => {
    const newProducts = products.map(item =>
      item.id === id ? { ...item, cart: !item.cart } : item
    );
    setProducts(newProducts);

    const cartItem = newProducts.find(item => item.id === id);
    if (cartItem) {
      if (cartItem.cart) setCart(cart + 1);
      else setCart(cart - 1);
    }

    setCartProduct(prev => {
      const exists = prev.find(p => p.id === id);
      if (exists) return prev.filter(p => p.id !== id);
      return [...prev, cartItem];
    });
  };

  const openCart = () => {
    navigate('/cart', { state: { items: cartProduct } });
  };

  const getHome = () =>{
    navigate('/')
  }

  const updateCartIcon = (id) =>{
    setCartProduct(item => item.filter(item => item.id !== id))
    setCart(prev => prev-1)

    setProducts(item =>
      item.map(item=> item.id === id? {...item, cart:false} : item)
    )
  }

  return (
    <CartContext.Provider value={{
      cart,
      cartProduct,
      products,
      handleAdd,
      openCart,
      getHome,
      updateCartIcon
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
