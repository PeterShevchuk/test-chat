import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navigation } from "../../vars";

import styles from "./Sing.module.css";

const Registration = () => {
  const [userInfo, setUserInfo] = useState({ password: "", email: "", name: "" });
  const handleInput = ({ target }) => {
    setUserInfo({ ...userInfo, [target.name]: target.value });
  };
  const onSubmit = () => {};
  return (
    <div className={styles.sing}>
      <div className={styles.authWrapper}>
        <form onSubmit={onSubmit}>
          <div className={styles.field}>
            <input className={styles.input} type="text" placeholder="Name" name="name" value={userInfo.name} onChange={handleInput} required autoFocus />
          </div>
          <div className={styles.field}>
            <input className={styles.input} type="email" placeholder="Email" name="email" value={userInfo.email} onChange={handleInput} required autoFocus />
          </div>
          <div className={styles.field}>
            <input className={styles.input + " " + styles.inputPassword} placeholder="Password" type="password" name="password" value={userInfo.password} onChange={handleInput} minLength="6" required />
          </div>
          <div className={styles.authBtnWrapper}>
            <button className={styles.singing} type="submit">
              Register
            </button>
          </div>
          <p className={styles.descr}>
            If you do not have any account, please <Link to={navigation.login}>login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
