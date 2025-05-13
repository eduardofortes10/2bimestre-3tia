import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detalhes from './pages/Detalhes';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-green-900 flex justify-center">
      <div className="w-full max-w-6xl px-4 py-6">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="card/:code" element={<Detalhes />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
