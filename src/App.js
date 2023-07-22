import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Compoents/Home/Home';
import About from './Compoents/About/About';
import Products from './Compoents/Products/Products';

function App() {
    const router = createBrowserRouter([
        {path:'', element:<div>This is default Page</div>},
        {path:'/home', element:<Home></Home>},
        {path:'/about', element:<About></About>},
        {path:'/products',element:<Products></Products>}

    ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
