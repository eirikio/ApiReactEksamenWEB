const RacesItem = ({ title, winnerTime, grandPrix }) => {
  return (
    <article className="container m-10 mx-auto h-14 border text-center">
      <div className="grid grid-cols-3">
        <div>
          <span className="font-bold">Winner:</span> <br /> {title}
        </div>
        <div>
          <span className="font-bold">Best time:</span> <br />
          {winnerTime}
        </div>
        <div>
          <span className="font-bold">Location:</span> <br />
          {grandPrix}
        </div>
      </div>
    </article>
  );
};

export default RacesItem;
