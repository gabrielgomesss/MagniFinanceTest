import './App.css';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'
import Routes from './Routes'
import RoutesApp from './Routes'
function App() {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
}

export default App;
