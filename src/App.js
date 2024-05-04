import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./home";
import Register from "./register";


function App() {

  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
