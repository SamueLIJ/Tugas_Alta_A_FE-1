import React from 'react';
import Navbar from './components/navbar';
import Navbar2 from './components/navbar2';
import AboutApp from './components/aboutApp';
import AboutAuthor from './components/aboutAuthor';
import {Route, Routes, useLocation} from 'react-router-dom'
import Notfound from './components/notFound';
import Home2 from './pages/home2';
import Form from './components/form';
import "./index.css"
function App() {
  let {pathname}=useLocation()
  return (
      <div className="Pages">
        {pathname==='/'?<Navbar/>:null}
        {pathname==='aboutapp'&&pathname==='aboutauthor'?<Navbar2/>:null}
        
        <Routes>
        <Route path='/' element={<div className='home'><Home2/></div>} />
          <Route path='/aboutapp' element={<AboutApp/>}/>
          <Route path='/aboutauthor' element={<AboutAuthor/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/*' element={<Notfound/>}/>
        </Routes>
      </div>
  );
}

export default App;
