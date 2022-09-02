import './Cardssearch.css';
import { useState, useEffect } from 'react';
import API from "../../api/index";

function Cards(props) {

  return (
    <div className="b-c">
      <h4 className="t-ca-s">{props.title}</h4>
      <div className="scrol-card-s">
        <div className="container-s">
          {
            // props.suggest.map((data) => (
            <div className="card card-sugg-s">
              <img className="card-img-top c-img-s" src="./assets/UmmakHuriya.svg" alt="Card image" />
              <div className="card-body">
                <p className="card-title name-food-s">{props.suggest?.name_Suggestions}</p>
                <p className="card-text-s">
                  {props.ingredient.map((n_ing) =>
                    n_ing.SuggestionId === props.suggest.id ? (
                      <>
                        {n_ing?.name_Ingredient},
                      </>
                    ) : null
                  )}
                </p>
                <div className="card-time-s">
                  <img className="card-img-top c-i-time-s" src={"./assets/Time.svg"} alt="Card image" />
                  {/* 163 minute and 2 second between asr and maghreb - 15 minute */}
                  {props.suggest?.duration > 163.2 ? (
                    <div className="time-s">
                      {props.suggest?.duration} min Before Asr
                    </div>
                  ) : (
                    <div className="time-s">
                      {props.suggest?.duration} min After Asr
                    </div>
                  )
                  }
                </div>
              </div>
            </div>
            // ))
          }
        </div>
      </div>
    </div>
  );
}

export default Cards;
