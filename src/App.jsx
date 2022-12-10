import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {routes} from './Routes';
import {Routes, Route} from 'react-router-dom';
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import NotFound from "./Routes/NotFound";
import { useContextGlobal } from "./Components/utils/global.context";


function App() {

  const {providerValue} = useContextGlobal();
  const{dispatchTheme, stateTheme} = providerValue;
  const handleChangeTheme = () => {
    stateTheme.theme === (stateTheme.theme = "") ? dispatchTheme({type: "THEME_DARK"}) : dispatchTheme({type: "THEME_LIGHT"});
  };

  return (
      <>
      <div className={stateTheme.theme}>
      <Navbar/>
      <Routes>
          <Route path={routes.home} element={<Home/>}/>
          <Route path={routes.detail} element={<Detail/>}/>
          <Route path={routes.favs} element={<Favs/>}/>
          <Route path={routes.contact} element={<Contact/>}/>  
          <Route path='*' element={<NotFound/>}/>  
      </Routes>
      <Footer/>
      </div>
      </>
  );
}

export default App;


