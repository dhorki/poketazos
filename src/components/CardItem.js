import { useFetch } from "../hooks/useFetch";
import React, { useState } from "react";
import HighlightableText from "./HighlightableText";
import PokemonImage from "./PokemonImage";
import TypeBadge from "./TypeBadge";

const CardItem = ({ name, sprite = "", url, highlight }) => {
  const [flip, setFlip] = useState(false);
  const { data, loading, error } = useFetch(url);
  const { types, sprites } = data;
  const fixedName = name[0].toUpperCase() + name.substring(1);
  const firstType = sprites ? types[0].type.name : "normal";
  const typesLen = sprites ? types.length : 0;

  return (
    <div
      className="card-container"
      onMouseEnter={() => {
        if (sprites) {
          setFlip(true);
        }
      }}
      onMouseLeave={() => {
        setFlip(false);
      }}
    >
      <div
        className={`card-item animate__animated animate__fast ${
          flip ? "animate__flipInY back" : "animate__flipInX"
        } ${firstType}-type-bg`}
      >
        {flip ? (
          <>
            <div className="types-len">{typesLen}</div>
            <div className={`badges-container badges-${typesLen}`}>
              {types?.map(({ type }) => {
                return <TypeBadge key={type.name} type={type.name} />;
              })}
            </div>
          </>
        ) : (
          <>
            <h2>
              <HighlightableText text={fixedName} highlight={highlight} />
            </h2>
            <PokemonImage sprites={sprites} />
          </>
        )}
      </div>
    </div>
  );
};

export default CardItem;
