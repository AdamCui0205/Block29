import './App.css'
import {Route, Routes, Link} from 'react-router-dom';
import Blue from './component/Blue';
import Red from './component/Red';
import Home from './component/Home';


function App() {
  

  return (
    <>
      <div id='container'>
        <h1>Hello React Router</h1>
        <div id='navbar'>
          <Link to='/Blue'>Blue</Link>
          <Link to= '/Red'>Red</Link> 
          <Link to='/'>Home</Link> 
        </div>
        <div id='main-section'>
          <Routes>
            <Route path = '/Blue' element = {<Blue/>} />
            <Route path = '/Red' element = {<Red/>} />
            <Route path = '/' element = {<Home/>} />
          </Routes>
        </div>
       </div>
    </>
  )
}

export default App
