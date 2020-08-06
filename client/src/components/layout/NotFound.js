import React, { Fragment } from 'react';
import Spinner from './Spinner';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle'></i> Page Not Fount
      </h1>
      <p className='large'>
        Sorry, this page does not exist
        <Spinner />
      </p>
    </Fragment>
  );
};

export default NotFound;
