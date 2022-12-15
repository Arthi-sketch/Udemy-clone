import { useReducer, createContext, useEffect } from "react";

//1. create context
export const Context = createContext();

//3.) update reducer
function rootReducer(state, action) {
    // console.log("from context:: state->",state,"\naction->",action);
  switch (action.type) {
    case "Login":
      return { ...state, user: action.payload };
    case "Logout":
      return { ...state, user: null };
    default:
      return { ...state };
  }
}

export const Provider = ({ children }) => {
  //1.) define reducer  
  const [state, dispatch] = useReducer(rootReducer, { user: null });

  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(window.localStorage.getItem("user")),
    });
  }, []);
  
  return (
    //2. provide values
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
