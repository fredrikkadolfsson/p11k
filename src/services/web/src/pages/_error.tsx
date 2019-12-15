import React from 'react';
import NextError from 'next/error';
import { InitialProps } from '../typings';

const MyError = (): JSX.Element => <NextError statusCode={405} />;

MyError.getInitialProps = (): InitialProps => ({
  namespacesRequired: ['common'],
});

export default MyError;
