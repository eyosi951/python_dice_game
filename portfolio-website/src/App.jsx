import { useState } from 'react'
import './App.scss'
import {Routes,Route} from 'react-router-dom';
import Layout from './component/Layout/index.jsx';

function App() {
 

  return (
<>
    <Routes>
        <Route path="/" element={<Layout/>}/>
        
    </Routes>
</>
    
  );
}

export default App
