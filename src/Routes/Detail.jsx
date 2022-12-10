import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  useEffect(() => {
    axios(url).then((res) => setDentist([res.data]));
  }, []);

  console.log(url)
  return (
    <>
      <h1>Detail Dentist id </h1>
      <table >
        <thead className= "th">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {dentist.map((dentist) => (
            <tr key={dentist.id}>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>{dentist.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Detail;