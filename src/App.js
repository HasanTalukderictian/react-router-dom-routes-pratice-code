import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Compoents/Home/Home';
import About from './Compoents/About/About';
import Products from './Compoents/Products/Products';
import Main from './Layout/Main';
import Friends from './Compoents/Friends/Friends';
import FriendDetails from './FriendDetails/FriendDetails';
import Post from './Post/Post';
import PostDetails from './Compoents/PostDetails/PostDetails';

function App() {
    const router = createBrowserRouter([
        {path:'', element:<Main></Main>, 
        children:[
          {path:'/', element:<Home></Home>},
          {path:'home', element:<Home></Home>},
          {path:'products',element:<Products></Products>},
          {
            path:'/friends',
            loader: async() =>{
              return fetch('https://jsonplaceholder.typicode.com/users');
            },
             element:<Friends></Friends>},
             {
              path:'/friend/:friendId',
             loader: async({ params }) =>{
              // console.log(params);
              return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
              },
             element:
              <FriendDetails></FriendDetails>},

              {path:'/post',
              loader:async()=>{
                  return fetch('https://jsonplaceholder.typicode.com/posts');
              },
              element:<Post></Post>},
              
              {
                path:'/post/:postId',
                loader: async({params}) => {
                       return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
                } ,
                element:<PostDetails></PostDetails>
              },

           {path:'*', element:<div> This route not found 404</div>}
        ]},
    
        {path:'/about', element:<About></About>},
        
        

    ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
