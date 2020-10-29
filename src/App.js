import { BrowserRouter as Router} from 'react-router-dom'
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <div className="App">
        <Landing />
      </div>
    </Router>
  );
}

export default App;
