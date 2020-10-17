import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CountryView from 'views/Country';
import HomeView from 'views/Home';
import NotFoundView from 'views/NotFound';

const App = () => (
  <div className="App">
    <Helmet>
      <title>Countries</title>
      <meta name="description" content="List of countries." />
    </Helmet>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/countries/1">Country 1</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route
            sensitive
            path="/countries/:countryId"
            component={CountryView}
          />
          <Route path="*" component={NotFoundView} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
