import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Statistics from './Components/Statistics/Statistics';

function App() {
  const router= createBrowserRouter([
    
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:() =>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
           path:'/statistics',
           loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
           element:<Statistics></Statistics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
      
    },
    {path: '*', element: <div>Opps!!.This route not found: 404</div>}
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
