import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const { providerValue } = useContextGlobal();
  const { dentist, stateTheme } = providerValue;

  return (
    <>
      
      <main>
        <h1>Home</h1>
        <div className="card-grid" >
          {dentist.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              username={item.username}
            ></Card>
          ))}
        </div>
      </main>
     
    </>
  );
};

export default Home;