import React from 'react';
import { useSelector } from 'react-redux';

import AuthorizedNav from './AuthorizedNav';
import UnauthorizedNav from './UnauthorizedNav';

export default function() {
  const user = useSelector(state => state.user);

  return user.isEmpty() ? <UnauthorizedNav/> : <AuthorizedNav/>;
}
