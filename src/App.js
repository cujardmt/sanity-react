import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPosts from "./components/AllPosts"
import OnePost from "./components/OnePost"


function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={AllPosts} path="/" exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
