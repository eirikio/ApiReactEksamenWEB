const DriversItem = ({ title, age, nationality }) => {
  return (
    <article className="container m-10 mx-auto h-14 border  text-center">
      <div className="grid grid-cols-3">
        <div>
          <span className="font-bold">Driver: </span>
          <br />
          {title}
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
      </div>
    </article>
  );
};

export default DriversItem;
