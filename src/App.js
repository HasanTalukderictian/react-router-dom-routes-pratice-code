import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Compoents/Home/Home';
import About from './Compoents/About/About';
import Products from './Compoents/Products/Products';
import Main from './Layout/Main';
import Friends from './Compoents/Friends/Friends';

function App() {
    const router = createBrowserRouter([
        {path:'', element:<Main></Main>, 
        children:[
          {path:'/', element:<Home></Home>},
          {path:'/home', element:<Home></Home>},
          {path:'/products',element:<Products></Products>},
          {
            path:'/friends',
            loader: async() =>{
              return fetch('https://jsonplaceholder.typicode.com/users');
            },
             element:<Friends></Friends>}
        ]},
    
        {path:'/about', element:<About></About>},
        {path:'*', element:<div>This route not found 404</div>}
        

    ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
