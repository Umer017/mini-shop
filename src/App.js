import { BrowserRouter, Routes ,Route, Outlet, Navigate } from 'react-router-dom';
import './App.css';
import FeedbackForm from './components/shared/Feedback/FeedbackForm';
import Footer from './components/shared/Footer';
import FullProductView from './components/shared/FullProductView';
import Navbar from './components/shared/Navbar';
import About from './components/shared/pages/About';
import MyCart from './components/user/Cart/MyCart';
import Checkout from './components/user/Checkout/Checkout';
import HomePage from './components/user/HomePage';
import Login from './components/user/Login/Login';
import Logout from './components/user/Logout/Logout';
import ProductContainer from './components/user/ProductContainer';
import Register from './components/user/Register/Register';
import SearchResults from './components/user/SearchResults';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path={'/'} element={<HomePage/>}>
        <Route  path={'/Home'} element={<ProductContainer/>}></Route>
        <Route path={'/Cart'} element={<MyCart/>}></Route>
        <Route path={'/Product/:pid'} element={<FullProductView/>}/>
        <Route path={'/Product/Search:q'} element={<SearchResults/>}/>
        <Route path={'/'} element={<Navigate to={'/Home'}/>}/>
      </Route>
      <Route path={'/About'} element={<About/>}/>
      <Route path={'/Login'} element={<Login/>}/>
      <Route path={'/Register'} element={<Register/>}/>
      <Route path={'/Logout'} element={<Logout/>}/>
      <Route path={'/Checkout'} element={<Checkout/>}/>
      <Route path={'/Feedback'} element={<FeedbackForm/>}/>
      </Routes>
      <Outlet/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
