import { createContext } from 'react';
import baseState from './baseState';

const AppContext = createContext(baseState);

export default AppContext;
