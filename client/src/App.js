// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import Cards from './components/team/Cards.jsx';
import MakeAComment from './components/Make_a_Comment/MakeAComment';
// import Members from './components/team/Cards.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cards/>
    </div>
  );
}
export default App;
