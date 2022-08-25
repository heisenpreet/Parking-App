import BottomNavigation from "./Components/BottomNavigation/BottomNavigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stats from "./Components/Stats/Stats";
import MyGarage from "./Components/Garage/Garage.jsx";
import Navbar from "./Components/Navbar/Navbar";
import ForMobile from "./Components/ForMobile/ForMobile.jsx";
import { useEffect, useState } from "react";
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 768;

  return isMobile ? (
    <ForMobile />
  ) : (
    <BrowserRouter>
      <>
        <Navbar />
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Stats />
            <div>
              <Routes>
                <Route path="/" element={<MyGarage />} />
                <Route path="/:page" element={<MyGarage />} />
                <Route path="*" element={<h1>Route does not exist</h1>} />
              </Routes>
            </div>
          </div>
          <BottomNavigation />
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
