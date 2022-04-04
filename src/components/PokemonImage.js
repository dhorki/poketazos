import React from "react";

const PokemonImage = ({ sprites }) => {
  // const loadingImage =
  //   "https://cdn.dribbble.com/users/1081076/screenshots/2832850/media/1a3e82a981f79cd09dc21a6b630587da.gif";
  const loadingImage =
    "https://weichiachang.github.io/pokemon-master/img/loading.45600eb9.gif";
  const missingImage =
    "https://www.latercera.com/resizer/vx1_S0T1j_as_Uto1SJAUURxcqs=/768x0/smart/filters:quality(70):format(webp):no_upscale()/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/LUOOHUM2OVEEXG7ZTRSNI6XWLY.png";
  return (
    <img
      className={`card-item animate__animated ${
        sprites?.front_default ? "animate__fadeIn" : "animate__zoomIn"
      }`}
      src={
        sprites
          ? sprites?.front_default
            ? sprites.front_default
            : missingImage
          : loadingImage
      }
      alt="pokemon"
    />
  );
};

export default PokemonImage;
