import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import NavBar from './components/NavBar';
import Favorites from './pages/Favorites';
function App() {
  const movieNumber =0;



  return (
    <div>
      <NavBar/>
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorites" element={<Favorites/>} />
        </Routes>
      </main>
    </div>
  );
}



export default App
