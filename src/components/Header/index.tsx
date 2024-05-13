import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      Header
      <button onClick={()=>navigate('/about')}>About</button>
    </div>
  )
}