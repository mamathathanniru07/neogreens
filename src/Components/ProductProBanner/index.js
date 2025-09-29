import './index.css';


const ProductProBanner = () => {
  return (
    <section className="product-pro-banner">
        <ul className='container-list'>
          <li className='list-item'>
            <img
              src="https://neogreens.com/wp-content/uploads/2025/06/Gluten-free.svg"
              alt="Gulten-Free"
            />
            <h5>Gluten-Free</h5>
          </li>
          <li className='list-item'>
            <img
              src="https://neogreens.com/wp-content/uploads/2025/06/100-Vegan-1-1.svg"
              alt="100% Vegan"
            />
            <h5>100% Vegan</h5>
          </li>
          <li className='list-item'>
            <img
              src="https://neogreens.com/wp-content/uploads/2025/06/Organic-1-1.svg"
              alt="Organic"
            />
            <h5>Organic</h5>
          </li>
          <li className='list-item'>
            <img
              src="https://neogreens.com/wp-content/uploads/2025/06/Zero-Synthetic-Nutrients-1-1.svg"
              alt="Zero Synthetic Nutrients"
            />
            <h5>Zero Synthetic Nutrients</h5>
          </li>
        </ul>
    </section>
  );
};


export default ProductProBanner;