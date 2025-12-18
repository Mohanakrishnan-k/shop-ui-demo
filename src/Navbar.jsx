import './Navbar.css';
import logo from './assets/logo.png';
import { useCart } from './Cartcontext';

const Navbar = () => {
  const { cart, openCart, getHome } = useCart();

  return (
    <>
      <nav>
        <img src={logo} alt="logo" className='logo box' onClick={getHome} />
        <div className='location-div box'>
          <i className="bi bi-geo-alt-fill location-icon"></i>
          <div className='location'>
            <p>Deliver to</p>
            <h5>India</h5>
          </div>
        </div>
        <div className='search-bar'>
          <div className='drop-down'>
            <select>
              <option value="tech">All</option>
              <option value="news">news</option>
            </select>
          </div>
          <div className='input-div'>
            <input type="text" className='input' id='input' placeholder='Search' />
          </div>
          <div className='search'>
            <i className="bi bi-search search-icon"></i>
          </div>
        </div>
        <div className='language box'>
          <h5>EN</h5>
        </div>
        <div className='sign-in box'>
          <p className='text'>Hello, Sign-in</p>
          <h5>Account & Lists</h5>
        </div>
        <div className='orders box'>
          <p className='text'>Returns</p>
          <h5>& Orders</h5>
        </div>
        <div className='cart-div box' onClick={openCart}>
          <i className="bi bi-cart-fill cart"></i>
          <span className='cart-items'>{cart}</span>
          <h6>Cart</h6>
        </div>
      </nav>
      <div className='div-bottom'>
        <div className='list-div'>
          <i className="bi bi-list list-icon"></i>
          <p>All</p>
        </div>
        <p>Today's Deals</p>
        <p>Prime Video</p>
        <p>Registry</p>
        <p>Customer Service</p>
        <p>Gift Cards</p>
        <p>Sell</p>
      </div>
    </>
  );
};

export default Navbar;
