import { translate } from '../utils/translation/translate';
import './GlobalHeading.scss';
import { Navigation } from './Navigation';


const GlobalHeading = () => {
  return (
    <header>
      <Navigation />
    </header>
  )
}


export { GlobalHeading };