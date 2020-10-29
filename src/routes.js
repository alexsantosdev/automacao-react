import { Switch, Router } from 'react-router-dom'
import Landing from './pages/Landing'

export default function Routes() {
  return(
    <Switch>
      <Router path='/' exact component={Landing} />
    </Switch>
  );
}