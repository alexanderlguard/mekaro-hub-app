import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Dashboard from './components/pages/dashboard/Dashboard';

import Toast from './components/UI/Toast';
import LoadingShadow from './components/UI/LoadingShadow';

import PrivateRoute from './components/routes/PrivateRoute';
import ProtectedRoute from './components/routes/ProtectedRoute';

// ----------------------------------------------------------------------
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <LoadingShadow />

          <Switch>
            <ProtectedRoute exact path="/" component={Login} />
            <ProtectedRoute exact path="/signup" component={SignUp} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>

          <Toast />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
