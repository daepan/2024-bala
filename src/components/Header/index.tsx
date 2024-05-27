import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      Header
      <button onClick={() => navigate('/about')}>About</button>
      <button onClick={() => navigate('/project')}>Project</button>
      <button onClick={() => navigate('/designers')}>Designers</button>
    </div>
  );
}
