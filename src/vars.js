import axios from "axios";

export const navigation = {
  home: "/chat",
  reg: "/registration",
  login: "/login",
  redirect: "/login",
};

export const parseDate = (date, num = 0) => {
  const parseDate = [new Date(date).toLocaleDateString(), new Date(date).toLocaleTimeString("en-US")];
  return parseDate[num];
};

export const randomJoke = async () => await axios({ method: "get", url: "https://api.chucknorris.io/jokes/random" }).then((response) => response.data);

export const randomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const randomId = (maxNum = 20) => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  while (text.length < maxNum) {
    text += possible[Math.floor(Math.random() * possible.length)];
  }

  return text;
};
