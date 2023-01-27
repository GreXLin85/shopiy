import styled from 'styled-components';
import './App.css';
import NavigationBar from './components/navigationBar';
import PageContainer from './components/pageContainer';
import ProductCards from './components/productCards';
import Products from './components/products';
import ProductSlider from './components/productSlider';
import Search from './components/search';

const ProductsTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
`;


function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <PageContainer>
        <ProductSlider></ProductSlider>
        <Products></Products>
        <ProductsTitle>All Products</ProductsTitle>
        <Search></Search>
        <ProductCards  products={[
          {
            image: "https://random.imagecdn.app/500/500",
            title: "Product 1",
            description: "This is a product",
            price: "$100"
          },
          {
            image: "https://random.imagecdn.app/500/500",
            title: "Product 2",
            description: "This is a product",
            price: "$100"
          },
          {
            image: "https://random.imagecdn.app/500/500",
            title: "Product 3",
            description: "This is a product",
            price: "$100"
          },
        ]}></ProductCards>
      </PageContainer>

    </div>
  );
}

export default App;
