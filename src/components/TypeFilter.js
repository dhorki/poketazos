import React from "react";
import { useFetch } from "../hooks/useFetch";
import ToggleTypeBadge from "./ToggleTypeBadge";

const TypeFilter = ({ setTypeSearch }) => {
  const typesUrl = "https://pokeapi.co/api/v2/type/";
  const { data, loading, error } = useFetch(typesUrl);
  const { results: types } = data;
  // console.log(types);

  return (
    <div className="badge-filter-container">
      {types?.map((type) => {
        return (
          <ToggleTypeBadge
            key={type.name}
            type={type}
            setTypeSearch={setTypeSearch}
          />
        );
      })}
    </div>
  );
};

export default TypeFilter;
