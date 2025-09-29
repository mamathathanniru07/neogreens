import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import ProductOverview from './Components/ProductOverview';
import ProductBeinifitsSection from './Components/ProductaBenifits';
import ProductComparision from './Components/ProductComparision';
import TestiMonials from './Components/ReviewSection';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductOverview/>
      <ProductBeinifitsSection/>
      <ProductComparision />
      <TestiMonials />
      <Footer/>
    </div>
  );
}

export default App;
