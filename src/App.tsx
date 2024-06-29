import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import IndexPage from './pages/index';
import About from 'pages/about';
import Project from 'pages/Project';
import DetailProject from 'pages/DetailProject';
import Designers from 'pages/Designers';
import DetailDesigner from 'pages/DetailDesigner';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />}>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:category/:productName" element={<DetailProject />} />
        <Route path="/designers" element={<Designers />} />
        <Route path="/designer/:id" element={<DetailDesigner />} />
      </Route>
    </Routes>
  );
}

export default App;
