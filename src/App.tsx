import './App.css'
import Signup from './components/signup/Signup'
import Login from '../src/components/login/Login'
import { Routes, Route } from "react-router-dom";
import Overview from './components/sidebarpages/overview/overview'
import Page2 from './components/sidebarpages/users/users';
import Page3 from './components/sidebarpages/page3';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
    <main>
    <ToastContainer />
    <Routes>
    <Route path="/" element={<Signup />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/overview" element={<Overview />}></Route>
      <Route path="/page2" element={<Page2 />}></Route>
      <Route path="/page3" element={<Page3 />}></Route>
      </Routes>
      </main>
    </>
  )
}

export default App
