const TypeBadge = ({ type }) => {
  return (
    <div
      className={`badge-bg  ${type}-badge-bg`}
      data-toggle="tooltip"
      data-placement="top"
      title={type}
    />
  );
};

export default TypeBadge;
