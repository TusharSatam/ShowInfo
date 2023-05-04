import './App.css';
import Screen1 from './Components/Screen1/Screen1';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Screen2 from './Components/Screen2/Screen2';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Screen1 />} />
          <Route path="/:id" element={<Screen2/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
