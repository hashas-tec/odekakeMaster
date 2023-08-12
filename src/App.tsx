import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AccountCreatePage from './pages/AccountCreatePage';
import NotFoundPage from './pages/NotFoundPage';
import { useState } from 'react';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false)

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage setIsAuth={setIsAuth}/>} />
          <Route path='account-create' element={<AccountCreatePage />} />
          <Route path='home' element={<HomePage  setIsAuth={setIsAuth}/>} />
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
