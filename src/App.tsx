import styled from 'styled-components';
import './App.css';
import NavigationBar from './components/navigationBar';
import PageContainer from './components/pageContainer';
import Products from './components/products';
import ProductSlider from './components/productSlider';

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
      </PageContainer>

    </div>
  );
}

export default App;
