import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Router, Routes, Route } from "react-router-dom"

import Home from './pages/Home';
import Detail from './pages/Detail';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route path="detail/:id" element={ <Detail/> } />
     </Routes>
     </>

  );
}

export default App;
