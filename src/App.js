import {Routes, Route} from 'react-router-dom'

import Homepage from './pages/Homepage';
import './App.css';



function App() {
  return (
    <>
    <Routes>

        <Route path="/" index element={<Homepage/>}/>

    </Routes>
    </>
  );
}

export default App;