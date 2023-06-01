import { Home, Product } from "./components/pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/property" Component={Product} />
      </Routes>
    </Router>
  );
}

export default App;
