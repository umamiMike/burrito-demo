import { createContext } from "react";
import { base_state } from "./base_state";

const AppContext = createContext(base_state);

export default AppContext;
