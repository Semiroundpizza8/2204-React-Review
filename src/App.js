import './App.css';
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{
          backgroundColor: 'gray',
          display: 'flex',
          gap: '20px',
          padding: '10px'
        }}>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UserPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
