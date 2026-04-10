import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  
  return (
    <div className="App">
      
      {/* Rendering All Pages at one page due to SPA Nature of React JS */}
      <Home />   
      <About />    
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
