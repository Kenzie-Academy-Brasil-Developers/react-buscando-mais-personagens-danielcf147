const CharCard = ({ charactersList }) => {
  return (
    <div className="inner-container">
      {charactersList.map((item) =>
        item.status === "Alive" ? (
          <div
            className="div-box"
            style={{
              backgroundColor: " rgb(220, 240, 249)",
            }}
            key={item.id}
          >
            <h2 style={{ color: "green" }}>{item.name}</h2>
            <img className="img" src={item.image} alt="" />
          </div>
        ) : (
          <div
            className="div-box"
            style={{ backgroundColor: "rgb(211, 143, 143" }}
            key={item.id}
          >
            <h2 style={{ color: "rgb(152, 88, 88" }}>{item.name}</h2>
            <img className="img" src={item.image} alt="" />
          </div>
        )
      )}
    </div>
  );
};
export default CharCard;
