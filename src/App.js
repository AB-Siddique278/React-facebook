
import './App.css';
import Home from './pages/home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Profile from './pages/profile/Profile';


function App() {
  return (
    <div >

      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />

        
      </Routes>




    </div>
  );
}

export default App;
