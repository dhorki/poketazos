import React from "react";

export const SearchInput = ({ setSearch, search }) => {
  const handleOnChange = ({ target }) => {
    setSearch(target.value.trim());
  };

  const handleSubmit = (form) => {
    form.preventDefault();
    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleOnChange}
        placeholder="filter..."
        value={search}
      />
      <button className="btn btn-primary ms-3">Clear</button>
    </form>
  );
};
