import { Routes, Route } from "react-router-dom";

import HomePages from "./Pages/HomePages";
import AboutUs from "./componenet/about/AboutUs";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
