import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import theme from './theme';
import LoginForm from './components/login';
import CurrencyPage from "./components/currencies/currencyPage";

const PrivateRoute = ({ component, ...props }) => {
  if (localStorage.getItem('access_token')) {
    return (
      <Route {...props}>
        {component}
      </Route>
    );
  }
  return (<Redirect to="/login" />);
};

const PublicRoute = ({ component, ...props }) => {
  if (localStorage.getItem('access_token')) {
    return (<Redirect to="/my_currency" />);
  }
  return (
    <Route {...props}>
      {component}
    </Route>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <Router>
          <Switch>
            <PublicRoute exact path="/login" component={<LoginForm />} />
            <PrivateRoute exact path="/my_currency" component={<CurrencyPage />} />
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Redirect to="/login" />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
