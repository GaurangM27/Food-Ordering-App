import { createContext } from "react";

const UserContext = createContext({
  loggedInInfo: "Default User",
});

export default UserContext;
