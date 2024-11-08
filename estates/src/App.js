
import Navbar from './components/Navbar/navbar';
import './layout/layout'
import Homepage from './routes/Home/Homepage';
import ListPage from './routes/ListPage/ListPage';
import Layout from './layout/layout';
import Profile from './routes/profile/Profile';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom';
import Login from './routes/Login/Login';
import SinglePage from './routes/SinglePage/SinglePage';

// Layout component that includes the Navbar and renders child routes

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, // Wrap routes inside the Layout
      children: [
        {
          path: '/',
          element: <Homepage />, // Homepage route
        },
        {
          path: '/list',
          element: <ListPage />, // ListPage route
        },

        {
          path: '/:id',
          element: <SinglePage />,
        },
        {
          path: '/profile',
          element: <Profile />,
        }
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
