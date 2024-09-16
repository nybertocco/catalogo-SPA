import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }
  return (
    <div>
      <h1>Oppps, não encontramos essa página</h1>
      <button onClick={goBack}>VOltar buttonara a tela anterior</button>
    </div>
  );
}
