import {
  Routes,
  Route,
} from 'react-router-dom';
import Main from './pages/main';
import IndexPage from './pages/index';
import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route path='/' element={<IndexPage />}>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
