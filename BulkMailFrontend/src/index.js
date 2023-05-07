import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Usersupload from './users'

import App from './App'
import Mail from './mail';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <>


    <BrowserRouter>
    
    <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path="Usersupload" element={<Usersupload/>}/>
        <Route path="Sendmail" element={<Mail/>}/>

    </Routes>
    </BrowserRouter>
    </>

);


