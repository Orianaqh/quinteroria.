import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

function App() {

  return (
    <div className="min-h-screen font-body">
      <Navigation />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='projects' element={<Projects/>}/>
        </Routes>
      <Footer />
    </div>
  )
}

export default App
