import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  <Header />;
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


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





