import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { parseDate, randomJoke, randomArbitrary } from "../../vars";
import { sendMessage, seeHistory, deleteContactHistory, deleteContact } from "../../Redux/Slice";

import Icons from "../../Components/SVG/svg";
import styles from "./Message.module.css";
import { useHistory } from "react-router-dom";

const autoReply = (id) => (dispatch) => {
  let message;
  randomJoke().then((response) => (message = response.value));
  setTimeout(() => {
    dispatch(sendMessage({ id, newMessage: { author: true, date: Date.now(), message } }));
  }, randomArbitrary(5000, 20000));
};

const Message = ({ match }) => {
  const [messageHistory, setMessageHistory] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const [newMessage, setNewMessage] = useState("");
  const { contacts } = useSelector((state) => state.session);
  useEffect(() => {
    const parse = match.url.split("/");
    const findContact = contacts.find((item) => item.id === parse[2]);
    if (!findContact) {
      history.push(`/chat/`);
      return;
    }
    setMessageHistory(findContact);
    dispatch(seeHistory(parse[2]));
  }, [match.url, contacts, dispatch, history]);
  const inputSendMessage = () => {
    if (newMessage === "" || newMessage === " ") return;
    dispatch(sendMessage({ id: messageHistory.id, newMessage: { author: false, date: Date.now(), message: newMessage } }));
    setNewMessage("");
    dispatch(autoReply(messageHistory.id));
  };
  return (
    <>
      {Object.keys(messageHistory).length > 0 && (
        <>
          <div className={styles.message}>
            <div className={styles.photo}>
              {messageHistory.photo ? <img src={messageHistory.photo} alt={messageHistory.name} width="100%" /> : <Icons.NoAvatar size="50" />}
              <Icons.Status className={styles.status} fill={messageHistory.status ? "green" : "red"} size="15" />
            </div>
            <h3 className={styles.profileName}>{messageHistory.name}</h3>
            <div className={styles.options}>
              <Icons.Clear size={50} onClick={() => dispatch(deleteContactHistory(messageHistory.id))} />
              <Icons.Remove size={50} onClick={() => dispatch(deleteContact(messageHistory.id))} />
            </div>
          </div>
          <div className={styles.messagesHistory}>
            {messageHistory.history.length ? (
              <ul>
                {messageHistory.history.map((item) => (
                  <li key={"mess" + item.date} className={styles.messagesHistoryMess + " " + (item.author ? styles.messagesHistoryMessAuthor : "")}>
                    {item.author && <div className={styles.photo}>{messageHistory.photo ? <img src={messageHistory.photo} alt={messageHistory.name} width="100%" /> : <Icons.NoAvatar size="50" />}</div>}
                    <div className={styles.messagesHistoryBlock}>
                      <p className={styles.messagesHistoryText}>{item.message}</p>
                      <div className={styles.messageDate}>
                        {parseDate(item.date).split(".").join("/")}, {parseDate(item.date, 1)}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <h2 className={styles.noMessages}>No Messages</h2>
            )}
          </div>
          <div className={styles.meesageSend}>
            <div className={styles.meesageSendInput}>
              <input type="text" placeholder="Type your message" onChange={(e) => setNewMessage(e.target.value)} value={newMessage} />
              <button onClick={inputSendMessage}>
                <Icons.Send className={styles.messageSend} size="30" />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Message;
