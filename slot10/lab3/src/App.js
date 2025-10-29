import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import AccountPage from './pages/AccountPage.jsx';
import FooterPage from './pages/FooterPage.jsx';
import MoviePage from './pages/MoviePage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
  return (
    <Router>
      <div className="App bg-dark text-white min-vh-100 d-flex flex-column">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/contact" element={< ContactPage/>} />
        </Routes>
        <FooterPage />
      </div>
    </Router>
  );
}

export default App;
