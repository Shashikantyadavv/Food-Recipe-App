import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <div>
      <div className="min-h-screeen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/recipe-item/:id" element={<Details />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
