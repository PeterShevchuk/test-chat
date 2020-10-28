import React from "react";
import { GoogleLogin } from "react-google-login";
import FacebookLoginWithButton from "react-facebook-login";

import styles from "./Sing.module.css";
import { setToken, setUserInfo } from "../../Redux/Slice";
import { useDispatch } from "react-redux";

const CLIENT_ID = "24797169312-q57o5u7e58qmav7jk9lb4sj0a8iduqfa.apps.googleusercontent.com";

const errorLogin = (response) => {
  console.log(response);
};

const Login = () => {
  const dispatch = useDispatch();
  const loginSuccessGoogle = (response) => {
    dispatch(setToken(response.accessToken));
    dispatch(setUserInfo({ name: response.profileObj.name, status: true, photo: response.profileObj.imageUrl }));
  };
  const loginFacebook = (response) => {
    if (response.error) return;
    dispatch(setToken(response.accessToken));
    dispatch(setUserInfo({ name: response.name, status: true, photo: response.picture.data.url }));
  };
  return (
    <div className={styles.sing}>
      <div className={styles.authWrapper}>
        <GoogleLogin clientId={CLIENT_ID} buttonText="Login with google" onSuccess={loginSuccessGoogle} onFailure={errorLogin} cookiePolicy={"single_host_origin"} />
        <FacebookLoginWithButton appId="3466653746750592" fields="name,email,picture" callback={loginFacebook} icon="fa-facebook" />
      </div>
    </div>
  );
};

export default Login;
