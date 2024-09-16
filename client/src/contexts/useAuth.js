import React from "react";
import { AuthContext } from "./authentication";

const useAuth = () => React.useContext(AuthContext);

export default useAuth;
