import { useState } from "react";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivateRoute from "./components/PrivateRoute";


function App() {

    const [isLoggedIn,setIsLoggedIn] = useState(false);
    

  return (

    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto flex flex-col bg-[#010B13]">
      {/* richblack-900 color, taiwlind support nhi kar rha tha, to net se nikal liye hex code */}

        <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={< Contact />} />
            {/* Hume dashboard page ka access sirf login user ko hi allow ho, isko handle krna padega */}
            <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </PrivateRoute>
            } />

        </Routes>
    </div>
  )
}

export default App;
