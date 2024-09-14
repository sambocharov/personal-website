import { translate } from '../utils/translation/translate';
import './Navigation.scss';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const Navigation = () => {
  const { hash, pathname, search } = useLocation();
  console.log(pathname);
  
  return (
    <div className="navigation">
      <Link to="/" className={classNames("nav-element", { 'highlighted': pathname === '/'})}><span>{translate('about_menu')}</span></Link>
      <Link to="/cv" className={classNames("nav-element", { 'highlighted': pathname === '/cv'})}><span>{translate('cv')}</span></Link>
      <Link to="/tools" className={classNames("nav-element", { 'highlighted': pathname === '/tools'})}><span>{translate('tools')}</span></Link>
      <Link to="/blog" className={classNames("nav-element", { 'highlighted': pathname === '/blog'})}><span>{translate('blog')}</span></Link>
    </div>
  )
}


export { Navigation };