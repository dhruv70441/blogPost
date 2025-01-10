import Navbar from "./components/Navbar"
import Home from "./Home"
function App() {
  return (
    <div>
      <Navbar />
      <div className="my-10 mx-auto max-w-[600px]">
        <Home />
      </div>
    </div>
  )
}

export default App
