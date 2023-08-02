import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import AboutUs from "./components/AboutUs"
import NotFound from "./components/404"
import MenuList from "./components/MenuList"

function App() {
  return (
    <Router>
      <div className="App ">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/all" element={<MenuList />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
