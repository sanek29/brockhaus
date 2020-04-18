import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loginCheck } from '~/actions/user';

export default function (ComposedClass) {
  function AuthenticationCheck(props) {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => { dispatch(loginCheck()) }, [dispatch]);

    return (
      <ComposedClass {...props} />
    )
  }
  return AuthenticationCheck;
}
