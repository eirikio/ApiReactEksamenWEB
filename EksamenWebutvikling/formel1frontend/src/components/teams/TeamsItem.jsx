const TeamsItem = ({ title, driver1, driver2 }) => {
  return (
    <article className="container m-10 mx-auto h-14 border text-center">
      <div className="grid grid-cols-3">
        <div>
          <span className="font-bold">Team manufacturer:</span> <br />
          {title}
        </div>
        <div>
          <span className="font-bold">Driver 1:</span> <br />
          {driver1}
        </div>
        <div>
          <span className="font-bold">Driver 2:</span> <br />
          {driver2}
        </div>
      </div>
    </article>
  );
};

export default TeamsItem;
