import React, { useState } from "react";
import TypeBadge from "./TypeBadge";

const ToggleTypeBadge = ({ type, setTypeSearch }) => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
    setTypeSearch((s) => ({ ...s, [type.name]: toggle ? true : false }));
  };

  return (
    <div
      key={type.name}
      className={toggle ? "toggle" : ""}
      onClick={handleClick}
    >
      <TypeBadge type={type.name} />
    </div>
  );
};

export default ToggleTypeBadge;
