import './Navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/" className="nav-element"><span>About</span></Link>
      <Link to="/cv" className="nav-element"><span>CV</span></Link>
      <Link to="/tools" className="nav-element"><span>Tools</span></Link>
      <Link to="/blog" className="nav-element"><span>Blog</span></Link>
    </div>
  )
}


export { Navigation };