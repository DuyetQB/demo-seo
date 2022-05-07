import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Content from "./content";
import Items from "./items";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Content />}>
      </Route>
      <Route path="/item/:id" element={<Items />}>
      </Route>
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
