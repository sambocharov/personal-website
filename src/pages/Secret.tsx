import { useState } from "react";
import './secret.scss'

const Input = ({ setPassed }: any) => {
  return (
    <div className="input-container">
      <div className="hint">Ask a mafia-frog for a passphrase (check inner pocket if he's not giving it to you voluntarily). If nothing found - ask your dumb ass husband because he probably failed it all</div>
      <input className="stylish-input" type="text" placeholder="Enter a passphrase" onChange={(e) => { if (e.target.value === 'the best artist ever') setPassed(true)}}/>
    </div>
  )
}

const SecretComponent = () => (
  <div className="secret">
    <div className="important-message">
      <h1>To the best artist in the universe</h1>
      <div className="secret-text">Если ты читаешь это, значит, ты на шаг ближе к небольшому сюрпризу. Всё, что тебе нужно сделать, — это следовать за фотографией и найти то, что принадлежит тебе! Ты самый лучший комик-артист в мире, и слава с признанием уже идут за тобой! Твой самый близкий человек верит в тебя всем сердцем! И всегда будет рядом ❤️</div>
      <div className="secret-text other">Если хочешь закрыть это и разглядеть задний фон, жмякай на меня</div>
    </div>
    <img className="image" src="/public/img.png" alt="" />
  </div>
)


const Churros = () => {
  const [passed, setPassed] = useState(true);
  return (
    <div className="churros">
    {passed ? <SecretComponent /> : <Input setPassed={setPassed} />}
      
      
    </div>
  )
}


export { Churros };