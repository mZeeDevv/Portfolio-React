import Intro from './components/Intro'
import Contact from './components/Contact'
import About from './components/About'
import Projects from './components/Projects'
import Links from './components/Links'
import Navbar from './headers/Navbar'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Intro/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/Media' element={<Links/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </Router>
   </>
  );
}

export default App;
