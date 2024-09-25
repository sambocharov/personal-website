import './App.scss';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { About } from './pages/About';
import { CV } from './pages/CV';
import { Churros } from './pages/Secret';
import { Blog } from './pages/Blog';
import { ToolsMenu } from './pages/ToolsMenu';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/cv" element={<CV />}/>
          <Route path="/" element={<Churros />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/tools" element={<ToolsMenu />}/>
        </Routes>
      </div>
    </Router>

  )
}

export default App
