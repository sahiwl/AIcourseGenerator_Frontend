import { useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import FormSubmission from './components/FormSubmission'
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/Form' element={<FormSubmission/>} />  
    </Routes>
    </BrowserRouter>
  )
}

export default App
