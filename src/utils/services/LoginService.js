import React from "react";

export const CheckLoginDetails = (user) => {
  const payload = {
    username: user.username,
    password: user.password
  };
  // if (payload.username.length && payload.username.password) {
  fetch("./data/users.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then((response) => response.json())
    .then((users) => {
      console.log(users);
      let validuser = users.filter((user) => {
        return (
          user.username === payload.username &&
          user.password === payload.password
        );
      });
      if (validuser.length) {
        return true;
      } else {
        return false;
      }
    });

  // }
};
