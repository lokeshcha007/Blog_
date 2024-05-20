import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import SignUp from "./pages/sSignup.jsx"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Dashboard from "./pages/Dashboard"
import Header from "./components/Header.jsx"

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes >
        <Route   path="/" element={<Home />}  />
        <Route   path="/sign-in" element={<Signin />}  />
        <Route   path="/sign-up" element={<SignUp />}  />
        <Route   path="/about" element={<About />}  />
        <Route   path="/projects" element={<Projects />}  />
        <Route   path="/dashboard" element={<Dashboard />}  />
      </Routes>
    </BrowserRouter>
  )
}
