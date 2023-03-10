import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate} from 'react-router-dom'
import HomePage from './HomePage';
import Moviedescription from './Moviedescription';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/movies' element={<HomePage />} />
          <Route path='/moviedescription' element={<Moviedescription />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
