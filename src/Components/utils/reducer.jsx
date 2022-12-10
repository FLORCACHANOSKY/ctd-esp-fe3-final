import state from "react"
import {TYPES} from "../utils/tipos/TiposFav"


export const reducerTheme = (state, action) => {
    switch (action.type) {
      case "THEME_LIGHT":
        return{
            theme: (state.theme = ""),
          };
      case "THEME_DARK":
        return{
          theme: (state.theme = "dark"),
        };
        default: 
          throw new Error();
      }
    };

  
  export const reducerFav = (state, action) => {
    switch (action.type) {
      case TYPES.ADD_FAV: {
        return [...state, action.payload];
        };
      case TYPES.REMOVE_FAV: {
        return state.filter((i) => i.id !== action.payload);
        };
        case TYPES.REMOVE_ALL_FAV: {
          return [];
        }
      default: {
        throw new Error();
    }
  }
  };