import './Cards.css';

function Cards(props) {  
  return (
    <div className="b-cont">
      <h4 className="t-ca">{props.title}</h4>
      <div className="scrol-card">
        <div className="container">
          {props.suggest.map((data) => (
            <div className="card card-sugg">
              <img className="card-img-top c-img" src="./assets/UmmakHuriya.svg" alt="Card image" />
              <div className="card-body">
                <p className="card-title name-food">{data?.name_Suggestions}</p>
                <p className="card-text">
                {props.ingredient.map((n_ing) =>
                  n_ing.SuggestionId === data.id ? (
                    <>
                      {n_ing?.name_Ingredient}, 
                    </>  
                  ) : null
                )}
                </p>
                <div className="card-time">
                  <img className="card-img-top c-i-time" src={"./assets/Time.svg"} alt="Card image" />
                  <div className="time">{data?.duration} min</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
