import './App.scss';
import { Navigation } from './components/Navigation';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { GlobalHeading } from './components/GlobalHeading';
import { About } from './pages/About';
import { CV } from './pages/CV';
import { Blog } from './pages/Blog';
import { ToolsMenu } from './pages/ToolsMenu';

function App() {

  return (
    <Router>
      <div className="app">
        <GlobalHeading />
        <Navigation />
        <Routes>
          <Route path="/" element={<About />}/>
          <Route path="/cv" element={<CV />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/tools" element={<ToolsMenu />}/>
        </Routes>
      </div>
    </Router>

  )
}

export default App
