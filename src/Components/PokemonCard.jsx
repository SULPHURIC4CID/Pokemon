import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "../css/PokemonCard.css";

const PokemonCard = (props) => {
  const [imageURL, setImageURL] = useState("");

  let getImage = async () => {
    try {
      console.log(props.details.url);
      let response = await axios.get(props.details.url);
      setImageURL(response.data.sprites.front_default);
      console.log(response.data.sprites.front_default);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className="Pokemon-card">
      <img src={imageURL} className="Pokemon-image"></img>
      <div className="Pokemon-text">{props.details.name}</div>
    </div>
  );
};

export default PokemonCard;
