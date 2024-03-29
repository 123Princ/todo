import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate,  } from 'react-router-dom';

const PublicRoute = ({ children, ...rest }) => {
  const { isAuthenticated} = useSelector((state) => state.auth);
console.log(isAuthenticated,"jdsjf")
if (isAuthenticated) {
 return   <Navigate to="/todo"/>
   
  }

  return children;
};

export default PublicRoute;
