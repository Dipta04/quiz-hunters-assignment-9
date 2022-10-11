import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';

function App() {
  const router= createBrowserRouter([
    
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:() =>fetch(' https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
      
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
