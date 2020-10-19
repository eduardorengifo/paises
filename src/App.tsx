import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { Box } from 'rebass/styled-components';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { lightTheme, darkTheme, GlobalStyle } from 'lib/theme';
import client from 'lib/client';
import { Header, Footer } from 'components';
import CountryView from 'views/Country';
import HomeView from 'views/Home';
import NotFoundView from 'views/NotFound';

const App = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <HelmetProvider>
          <GlobalStyle />
          <Helmet>
            <title>Countries</title>
            <meta name="description" content="List of countries." />
          </Helmet>
          <Router>
            <div>
              <Header
                title="Países"
                isDarkTheme={theme === 'dark'}
                onChangeTheme={toggleTheme}
              />
              <Box as="main" py={5}>
                <Switch>
                  <Route exact path="/" component={HomeView} />
                  <Route
                    sensitive
                    path="/countries/:alpha2Code"
                    component={CountryView}
                  />
                  <Route path="*" component={NotFoundView} />
                </Switch>
              </Box>
              <Footer name="Países" />
            </div>
          </Router>
        </HelmetProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
