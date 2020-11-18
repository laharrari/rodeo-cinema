import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Lobby from './Components/Lobby';
import Theater from './Views/Theater';

function App() {
  return (
    <div className="bg-discordSec relative pb-10 min-h-screen">
      <Router>
        <Header />

        <div className="p-3">
          <Switch>

            <Route exact path="/" component={Lobby} />

            <Route path="/theater" component={Theater} />

          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;