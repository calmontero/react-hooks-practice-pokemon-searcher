import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((response) => response.json())
    .then((pokemonData) => setPokemon(pokemonData))
  }, []);

  function handleAddPokemon(newPokemon) {
    setPokemon([...pokemon, newPokemon]);
  }

  const displayPokemons = pokemon.filter((pokemonList) => 
    pokemonList.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search onChangeSearch={setSearch} />
      <br />
      <PokemonCollection pokemonList={displayPokemons} />
    </Container>
  );
}

export default PokemonPage;
