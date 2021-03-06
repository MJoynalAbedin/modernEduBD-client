import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import jwt_decode from "jwt-decode";
import { UserContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {

    const [signedInUser, setSignedInUser] = useContext(UserContext);
    
    const isLoggedIn = () => {
      const token = sessionStorage.getItem('token');
      if(!token){
        return false;
      }
      const decodedToken = jwt_decode(token);
      const currentTime = new Date().getTime() / 1000;
      return decodedToken.exp > currentTime;
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        (signedInUser.email || isLoggedIn()) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;