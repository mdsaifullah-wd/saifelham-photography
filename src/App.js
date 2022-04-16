import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Banner from './components/Home/Banner/Banner';
import Inspired from './components/Home/Inspired/Inspired';
import Services from './components/Home/Services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Inspired></Inspired>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default App;
