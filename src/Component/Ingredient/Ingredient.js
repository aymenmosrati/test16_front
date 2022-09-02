import './Ingredient.css';

function Cards() {
    return (
        <>
          <h5 className='title'>Ingredient suggestions</h5>
          <div className="ingredient">
            <div className="image-ingredient-icon">
                <div className="image">
                    <img src="./assets/Carrot.svg" className="img-ingredient" alt="" />
                    <span className='title-ingredient'>Carrot</span>
                </div>
                <div className="image">
                    <img src="./assets/Tomato.svg" className="img-ingredient" alt="" />
                    <span className='title-ingredient'>Tomato</span>
                </div>
                <div className="image">
                    <img src="./assets/Tuna.svg" className="img-ingredient" alt="" />
                    <span className='title-ingredient'>Tuna</span>
                </div>
                <div className="image">
                    <img src="./assets/Onion.svg" className="img-ingredient" alt="" />
                    <span className='title-ingredient'>Onion</span>
                </div>
                <div className="image">
                    <img src="./assets/Parsley.svg" className="img-ingredient" alt="" />
                    <span className='title-ingredient'>Parsley</span>
                </div>
                <div className="image">
                    <img src="./assets/Rice.svg" className="img-ingredient" alt="" />
                    <span className='title-ingredient'>Rice</span>
                </div>
                
            </div>
           </div>
        </>
    );
}

export default Cards;
