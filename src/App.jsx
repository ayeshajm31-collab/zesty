import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Homepage from "./Pages/Homepage";
import Foodpage from "./Pages/Foodpage";
import Cartpage from "./Pages/Cartpage";
import About from "./Pages/About";
import Contactpage from "./Pages/Contactpage";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
     <Toaster />

      <Routes>
        <Route path="/" element={<Signup />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />

       <Route
        path="/food"
        element={
         <ProtectedRoute>
         <Foodpage cart={cart} setCart={setCart} />
       </ProtectedRoute>
  }
/>

        <Route
      path="/cart"
  element={
    <ProtectedRoute>
      <Cartpage cart={cart} setCart={setCart} />
    </ProtectedRoute>
  }
/>

<Route
  path="/about"
  element={
    <ProtectedRoute>
      <About />
    </ProtectedRoute>
  }
/>

<Route
  path="/contact"
  element={
    <ProtectedRoute>
      <Contactpage />
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;