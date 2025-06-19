import { useState, useEffect } from 'react'
import Main from './components/Main'
import './App.css'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contect from './components/Contect'
import { Suspense } from 'react'
import { ToastContainer} from "react-toastify"
import Loading from './components/Loading'
function App() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Simulating app initialization
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {isLoading ?
        <Loading onComplete={() => setIsLoading(false)} /> :

        <Suspense fallback={`loading...`}>
          <Main />
          <About />
          <Skills />
          <Projects />
          <Contect />
          <div>
            <ToastContainer/>
          </div>
        </Suspense>


      }



    </>
  )
}

export default App


