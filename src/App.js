import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Highlights from './components/Highlights/Highlights';
import Testimonials from './components/Testimonials/Testimonials';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Highlights />
            <Testimonials />
            <About />
            <Footer />
          </>
        } />
      </Routes>
    </main>
  );
}

export default App;
