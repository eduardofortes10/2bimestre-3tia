import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detalhes from './pages/Detalhes';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-screen bg-green-900 flex justify-center">
        <div className="w-full max-w-[1200px] px-4">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/card/:code" element={<Detalhes />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
  