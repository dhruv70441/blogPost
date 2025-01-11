import BlogDetails from "./BlogDetails"
import Navbar from "./components/Navbar"
import Create from "./Create"
import Home from "./Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from "./NotFound"
//Routes = Switch

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="my-10 mx-auto max-w-[600px]">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
