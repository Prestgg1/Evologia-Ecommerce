import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Layout from './Layout.jsx'
import './assets/styles/output.css'
import {
  BrowserRouter,
} from "react-router-dom";
import Data from './Data.jsx';
import { categories } from './Data.jsx';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Data.Provider  value={{categories:categories}}>
       <Layout />
    </Data.Provider>
  </BrowserRouter>

)
