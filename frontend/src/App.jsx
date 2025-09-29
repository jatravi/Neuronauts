import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Emotion from './components/emotions';
import Symptoms from './components/symptoms';
import './style.css'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/emotions" component={Emotion} />
        <Route path="/symptoms" component={Symptoms} />
      </Switch>
    </Router>
  );
}

export default App;
