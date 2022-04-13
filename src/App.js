import React from 'react';
import './App.css';
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import WatsonNLU from "./components/WatsonNLU";
import {useEffect} from "react";


function App() {

  return (

        <div className="App">
             <Header/>
             <SearchForm/>
             <WatsonNLU/>
        </div>

  );
}
export default App;
