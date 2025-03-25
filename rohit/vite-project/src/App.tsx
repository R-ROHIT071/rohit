import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import CreateAccount from './pages/CreateAccount';
import Success from './pages/Success';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/register" element={<CreateAccount />} />
      <Route path="/success" element={<Success />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
