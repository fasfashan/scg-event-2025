import React from "react";
import Login from "./components/Login";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <div className="min-h-screen  bg-[url(/bg-potrait.jpg)] bg-cover bg-center max-w-md m-auto   p-4">
        <img src="/logo.svg" alt="" />
        <Login />
      </div>
    </>
  );
}

export default App;
