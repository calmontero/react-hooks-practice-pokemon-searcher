import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonList }) {
  function populateList() {
    return pokemonList.map((pokemon) =>(
      <PokemonCard  pokemon={pokemon} key={pokemon.id} />
    ));    
  }

  return (
    <Card.Group itemsPerRow={6}>
      {populateList()}
    </Card.Group>
  );
}

export default PokemonCollection;
