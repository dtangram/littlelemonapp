import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './components/Home/Main/Main';
import AboutPage from './components/AboutPage/AboutPage';
import Menu from './components/Menu/Menu';
import Reservations from './components/Reservations/Reservations';
import ConfirmedBooking from './components/Reservations/ConfirmedBooking/ConfirmedBooking';
import OrderOnline from './components/OrderOnline/OrderOnline';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
        <Route path="/orderOnline" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
