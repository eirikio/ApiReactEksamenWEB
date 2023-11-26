const DriversMiniItem = ({ id, name }) => {
  return (
    <article>
      <div>
        <span className="font-bold">Driver: </span>
        <br />
        {name}
      </div>
      <div>Id: {id}</div>
      <br />
    </article>
  );
};

export default DriversMiniItem;
