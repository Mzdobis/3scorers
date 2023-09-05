import './App.css'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import { Routes, Route } from "react-router-dom";
import Page1 from './components/sidebarpages/page1'
import Sidebar from './components/sidebar/sidebar';
import Page2 from './components/sidebarpages/page2';
import Page3 from './components/sidebarpages/page3';
// import Sidebar from './components/sidebar/sidebar';

function App() {

  return (
    <main>
    <Routes>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/page1" element={<Page1 />}></Route>
      <Route path="/page2" element={<Page2 />}></Route>
      <Route path="/page3" element={<Page3 />}></Route>
      </Routes>
      </main>
  )
}

export default App
