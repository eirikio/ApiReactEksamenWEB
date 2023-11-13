const DriversItem = ({id, title, age, nationality, image }) => {
  return (
    <article>
        <div>{id}.</div>
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
        <div>{image}</div>
    </article>
  );
};

export default DriversItem;

/*

      <div key={i} className="grid grid-cols-2 items-center border">
        <article>
          <div className="text-left ml-5 font-bold">{id}.</div>
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
          <div>{image}</div>
        </article>
        <img src={`http://localhost:5277/images/${_drivers.image}`} alt="" width="200px" />
      </div>




*/