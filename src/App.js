import './scss/App.css';
import Home from './components/Home';
import store from './store';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailHome from './components/detail-comp/DetailHome';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/detail/:id' component={DetailHome} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
