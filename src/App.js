import './App.css';
import { HashRouter } from 'react-router-dom'
import Routes from './Routes'
function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes />
    </HashRouter>
  );
}

export default App;
