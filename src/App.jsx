import './App.css'
import SmoothPages from './components/SmoothPages'
import Footer from './components/Footer'
import Navigation from './components/Navigation'


function App() {

  return (
      <div className='bg-background min-h-screen relative'>
        <Navigation />
        <SmoothPages/>
        <Footer />
      </div>
  )
}

export default App
