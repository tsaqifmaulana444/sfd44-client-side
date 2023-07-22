import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import AboutUs from "./components/AboutUs"

function App() {
  return (
    <Router>
      <div className="App ">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
