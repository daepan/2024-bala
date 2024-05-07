import {
  Routes,
  Route,
} from 'react-router-dom';
import Main from './pages/main';
import IndexPage from './pages/index';

function App() {
  return (
    <Routes>
      <Route path='/' element={<IndexPage />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
