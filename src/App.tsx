import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import IndexPage from './pages/index';
import About from './pages/About';
import Project from 'pages/Project';
import DetailProject from 'pages/DetailProject';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />}>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<DetailProject />} />
      </Route>
    </Routes>
  );
}

export default App;
