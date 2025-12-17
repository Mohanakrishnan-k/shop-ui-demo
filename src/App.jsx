import Content from "./Content";
import { useCart } from './Cartcontext.jsx';
import { useEffect, useState } from "react";

const App = () => {
  const { products, handleAdd } = useCart();
  const [image, setImage] = useState(false);

  useEffect(() => {
    const images = Array.from(document.querySelectorAll('.content-div .image-container img'));
    setImage(images);
    disableImages(images);
  }, []);

  const disableImages = (images, position = 0) => {
    for (let img of images) img.style.display = "none";
    if (images[position]) images[position].style.display = "block";
  };

  const getImageId = () => image.find(img => img.style.display === 'block');

  const changePrevious = () => {
    const current = image.indexOf(getImageId());
    const newIndex = current === 0 ? image.length - 1 : current - 1;
    disableImages(image, newIndex);
  };

  const changeNext = () => {
    const current = image.indexOf(getImageId());
    const newIndex = current === image.length - 1 ? 0 : current + 1;
    disableImages(image, newIndex);
  };

  const productNext = () => {
    const productDiv = document.getElementById('product-row');
    const item = productDiv.querySelector('.product');
    productDiv.scrollLeft += item.offsetWidth * 4;
  };

  const productPrev = () => {
    const productDiv = document.getElementById('product-row');
    const item = productDiv.querySelector('.product');
    productDiv.scrollLeft -= item.offsetWidth * 4;
  };

  return (
    <div className="app">
      <Content
        handleAdd={handleAdd}
        changeNext={changeNext}
        changePrevious={changePrevious}
        products={products}
        productNext={productNext}
        productPrev={productPrev}
      />
    </div>
  );
};

export default App;
