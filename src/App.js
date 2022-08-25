
import './App.css';
import Home from './pages/home/Home';
import { Routes, Route,  } from "react-router-dom";
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';



function App() {
  return (
    <div >

      

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        
      </Routes>




    </div>
  );
}

export default App;
