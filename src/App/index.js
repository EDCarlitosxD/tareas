//import './App.css';
import React from "react";
import { TodoProvaider } from "../TodoContext";
import { AppUI } from "./AppUI";


function App() {
  return (
    <TodoProvaider>
      <AppUI />


    </TodoProvaider>
  );
}

export default App;
