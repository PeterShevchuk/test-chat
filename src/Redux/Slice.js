import { createSlice } from "@reduxjs/toolkit";

import listContacts from "../db/startContacts.json";

const initialStateSession = {
  user: {},
  token: null,
  contacts: listContacts,
};
const sessionSlice = createSlice({
  name: "session",
  initialState: initialStateSession,
  reducers: {
    setToken: (state, { payload }) => ({ ...state, token: payload }),
    setUserInfo: (state, { payload }) => ({ ...state, user: payload }),
    loginOut: (state) => ({ ...state, token: null, user: {} }),
    sendMessage: (state, { payload }) => ({ ...state, contacts: state.contacts.map((item) => (item.id === payload.id ? { ...item, history: [...item.history, payload.newMessage], newNotification: payload.newMessage.author } : item)) }),
    seeHistory: (state, { payload }) => (state.contacts.find((item) => item.id === payload).newNotification ? { ...state, contacts: state.contacts.map((item) => (item.id === payload ? { ...item, newNotification: false } : item)) } : state),
    setNewContact: (state, { payload }) => ({ ...state, contacts: [...state.contacts, payload] }),
    deleteContact: (state, { payload }) => ({ ...state, contacts: state.contacts.filter((contact) => contact.id !== payload) }),
    deleteContactHistory: (state, { payload }) => ({ ...state, contacts: state.contacts.map((contact) => (contact.id === payload ? { ...contact, history: [] } : contact)) }),
  },
});

const initialStateGlobal = {
  windowSize: window.innerWidth,
};
const globalSlice = createSlice({
  name: "global",
  initialState: initialStateGlobal,
  reducers: {
    setWindowSize: (state, { payload }) => ({ ...state, windowSize: payload }),
  },
});

export const session = sessionSlice.reducer;
export const { setError, setToken, setUserInfo, loginOut, sendMessage, seeHistory, setNewContact, deleteContact, deleteContactHistory } = sessionSlice.actions;

export const global = globalSlice.reducer;
export const { setWindowSize } = globalSlice.actions;
