import './App.css';
import NavigationBar from './components/navigationBar';
import PageContainer from './components/pageContainer';
import Products from './components/products';
import ProductSlider from './components/productSlider';



function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <PageContainer>
        <ProductSlider></ProductSlider>
        <Products></Products>
      </PageContainer>

    </div>
  );
}

export default App;
