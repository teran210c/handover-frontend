import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Layout from './components/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import AddDefect from './pages/AddDefect'
import Defects from './pages/Defects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Defects />} />
          <Route path="add-defects" element={<AddDefect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
