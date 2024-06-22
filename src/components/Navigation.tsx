import { translate } from '../utils/translation/translate';
import './Navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/" className="nav-element"><span>{translate('about_menu')}</span></Link>
      <Link to="/cv" className="nav-element"><span>{translate('cv')}</span></Link>
      <Link to="/tools" className="nav-element"><span>{translate('tools')}</span></Link>
      <Link to="/blog" className="nav-element"><span>{translate('blog')}</span></Link>
    </div>
  )
}


export { Navigation };