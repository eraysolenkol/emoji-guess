import Artists from './Artists';
import Menu from './Menu';
import { Route, Routes } from 'react-router-dom';
import Quiz from './Quiz';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/play" element={<Artists />} />
        <Route path="/quiz/:artistName" element={<Quiz />} />
      </Routes>
      </div>
  );
}

export default App;
