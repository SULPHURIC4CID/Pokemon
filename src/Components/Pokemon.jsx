import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import "../css/Pokemon.css";

const Pokemon = () => {
  const [pokemonDetails, setPokemonDetails] = useState([]);

  let getPokemonData = async () => {
    try {
      let response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
      );
      setPokemonDetails(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemonData();
  }, []);
  return (
    <div className="Pokemon">
      {pokemonDetails.map((pokemon) => {
        return <PokemonCard details={pokemon}></PokemonCard>;
      })}
    </div>
  );
};

export default Pokemon;
