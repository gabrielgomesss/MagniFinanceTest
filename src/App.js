import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
