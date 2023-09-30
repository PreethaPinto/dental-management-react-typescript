import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Dashboard from './pages/Dashboard';
import Dentists from './pages/Dentists';
import Patients from './pages/Patients';
import Appointments from './pages/Appointments';
import Login from './pages/Login';
import Register from './pages/Register';
import Invoices from './pages/Invoices';
import Edit from './pages/Edit';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: 'dentists', element: <Dentists /> },
        { path: 'patients', element: <Patients /> },
        { path: 'appointments', element: <Appointments /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'invoices', element: <Invoices /> },
        { path: 'dentists/edit/:id', element: <Dentists /> },
        { path: 'patients/edit/:id', element: <Patients /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
