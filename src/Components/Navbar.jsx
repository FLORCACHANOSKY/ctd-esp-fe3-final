import React from 'react'
import { Link } from "react-router-dom";
import { routes } from "../Routes";
import { useContextGlobal } from './utils/global.context';


const Navbar = () => {
  const {providerValue} = useContextGlobal();
  const{dispatchTheme, stateTheme} = providerValue;
  const handleChangeTheme = () => {
    stateTheme.theme === (stateTheme.theme = "") ? dispatchTheme({type: "THEME_DARK"}) : dispatchTheme({type: "THEME_LIGHT"});
  };

  return (
    <nav className="nav">
      <Link to={routes.home}>Home</Link>
      <Link to={routes.contact}>Contact</Link>
      <Link to={routes.favs}>Favorites</Link>
      <button onClick={handleChangeTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar