import React from 'react';
import './styles.css'
import Main from './Components/Main/Main'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Marvel from './Components/Mavel/Marvel';


function App() {
  return (
    <Router>
       <Routes>
          <Route path= "/" element={<Main/>}> </Route>
          <Route path= "/:id" element={<Marvel/>}> </Route>
        </Routes>
    </Router>
  );
}

export default App;
