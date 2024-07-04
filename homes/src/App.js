import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Properties from './components/Properties/Properties';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import Layout from './layout/layout';
import SettingsProperties from './dashboard/properties';
import SettingsUsers from './dashboard/users';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Layout />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route exact path='/dashboard/properties' element={<SettingsProperties />} />
        <Route exact path='/dashboard/users' element={<SettingsUsers />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
