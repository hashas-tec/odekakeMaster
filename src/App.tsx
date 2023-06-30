// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AccountCreatePage from './pages/AccountCreatePage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (

    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path='account-create' element={<AccountCreatePage />} />
            <Route path="*" element={<NotFoundPage />} /> 
          </Routes>
        </div>
      </Router>
    </div>

  );
};

export default App;
