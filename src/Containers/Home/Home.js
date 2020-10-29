import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Contacts from "../../Components/Contacts/Contacts";
import Message from "../../Components/Message/Message";

import Icons from "../../Components/SVG/svg";
import { loginOut } from "../../Redux/Slice";
import { navigation } from "../../vars";
import styles from "./Home.module.css";

const noMessage = () => {
  return <h2 className={styles.chooseContact}>To view your correspondence history, select one of the contacts from the list</h2>;
};

const Home = () => {
  const { user, contacts } = useSelector((state) => state.session);
  const { windowSize } = useSelector((state) => state.global);
  const [showMess, setShowMess] = useState(false);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const filterContacts = () => {
    return contacts.filter((contact) => contact.name.toUpperCase().includes(search.toUpperCase()) || contact.history.some((mess) => mess.message.toUpperCase().includes(search.toUpperCase())));
  };
  // useEffect(() => setShowMess(windowSize > 746), [windowSize]);
  return (
    <div className={styles.home}>
      <div className={styles.left + " " + (showMess && windowSize < 746 && styles.showMess)}>
        <div className={styles.leftTop}>
          <div className={styles.profile}>
            {user.photo ? (
              <div className={styles.photo}>
                <img src={user.photo} alt={user.name} width="100%" />
                <Icons.Status className={styles.status} fill={"green"} size="15" />
              </div>
            ) : (
              <Icons.NoAvatar size="50" />
            )}
            <h3 className={styles.profileName}>{user.name}</h3>
            <div className={styles.exitButton} onClick={() => dispatch(loginOut())}>
              <Icons.Exit size="30" />
            </div>
          </div>
          <div className={styles.search}>
            <input type="text" name="search" placeholder="Search (name or message) or start new chat" onChange={(e) => setSearch(e.target.value)} value={search} />
          </div>
        </div>
        <h2 className={styles.title}>Chats</h2>
        <Contacts filter={{ search, setSearch, contacts: filterContacts() }} />
      </div>
      <div className={styles.right + " " + (!showMess && windowSize < 746 && styles.showMess)}>
        <Switch>
          <Route path={navigation.home + "/:id"} render={(props) => <Message {...props} showMess={{ showMess, setShowMess }} />} />
          <Route path={navigation.home} component={noMessage} />
        </Switch>
      </div>
    </div>
  );
};

export default Home;
