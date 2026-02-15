import { Routes, Route } from 'react-router-dom';
import Nav from './components/Home/Nav/Nav';
import Main from './components/Home/Main/Main';
import AboutPage from './components/AboutPage/AboutPage';
// import Menu from './components/Menu';
import Reservations from './components/Reservations/Reservations';
// import OrderOnline from './components/OrderOnline';
// import Login from './components/Login';
import Footer from './components/Home/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/menu" element={<Menu />} /> */}
        <Route path="/reservations" element={<Reservations />} />
        {/* <Route path="/orderOnline" element={<OrderOnline />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
