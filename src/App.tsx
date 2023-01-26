import './App.css';
import NavigationBar from './components/navigationBar';
import PageContainer from './components/pageContainer';
import ProductSlider from './components/productSlider';



function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <PageContainer>
        <ProductSlider></ProductSlider>
      </PageContainer>
    </div>
  );
}

export default App;
