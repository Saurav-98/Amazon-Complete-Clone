import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckOut from "./components/CheckOut";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/basket"
            element={<h1>This is Basket Page Under Header</h1>}
          />
          <Route path="/item" element={<CheckOut />} />
        </Routes>

        {/*  */}
      </div>
    </Router>
  );
}

export default App;
