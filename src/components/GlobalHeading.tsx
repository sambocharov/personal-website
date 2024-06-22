import { translate } from '../utils/translation/translate';
import './GlobalHeading.scss';


const GlobalHeading = () => {
  return (
    <header>
      <div>{translate('top_header')}</div>
      <div className="shame-message">{translate('top_subheader')}</div>
    </header>
  )
}


export { GlobalHeading };