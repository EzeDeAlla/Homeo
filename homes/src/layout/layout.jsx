import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Layout = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith('/dashboard');

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Outlet />
    </div>
  );
};

export default Layout;
