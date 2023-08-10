import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Outlet } from '@mui/icons-material';

const RootLayout: React.FC<{}> = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default RootLayout;
