import { StyleReset } from 'atomize';
import LoginForm from './Login.js'
import Home from './Home.js'
import Root from './Root.js'
import '../App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/me">
            <Home />
          </Route>
          <Route path="/">
            <Root />
          </Route>
        </Switch>
      </BrowserRouter>
      <StyleReset />
    </div>
  );
}

export default App;
