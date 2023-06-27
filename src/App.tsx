// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { Route } from 'react-router-dom';
import { Routes } from '../node_modules/react-router-dom/dist/index';
import TopPage from './pages/TopPage';

const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
    </Routes>
  );
};

export default App;
