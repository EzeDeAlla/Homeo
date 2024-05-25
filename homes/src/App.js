import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Properties from './components/Properties/Properties';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/properties' element={<Properties />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
