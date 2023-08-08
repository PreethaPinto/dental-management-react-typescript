import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Trainers from './pages/Trainers';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'classes', element: <Classes /> },
        { path: 'trainers', element: <Trainers /> },
        { path: 'blogs', element: <Blog /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
