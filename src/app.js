import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import ResMenu from "./components/ResMenu";
//import Grocery from "./components/Grocery";
//lazy loading , chunking, code splitting

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

function App() {
  <Header />;
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading!!!</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <ResMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading!!!</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// const heading=React.createElement("h1",
// {id:"heading"},
// "hello sakshi shah")
// console.log(heading) //object
//     const root= ReactDOM.createRoot(document.getElementById("root"))
//     root.render(heading)
/**
 * <div id="p"> 
  *<div id="c">
    *<p>Different </p> 
     *<p>Different </p>
    *</div>
     *<div id="c2">
    *<p>Different </p>
     *<p>Different </p>
    *</div>
*</div>
 
const heading = React.createElement("div",{id:"p"},
                        [ React.createElement("div",{id:"c"},
                                 [React.createElement("h1",{},"hello multiple"),
                                 React.createElement("h2",{},"hello 2nd multiple")]
                                 ),
                        React.createElement("div",{id:"c2"},
                                 [React.createElement("h1",{},"hello 3multiple"),
                                 React.createElement("h2",{},"helloo 4nd multiple")]
                                 )
                                ]
                                 )
console.log(heading) //object
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)
*/
//const heading = React.createElement("h1",{id:"p"},"hello")

//react element
/** 
const h = <h1 id="p">title</h1>;
console.log(h);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h);

//react Component
//1. class base C       2. functional C
const HeadingC1 = () => (
  <div>
    <h1 id="p">hiii</h1>
  </div>
);

//component composition

const HeadingC = () => (
  <div>
    <HeadingC1 />
    {h}
    <h1 id="p">hiii hellooooo</h1>
  </div>
);

const r = ReactDOM.createRoot(document.getElementById("root"));
r.render(<HeadingC />);
*/
