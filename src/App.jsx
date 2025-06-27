import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Product from "./components/Product";
import Review from "./components/Review";
import Footer from "./components/Footer";
import AllMenu from "./components/Menu1";

import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import AddCart from "./layouts/AddCart";

const MainLayout = () => (
  <div className="App">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      
      },
      {
        path: '/menu',
        element: <Menu />
      
      },
      {
        path: '/about',
        element: <About />
      
      },
      {
        path: '/products',
        element: <Product />
      
      },
      {
        path: '/review',
        element: <Review />
      
      },
      {
        path: '/menuu',
        element: <AllMenu />
      
      },
      {
        path: '/addtocart',
        element: <AddCart />
      
      }
    ]
  }
]) 





// const App = () => {
//   return (
    
//     <div>
//       {/* <Navbar /> */}
// {/* 
//       <main>
//         <div id="home">
//           <Home />
//         </div>

//         <div id="menu">
//           <Menu />
//         </div>

//         <div id="about">
//           <About />
//         </div>

//         <div id="products">
//           <Product />
//         </div>

//         <div id="review">
//           <Review />
//         </div>
//       </main> */}

//       {/* <Footer /> */}
//     </div>
//   );
// };

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
