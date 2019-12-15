import React from 'react';
import NextError from 'next/error';

const MyError = (): JSX.Element => <NextError statusCode={405} />;

MyError.getInitialProps = (): { namespacesRequired: string[] } => ({
  namespacesRequired: ['common'],
});

export default MyError;
