import React from "react";
import { useState, useEffect } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

  const Favs = () => {

  const {providerValue} = useContextGlobal();
  const {stateFav, dispatchFav} = providerValue;

const [fav, setFav] = useState([]);
useEffect(() => {
const data = JSON.parse(localStorage.getItem('data'));
setFav(...fav, data);
}, []);

const deleteLocal = () => {
  localStorage.removeItem('data');
  };
const handleDeleteAll = (e) => {
    e.preventDefault();
    deleteLocal();
    dispatchFav({
    type: "REMOVE_ALL_FAV",
});
    setFav([]);
  }

  return (
    <>
      <h1>Favorite Dentists</h1>
      <button onClick={handleDeleteAll}>Delete all</button>
      <div className="card-grid">
        {fav.map((item) => (
            <Card
              id={item.id}
              name={item.name}
              username={item.username}
            ></Card>
        ))}
      </div>
  </>
  );
};

export default Favs;
