import React from 'react';
import Link from './Link';

export default {
  title: 'Link',
};

export const Default = (): JSX.Element => (
  <>
    <Link href="/" color="primary">
      Link
    </Link>
    <Link href="/" color="secondary">
      Link
    </Link>
  </>
);

export const Button = (): JSX.Element => (
  <>
    <Link onClick={(): void => {}} color="primary">
      Button
    </Link>
    <Link onClick={(): void => {}} color="secondary">
      Button
    </Link>
  </>
);
