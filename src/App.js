import './App.css';
import Au from './login';
import SignUp from './signup';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import React from 'react';
import { AuthProvider } from './auth_context';
import Home from './Home'
import PrivateRouting from './privateRouting';
import Phone from './phone'
import Main from './maintop'

function App() { 
  return (
          <BrowserRouter>
    <div className="App">
      <AuthProvider>
        <Main/>
      <Routes>
        <Route path='/' element={<Au/>}/>
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/phone' element={<Phone/>}/>
      <Route path='/home' element={<PrivateRouting>< Home/></PrivateRouting>}/>
      </Routes>
      </AuthProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;
