import React, { useState } from "react";
import CardItem from "./components/CardItem";
import { SearchInput } from "./components/SearchInput";
import { useFetch } from "./hooks/useFetch";
import "./styles.css";

export default function App() {
  /**  Input state management logic here */
  const limit = 2000;
  const allPokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=" + limit;
  const [search, setSearch] = useState("");

  const { data, loading, error } = useFetch(allPokemonUrl);
  const { results: pokemons } = data ? data : [];
  console.log(data);

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      <hr />
      {loading && <div>Loading...</div>}
      {/** Insert here the input tag **/}
      <SearchInput setSearch={setSearch} search={search} />
      <div className="cards">
        {/** Filter pokemons data and map them to return an array of CardItems. */}
        {!loading &&
          pokemons
            .filter((pokemon) =>
              pokemon.name.toLowerCase().includes(search.toLowerCase())
            )
            .map(({ name, url }, i) => {
              return (
                // <p key={i}>{name}</p>
                <CardItem key={name} name={name} url={url} highlight={search} />
              );
            })}
      </div>
    </div>
  );
}
