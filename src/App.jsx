import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Jobsy from './pages/Jobsy'

function App() {

  return (
    <div className="min-h-screen">
      <Navigation />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='/projects/jobsy' element={<Jobsy/>}/>
        </Routes>
      <Footer />
    </div>
  )
}

export default App
