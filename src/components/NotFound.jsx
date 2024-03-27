import { Link } from 'react-router-dom';
import '../scss/layout/NotFound.scss';

function NotFound() {
  return (
    <div className='error-container'>
         <p className="error-message">¡Oops! La página que buscas no existe!</p>
      <Link to="/" className="error-button">Volver al inicio</Link>
    </div>
    
  );
}

export default NotFound;
