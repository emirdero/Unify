import React from "react";

export const theme = {
  primary: "#242632",
  primary_light: "#4c4e5b",
  primary_dark: "#00000b",
  secondary: "#00C714",
  tretiary: "#6200EE",
  gray: "#E1E2E1",
  gray_light: "#F5F5F6",
  gray_lighter: "#FFFFFF",
};
const user = {};
const setUser = (user) => {};

export const Context = React.createContext({
  user,
  theme,
  setUser,
});
