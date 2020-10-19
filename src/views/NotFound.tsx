import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';

import { ErrorMessage } from 'components';

const NotFound = () => {
  const msg = 'Page not found';
  const history = useHistory();

  return (
    <div>
      <Helmet>
        <title>{msg}</title>
      </Helmet>
      <ErrorMessage
        height="60vh"
        message={msg}
        buttonText="Go to homepage"
        onTryAgain={() => history.push('/')}
      />
    </div>
  );
};

export default NotFound;
