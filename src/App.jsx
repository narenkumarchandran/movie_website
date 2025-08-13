import './App.css'
import { Routes,Route } from 'react-router-dom';    
import Home from './pages/Home.jsx';
import NavBar from './components/NavBar';
import Favorites from './pages/Favorites';
import {MovieProvider} from "./context/MovieContext";
function App() {



  return (
    <MovieProvider>
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorites" element={<Favorites/>} />
        </Routes>
      </main>
    </MovieProvider>
  );
}



export default App
