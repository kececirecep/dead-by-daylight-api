import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import CharacterDetails from "./pages/CharacterDetails";
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/not-found';

function App() {

  return (

    <div className='w-screen h-screen'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/character/:id' element={<CharacterDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
