import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config.js';
import { useHistory, useLocation } from 'react-router';
import image from '../../images/google-logo.png';
import './Login.css'
import { UserContext } from '../../App.js';

const Login = () => {

    const [signedInUser, setSignedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
          const { displayName, photoURL, email } = result.user;
          const loggedInUser = { name: displayName, email, img: photoURL }
          setSignedInUser(loggedInUser);
          storeAuthToken();
        }).catch(function (error) {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      }
    
      const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function (error) {
            // Handle error
          });
      }

    return (
        <div style={{ height: '100vh' }} className="d-flex align-items-center justify-content-center">
            <div className="text-center">
                <button className="google-btn mb-3" onClick={handleGoogleSignIn}>
                    <img src={image} alt="" /> Sign in with google</button>
                    <p>Please, Sign up for more informations!</p>
            </div>
        </div>
    );
};

export default Login;