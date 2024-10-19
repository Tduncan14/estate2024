
import Navbar from './components/Navbar/navbar';
import './layout/layout'
import Homepage from './routes/Home/Homepage';
import ListPage from './routes/ListPage/ListPage';
import Layout from './layout/layout';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom';

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
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
