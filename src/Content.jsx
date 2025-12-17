import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import './Content.css'

const Content = ({handleAdd, changeNext, changePrevious, products, productNext, productPrev}) => {

  return (
    <div className='content-div'>
        <div className='image-container'>
            <i className="bi bi-arrow-left left" onClick={changePrevious}></i>
            <i className="bi bi-arrow-right right" onClick={changeNext}></i>
            <img src={image2}  id='img1' className='image'/>
            <img src={image1}  id='img2' className='image'/>
            <img src={image3}  id='img3' className='image'/>
        </div>
        {products.length?
         <div className='products-div'>
          <div className='product-items'>
            <div className='title'>
             <p>You are on amazon.com. shop for millions of products and fast local delivery</p>
           </div>
            <div className='product-title'>
              <h3>Brand new's</h3>
            </div>
            <div className='product-row' id='product-row'>
              <button className='previous-btn' id='prev-btn' onClick={productPrev}>
                <i className="bi bi-caret-left-fill"></i>
              </button>
              <button className='next-btn' id='nxt-btn' onClick={productNext}>
                <i className="bi bi-caret-right-fill"></i>
              </button>
              {products.map(item=>(
              <div className='product' key={item.id}>
               <img src={item.image} alt="product" className='product-image'/>
               <h4>{item.category}</h4>
               <div className='price-cart'>
                <h3>Price:{item.price}$</h3>
                <button className='add-cart-button'
                onClick={()=>handleAdd(item.id)}
                >{(item.cart === false)?<p className='p'>add to cart</p>:<p className='p'>remove</p>}</button>
               </div>
               <div className='rating'>
                <h4>rating:{item.rating}</h4>
                <h4>count:{item.count}</h4>
               </div>
              </div>
               ))}
            </div>
          </div>
        </div>
        :
        <></>}
    </div>
  )
}

export default Content