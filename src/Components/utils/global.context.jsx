import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useReducer,
} from "react";
import axios from "axios";
import { reducerFav } from "./reducer";
import { reducerTheme } from "./reducer";


const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  
  const [dentist, setDentist] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios(url)
    .then((res) => setDentist(res.data));
  }, []);

  function initFavoritos(initialValue) {
    return localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : initialValue;
  }
  
  const [stateFav, dispatchFav] = useReducer(reducerFav, initialState.data, initFavoritos);
  const[stateTheme, dispatchTheme] = useReducer(reducerTheme, initialState);

  const providerValue = useMemo(
    () => ({ 
      dentist, 
      setDentist, 
      stateFav, 
      dispatchFav, 
      stateTheme, 
      dispatchTheme,
    }),
    [dentist, setDentist, stateFav, dispatchFav, stateTheme, dispatchTheme]
  );

  return (
    <ContextGlobal.Provider value={{ providerValue }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};