import BlogDetails from "./pages/BlogDetails"
import Navbar from "./components/Navbar"
import Create from "./pages/Create"
import Home from "./pages/Home"
import Login from "./pages/login"
import Register from "./pages/register"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from "./pages/NotFound"
import { Toaster } from 'react-hot-toast'
//Routes = Switch

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Toaster position="top-center" toastOptions={{duration:2000}} />
        <div className="my-10 mx-auto max-w-[800px]">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
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
