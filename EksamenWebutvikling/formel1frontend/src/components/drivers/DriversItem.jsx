const DriversItem = ({ id, name, age, nationality, image }) => {
  return (
    <article>
      <div>{id}</div>
      <div>
        <span className="font-bold">Driver: </span>
        <br />
        {name}
      </div>
      <div>
        <span className="font-bold">Age: </span>
        <br />
        {age}
      </div>
      <div>
        <span className="font-bold">Nationality: </span>
        <br />
        {nationality}
      </div>
      <div>{image}</div>
    </article>
  );
};

export default DriversItem;
