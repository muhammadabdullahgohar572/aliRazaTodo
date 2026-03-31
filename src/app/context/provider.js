"use client";
import React, { useEffect, useState } from "react";
import UserContext from "./usercontext";
import { currentuser } from "../service/service";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    async function load() {
      try {
        const tempUser = await currentuser();
        // console.log(tempUser);
        setUser({ ...tempUser });
      } catch (error) {
        console.log(error);
        // toast.error("error in loading current  user");
        setUser(undefined);
      }
    }
    load();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
