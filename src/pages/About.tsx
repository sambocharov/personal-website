import { translate } from "../utils/translation/translate";
import '../styles/About.scss'
const About = () => {
  return (
    <div className="about">
      <div className="title">{translate('top_header')}</div>
      <div className="shame-message">{translate('top_subheader')}</div>
    </div>
  )
}


export { About };