import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Support from './components/Support';
import Lab from './components/Lab';
import NotFound from './components/NotFound';
import { NavLink } from 'react-router-dom';
import NavHeader from './components/NavHeader';

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
              <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>


          <Routes>
            <Route path="/" element={<NavHeader />}>
              <Route index element={<Home />} />
              <Route path="/support" element={<Support />} />
              <Route path="/about" element={<About />} />
              <Route path="/labs" element={<Lab />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
      </div>
  );
}

export default App;
