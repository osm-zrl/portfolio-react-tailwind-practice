import Navbar from "./components/Navbar"
import Herosection from "./components/Herosection"
import Footer from "./components/Footer"

function App() {


  return (
    <div className="bg-dark-grey">
      <div className="max-w-7xl mx-auto p-6 lg:py-16 lg:px-28 space-y-4">
      <Navbar></Navbar>
      <Herosection></Herosection>

      <Footer/>
      </div>
    </div>
  )
}

export default App
