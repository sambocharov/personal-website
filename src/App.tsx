import './App.scss';
import { Navigation } from './components/Navigation';
import { GlobalHeading } from './components/GlobalHeading';
function App() {

  return (
    <div className="app">
      <GlobalHeading />
      <Navigation />
    </div>
  )
}

export default App
