import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {

  const { providerValue } = useContextGlobal();
  const { stateFav, dispatchFav } = providerValue;
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(stateFav));
  }, [stateFav]);


  const addFav = ()=>{
    dispatchFav({
      type: "ADD_FAV",
      payload: {name, username, id},
    });
    alert(`${username} has been added to favorites>!`);
  }

  return (
    <div className="card">
      <Link key={id} to={`/dentist/${id}`}>
        <img src='./images/doctor.jpg' alt="imagen doc" />
        <h3>{name}</h3>
        <h3>{username}</h3>
      </Link>

        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
