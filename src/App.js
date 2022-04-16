import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route
          path='/checkout'
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
