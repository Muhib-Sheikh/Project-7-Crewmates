import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './routes/navBar';
import CreateCrewmate from './routes/createCrewmate';
import CrewmateGallery from './routes/crewmateGallery';
import UpdateCrewmate from './routes/updateCrewmate';
import CrewmateDetail from './routes/crewmateDetail';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index={true} path='/' element={<App />} />
        <Route index={true} path='/createCrewmate' element={<CreateCrewmate />} />
        <Route index={true} path='/crewmateGallery' element={<CrewmateGallery />} />
        <Route index={true} path='/updateCrewmate/:id' element={<UpdateCrewmate/>} />
        <Route index={true} path='/crewmateDetails/:id' element={<CrewmateDetail />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
