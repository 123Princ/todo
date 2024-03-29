import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate,  } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated} = useSelector((state) => state.auth);
console.log(isAuthenticated,"jdsjf")
if (!isAuthenticated) {
 return   <Navigate to="/login"/>
   
  }

  return children;
};

export default PrivateRoute;
