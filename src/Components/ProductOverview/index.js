import ProductProBanner from '../ProductProBanner';
import './index.css';

const ProductOverview = () => {
  return (
    <>
    <section className="product-overview">
      <div className="product-left-section">
        <h1 className='product-overview-title'>Here's to the New You</h1>
        <p>
          One scoop of NeoGreens delivers 60+ nutrients—gentle, everyday support
          you can feel.
        </p>
        <button className="buy-now-button">Buy Now</button>
      </div>
      <div className="product-right-section">
        <img
          src="https://neogreens.com/wp-content/uploads/2025/09/Group-4988.png"
          alt="product-image"
          className="product-image"
        />
      </div>
    </section>
    <ProductProBanner/> 
    </>
  );
};

export default ProductOverview;
