import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Post from "./components/Post";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Post title = "React Js" lecture = "Maximillian" />
    <Post title = "Ract Native" lecture = "Mosh"/>
    <Post title = "Css crash course" lecture = "Brad Traversy"/>
  </>
);
