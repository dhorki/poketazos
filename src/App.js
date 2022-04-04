import React, { useState } from "react";
import CardItem from "./components/CardItem";
import { SearchInput } from "./components/SearchInput";
import TypeFilter from "./components/TypeFilter";
import { useFetch } from "./hooks/useFetch";
import "./styles.css";

export default function App() {
  /**  Input state management logic here */
  const limit = 2000;
  const allPokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=" + limit;
  const [search, setSearch] = useState("");
  const [typeSearch, setTypeSearch] = useState({});

  const { data, loading, error } = useFetch(allPokemonUrl);
  const { results: pokemons } = data ? data : [];
  // console.log(data);

  const filteredPokemons = pokemons
    ? pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      <hr />
      {loading && <div>Loading...</div>}
      {/** Insert here the input tag **/}
      <SearchInput setSearch={setSearch} search={search} />
      <TypeFilter setTypeSearch={setTypeSearch} />
      <div className="cards">
        {/** Filter pokemons data and map them to return an array of CardItems. */}
        {!loading &&
          filteredPokemons.map(({ name, url }, i) => {
            return (
              // <p key={i}>{name}</p>
              <CardItem
                key={name}
                name={name}
                url={url}
                highlight={search}
                typeSearch={typeSearch}
              />
            );
          })}
      </div>
      <div
        className="go-up-container animate__animated animate__slower animate__infinite animate__swing"
        data-toggle="tooltip"
        data-placement="top"
        title="Go to Top"
      >
        <a href="#top">
          <div />
        </a>
      </div>
    </div>
  );
}
