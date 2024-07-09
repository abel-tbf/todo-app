import { Suspense, lazy } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

const TodoApp = lazy(() => import("./TodoApp"));
const About = lazy(() => import("./About"));

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<TodoApp />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
