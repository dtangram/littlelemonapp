import { Routes, Route } from 'react-router-dom';
import Nav from './components/Home/Nav/Nav';
import Main from './components/Home/Main/Main';
import AboutPage from './components/AboutPage/AboutPage';
// import Menu from './components/Menu';
// import Reservations from './components/Reservation';
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
        {/* <Route path="/menu" element={<h1>Menu Page</h1>} />
        <Route path="/reservations" element={<h1>Reservations Page</h1>} />
        <Route path="/orderOnline" element={<h1>Order Online Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
