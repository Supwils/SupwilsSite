import React, { useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode  from 'jwt-decode';
const clientId = '676117786059-vh1ctchkfoej94vobq6vlfdgpbk19c09.apps.googleusercontent.com';

const GoogleAuth = ({ setUser }) => {
    const handleLoginSuccess = (response) => {
        // const user = response.credential;
        // if (user.email === 'huahaoshang2000@gmail.com') {
        //     setUser(user);
        // } else {
        //     alert('Unauthorized user');
        // }
        setUser(response);
    };

    const handleLoginFailure = () => {
        alert('Login failed');
    };

    return (
        <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
            onSuccess={handleLoginSuccess}
                onError={handleLoginFailure}
                cookiePolicy={'single_host_origin'}
            />
        </GoogleOAuthProvider>
     
    );
};

export default GoogleAuth;