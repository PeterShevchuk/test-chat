import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { setNewContact } from "../../Redux/Slice";
import { navigation, parseDate, randomId } from "../../vars";

import Icons from "../../Components/SVG/svg";
import styles from "./Contacts.module.css";
const Contacts = ({ filter }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sortContacts = () => [...filter.contacts].sort((a, b) => (b.history[b.history.length - 1] ? b.history[b.history.length - 1].date : b.addDate) - (a.history[a.history.length - 1] ? a.history[a.history.length - 1].date : a.addDate));
  const addNewContact = async () => {
    const newContactId = randomId();
    filter.setSearch("");
    await dispatch(setNewContact({ id: newContactId, name: filter.search, addDate: Date.now(), photo: null, history: [], status: false, newNotification: false }));
    history.push(`/chat/${newContactId}`);
  };
  return (
    <div className={styles.contacts}>
      {filter.contacts.length ? (
        sortContacts().map((item) => (
          <NavLink key={item.id} to={`${navigation.home + "/" + item.id}`} exact className={styles.contact + (item.newNotification ? " " + styles.newNotification : "")} activeClassName={styles.active}>
            <div className={styles.photo}>
              {item.photo ? <img className={styles.contact__photo} src={item.photo} alt={item.name} width="50" height="50" /> : <Icons.NoAvatar size="50" />}
              <Icons.Status className={styles.status} fill={item.status ? "green" : "red"} size="15" />
            </div>
            <div>
              <div className={styles.title}>
                <h4>{item.name}</h4> {<span className={styles.date}>{parseDate(item.history.length > 0 ? item.history[item.history.length - 1].date : item.addDate)}</span>}
              </div>
              <p className={styles.lastMessage}>{item.history.length > 0 ? item.history[item.history.length - 1].message : " No message"}</p>
            </div>
          </NavLink>
        ))
      ) : filter.search ? (
        <button className={styles.addNewContact} onClick={addNewContact}>
          <h3>Contact not found</h3> Add new contact? "{filter.search}"
        </button>
      ) : (
        <h3> No Contacts, type to search name for add new contact</h3>
      )}
    </div>
  );
};

export default Contacts;

Contacts.propTypes = {
  filter: PropTypes.shape({
    search: PropTypes.string,
    setSearch: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
  }).isRequired,
};
