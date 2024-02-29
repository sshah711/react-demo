import React from "react";
import ReactDOM from "react-dom/client";
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
 * 
 * 
 * 
 */
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
