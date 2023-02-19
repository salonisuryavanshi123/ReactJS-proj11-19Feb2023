//1. Import Area
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Page4 from './Pages/Page4'
import Page5 from './Pages/Page5'
import Page6 from './Pages/Page6'
import Page7 from './Pages/Page7'
import Page8 from './Pages/Page8'
import Page9 from './Pages/Page9'
import Page10 from './Pages/Page10'
import Page11 from './Pages/Page11'
import Page12 from './Pages/Page12'
import Page13 from './Pages/Page13'
import Page14 from './Pages/Page14'
import Page15 from './Pages/Page15'
import NotFound from './Pages/NotFound'

//2. Defination Area
export default function App() {
  return (            
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/page1" element={<Page1 />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
        <Route path="/page3" element={<Page3 />}></Route>
        <Route path="/page4" element={<Page4 />}></Route>
        <Route path="/page5" element={<Page5 />}></Route>
        <Route path="/page6" element={<Page6 />}></Route>
        <Route path="/page7" element={<Page7 />}></Route>
        <Route path="/page8" element={<Page8 />}></Route>
        <Route path="/page9" element={<Page9 />}></Route>
        <Route path="/page10" element={<Page10 />}></Route>
        <Route path="/page11" element={<Page11 />}></Route>
        <Route path="/page12" element={<Page12 />}></Route>
        <Route path="/page13" element={<Page13 />}></Route>
        <Route path="/page14" element={<Page14 />}></Route>
        <Route path="/page15" element={<Page15 />}></Route>
        <Route path="*" element={<NotFound />}></Route>



      </Routes>
    </Router>
  )
}

//3. Export Area