import { useEffect, useReducer, createContext, useContext } from "react";
import { reducer } from "./reducer";
const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`;

const AppContext = createContext();

const initialState = {
  loading: true,
  error: false,
  cocktails: [],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCocktails = async () => {
    dispatch({ type: "STARTED_FETCHING" });
    try {
      const response = await fetch(url);
      const { drinks } = await response.json();
      dispatch({ type: "FETCH_SUCCESS", payload: drinks });
    } catch (error) {
      dispatch({ type: "FETCH_FAIL" });
    }
  };
  useEffect(() => {
    fetchCocktails();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
